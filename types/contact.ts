/**
 * Type definitions for Contact Page feature
 * Feature: 007-contact
 */

/**
 * Form submission data sent from client to server API route
 */
export interface ContactFormData {
  name: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  message: string;
  turnstileToken: string;
}

/**
 * Static contact information displayed on contact page
 */
export interface ContactInfo {
  heading: string;
  description: string;
  phone: string;
  email: string;
  address: ContactAddress;
  mapImage?: string;
  mapEmbedUrl?: string;
  socialLinks?: SocialLink[];
}

/**
 * Physical address for contact information
 */
export interface ContactAddress {
  company: string;
  building: string;
  floor: string;
  street: string;
  district: string;
}

/**
 * Social media platform link
 */
export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'line' | 'youtube' | 'twitter';
  url: string;
  icon?: string; // Optional: custom icon URL
}

/**
 * Email payload sent via Nodemailer
 */
export interface EmailPayload {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * Cloudflare Turnstile verification request
 */
export interface TurnstileVerifyRequest {
  secret: string;
  response: string;      // Token from client
  remoteip?: string;     // Optional: visitor IP
}

/**
 * Cloudflare Turnstile verification response
 */
export interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

/**
 * Reactive state for managing form UI
 */
export interface FormState {
  loading: boolean;
  success: boolean;
  error: string;
  touched: {
    name: boolean;
    organization: boolean;
    position: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
  };
}

/**
 * Validation errors for form fields
 */
export interface FormErrors {
  name: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  message: string;
  turnstile: string;
}

/**
 * SMTP server configuration (server-side only)
 */
export interface SMTPConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

/**
 * API response for successful submission
 */
export interface ContactAPISuccessResponse {
  success: true;
  message?: string;
}

/**
 * API response for errors
 */
export interface ContactAPIErrorResponse {
  success: false;
  error: string;
  statusCode: number;
}
