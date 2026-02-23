/**
 * Contact Form Submission API Route
 * Feature: 007-contact
 * 
 * Handles contact form submissions with:
 * - Server-side validation
 * - Cloudflare Turnstile verification
 * - Email delivery via Nodemailer
 */

import nodemailer from 'nodemailer';
import type { 
  ContactFormData, 
  TurnstileVerifyResponse,
  ContactAPISuccessResponse,
  ContactAPIErrorResponse 
} from '~/types/contact';

/**
 * Verify Cloudflare Turnstile token server-side
 */
async function verifyTurnstile(token: string, secretKey: string): Promise<boolean> {
  const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  
  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token
      })
    });
    
    const result: TurnstileVerifyResponse = await response.json();
    
    if (!result.success) {
      console.error('Turnstile verification failed:', result['error-codes']);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (optional field)
 */
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[0-9+\-\s()]+$/;
  return phoneRegex.test(phone);
}

/**
 * Validate and sanitize form data
 */
function validateFormData(body: any): ContactFormData {
  // Validate name
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Name must be at least 2 characters' 
    });
  }
  if (body.name.length > 100) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Name must be less than 100 characters' 
    });
  }
  
  // Validate email
  if (!body.email || typeof body.email !== 'string') {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Email is required' 
    });
  }
  if (!isValidEmail(body.email)) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Invalid email format' 
    });
  }
  if (body.email.length > 254) {
    throw createError({ 
      statusCode: 400,
      statusMessage: 'Email must be less than 254 characters' 
    });
  }
  
  // Validate phone (optional)
  if (body.phone && typeof body.phone === 'string') {
    if (!isValidPhone(body.phone)) {
      throw createError({ 
        statusCode: 400, 
        statusMessage: 'Invalid phone number format' 
      });
    }
    if (body.phone.length > 20) {
      throw createError({ 
        statusCode: 400, 
        statusMessage: 'Phone number must be less than 20 characters' 
      });
    }
  }
  
  // Validate message
  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 10) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Message must be at least 10 characters' 
    });
  }
  if (body.message.length > 2000) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Message must be less than 2000 characters' 
    });
  }
  
  // Validate Turnstile token
  if (!body.turnstileToken || typeof body.turnstileToken !== 'string') {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Missing verification token' 
    });
  }
  
  return {
    name: body.name.trim(),
    organization: body.organization?.trim() || '',
    position: body.position?.trim() || '',
    email: body.email.trim().toLowerCase(),
    phone: body.phone?.trim() || '',
    message: body.message.trim(),
    turnstileToken: body.turnstileToken
  };
}

/**
 * Send email via Nodemailer with Gmail SMTP
 */
async function sendContactEmail(formData: ContactFormData, config: any): Promise<void> {
  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: parseInt(config.smtpPort),
    secure: false, // true for 465, false for other ports (TLS)
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword
    }
  });
  
  // Construct email content
  const textBody = `
New Contact Form Submission

Name: ${formData.name}
Organization: ${formData.organization || 'Not provided'}
Position: ${formData.position || 'Not provided'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
Submitted at: ${new Date().toISOString()}
  `.trim();
  
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9fafb; padding: 20px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1f2937; }
    .value { margin-top: 5px; }
    .message { background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${formData.name}</div>
      </div>
      <div class="field">
        <div class="label">Organization:</div>
        <div class="value">${formData.organization || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Position:</div>
        <div class="value">${formData.position || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${formData.phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="message">${formData.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })} (Bangkok Time)
    </div>
  </div>
</body>
</html>
  `.trim();
  
  // Send email
  await transporter.sendMail({
    from: `"Inner Academy" <${config.smtpUser}>`,
    to: config.recipientEmail,
    replyTo: formData.email,
    subject: `Contact Form: ${formData.name}`,
    text: textBody,
    html: htmlBody
  });
}

/**
 * POST /api/contact - Handle contact form submission
 */
export default defineEventHandler(async (event): Promise<ContactAPISuccessResponse | ContactAPIErrorResponse> => {
  const config = useRuntimeConfig(event);
  
  try {
    // Parse and validate request body
    const body = await readBody(event);
    const formData = validateFormData(body);
    
    // Verify Turnstile token
    const isValidToken = await verifyTurnstile(
      formData.turnstileToken, 
      config.turnstileSecretKey
    );
    
    if (!isValidToken) {
      throw createError({ 
        statusCode: 403, 
        statusMessage: 'Bot verification failed. Please try again.' 
      });
    }
    
    // Send email
    await sendContactEmail(formData, config);
    
    // Return success response
    return {
      success: true,
      message: "Thank you for contacting us. We'll get back to you soon."
    };
    
  } catch (error: any) {
    // Handle errors
    console.error('Contact form error:', error);
    
    // If it's already a formatted error, throw it
    if (error.statusCode) {
      throw error;
    }
    
    // Otherwise, return generic 500 error
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Unable to send message. Please try again or contact us at contact@inneracademy.com' 
    });
  }
});
