/**
 * Contact Form Composable
 * Feature: 007-contact
 * 
 * Manages contact form state, validation, and submission
 */

import type { ContactFormData, FormState, FormErrors } from '~/types/contact';

export const useContactForm = () => {
  // Form data
  const formData = reactive<ContactFormData>({
    name: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    turnstileToken: ''
  });
  
  // Form state
  const formState = reactive<FormState>({
    loading: false,
    success: false,
    error: '',
    touched: {
      name: false,
      organization: false,
      position: false,
      email: false,
      phone: false,
      message: false
    }
  });
  
  // Validation errors
  const errors = reactive<FormErrors>({
    name: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    turnstile: ''
  });
  
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
   * Validate individual field
   */
  function validateField(field: keyof typeof formData): boolean {
    let isValid = true;
    
    switch (field) {
      case 'name':
        if (!formData.name || formData.name.trim().length < 2) {
          errors.name = 'กรุณากรอกชื่อ-นามสกุล (อย่างน้อย 2 ตัวอักษร)';
          isValid = false;
        } else if (formData.name.length > 100) {
          errors.name = 'ชื่อ-นามสกุลต้องไม่เกิน 100 ตัวอักษร';
          isValid = false;
        } else {
          errors.name = '';
        }
        break;
        
      case 'organization':
        if (formData.organization && formData.organization.length > 100) {
          errors.organization = 'ชื่อองค์กรต้องไม่เกิน 100 ตัวอักษร';
          isValid = false;
        } else {
          errors.organization = '';
        }
        break;
        
      case 'position':
        if (formData.position && formData.position.length > 100) {
          errors.position = 'ตำแหน่งต้องไม่เกิน 100 ตัวอักษร';
          isValid = false;
        } else {
          errors.position = '';
        }
        break;
        
      case 'email':
        if (!formData.email) {
          errors.email = 'กรุณากรอกอีเมล';
          isValid = false;
        } else if (!isValidEmail(formData.email)) {
          errors.email = 'กรุณากรอกอีเมลให้ถูกต้อง';
          isValid = false;
        } else if (formData.email.length > 254) {
          errors.email = 'อีเมลต้องไม่เกิน 254 ตัวอักษร';
          isValid = false;
        } else {
          errors.email = '';
        }
        break;
        
      case 'phone':
        if (formData.phone && !isValidPhone(formData.phone)) {
          errors.phone = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง';
          isValid = false;
        } else if (formData.phone && formData.phone.length > 20) {
          errors.phone = 'เบอร์โทรศัพท์ต้องไม่เกิน 20 ตัวอักษร';
          isValid = false;
        } else {
          errors.phone = '';
        }
        break;
        
      case 'message':
        if (!formData.message || formData.message.trim().length < 10) {
          errors.message = 'กรุณากรอกข้อความ (อย่างน้อย 10 ตัวอักษร)';
          isValid = false;
        } else if (formData.message.length > 2000) {
          errors.message = 'ข้อความต้องไม่เกิน 2000 ตัวอักษร';
          isValid = false;
        } else {
          errors.message = '';
        }
        break;
    }
    
    return isValid;
  }
  
  /**
   * Validate turnstile token
   */
  function validateTurnstile(): boolean {
    if (!formData.turnstileToken) {
      errors.turnstile = 'กรุณายืนยันตัวตน';
      return false;
    }
    errors.turnstile = '';
    return true;
  }
  
  /**
   * Check if form is valid (computed)
   */
  const isFormValid = computed(() => {
    return (
      formData.name.trim().length >= 2 &&
      formData.name.length <= 100 &&
      formData.email.length > 0 &&
      isValidEmail(formData.email) &&
      formData.email.length <= 254 &&
      isValidPhone(formData.phone) &&
      formData.message.trim().length >= 10 &&
      formData.message.length <= 2000 &&
      formData.turnstileToken.length > 0
    );
  });
  
  /**
   * Handle field blur (trigger validation)
   */
  function handleBlur(field: keyof typeof formData) {
    formState.touched[field as keyof typeof formState.touched] = true;
    validateField(field);
  }
  
  /**
   * Submit form
   */
  async function submitForm(): Promise<void> {
    // Mark all fields as touched
    formState.touched = {
      name: true,
      organization: true,
      position: true,
      email: true,
      phone: true,
      message: true
    };
    
    // Validate all fields
    const nameValid = validateField('name');
    const organizationValid = validateField('organization');
    const positionValid = validateField('position');
    const emailValid = validateField('email');
    const phoneValid = validateField('phone');
    const messageValid = validateField('message');
    const turnstileValid = validateTurnstile();
    
    if (!nameValid || !organizationValid || !positionValid || !emailValid || !phoneValid || !messageValid || !turnstileValid) {
      formState.error = 'กรุณาแก้ไขข้อมูลให้ถูกต้องก่อนส่ง';
      return;
    }
    
    // Submit to API
    formState.loading = true;
    formState.error = '';
    formState.success = false;
    
    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      
      formState.success = true;
      formState.error = '';
      
      // Reset form after successful submission
      resetForm();
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      // Display error message from API or generic error
      if (error.data?.statusMessage) {
        formState.error = error.data.statusMessage;
      } else if (error.statusMessage) {
        formState.error = error.statusMessage;
      } else {
        formState.error = 'ไม่สามารถส่งข้อความได้ กรุณาลองอีกครั้ง หรือติดต่อเราที่ info@innerpower.co.th';
      }
      
      formState.success = false;
    } finally {
      formState.loading = false;
    }
  }
  
  /**
   * Reset form to initial state
   */
  function resetForm(): void {
    formData.name = '';
    formData.organization = '';
    formData.position = '';
    formData.email = '';
    formData.phone = '';
    formData.message = '';
    formData.turnstileToken = '';
    
    formState.touched = {
      name: false,
      organization: false,
      position: false,
      email: false,
      phone: false,
      message: false
    };
    
    errors.name = '';
    errors.organization = '';
    errors.position = '';
    errors.email = '';
    errors.phone = '';
    errors.message = '';
    errors.turnstile = '';
  }
  
  /**
   * Clear success/error messages
   */
  function clearMessages(): void {
    formState.success = false;
    formState.error = '';
  }
  
  return {
    formData,
    formState,
    errors,
    isFormValid,
    validateField,
    validateTurnstile,
    handleBlur,
    submitForm,
    resetForm,
    clearMessages
  };
};
