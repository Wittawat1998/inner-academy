<script setup lang="ts">
/**
 * Contact Form Component
 * Feature: 007-contact
 * 
 * Main contact form with fields, validation, and Turnstile verification
 */

const { 
  formData, 
  formState, 
  errors, 
  isFormValid, 
  handleBlur, 
  submitForm, 
  clearMessages 
} = useContactForm();

const turnstileWidget = ref<any>(null);

// Auto-hide success message after 5 seconds
let successTimeout: NodeJS.Timeout | null = null;
watch(() => formState.success, (isSuccess) => {
  if (isSuccess) {
    // Clear any existing timeout
    if (successTimeout) {
      clearTimeout(successTimeout);
    }
    // Set new timeout to hide success message after 5 seconds
    successTimeout = setTimeout(() => {
      formState.success = false;
    }, 5000);
  }
});

// Clean up timeout on component unmount
onUnmounted(() => {
  if (successTimeout) {
    clearTimeout(successTimeout);
  }
});

// Handle Turnstile verification
function handleTurnstileVerified(token: string) {
  formData.turnstileToken = token;
  errors.turnstile = '';
}

function handleTurnstileError() {
  formData.turnstileToken = '';
  errors.turnstile = 'Verification failed. Please try again.';
}

// Submit handler
async function handleSubmit() {
  await submitForm();
  
  // Reset Turnstile widget after submission
  if (formState.success && turnstileWidget.value) {
    turnstileWidget.value.reset();
  }
}

// Clear messages when user starts typing again
function handleInput() {
  if (formState.error || formState.success) {
    clearMessages();
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <!-- Success Message -->
    <div 
      v-if="formState.success" 
      class="success-message bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
      role="alert"
    >
      <p class="font-medium">Thank you for contacting us!</p>
      <p class="text-sm">We'll get back to you as soon as possible.</p>
    </div>
    
    <!-- Error Message -->
    <div 
      v-if="formState.error" 
      class="error-message bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6"
      role="alert"
    >
      <p class="font-medium">{{ formState.error }}</p>
    </div>
    
    <!-- Name Field -->
    <div class="form-group mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        required
        maxlength="100"
        class="form-input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        :class="{ 'border-red-500': formState.touched.name && errors.name }"
        placeholder="Your full name"
        @blur="handleBlur('name')"
        @input="handleInput"
      />
      <p v-if="formState.touched.name && errors.name" class="error-text text-red-600 text-sm mt-1">
        {{ errors.name }}
      </p>
    </div>
    
    <!-- Email Field -->
    <div class="form-group mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Email <span class="text-red-500">*</span>
      </label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        required
        maxlength="254"
        class="form-input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        :class="{ 'border-red-500': formState.touched.email && errors.email }"
        placeholder="your.email@example.com"
        @blur="handleBlur('email')"
        @input="handleInput"
      />
      <p v-if="formState.touched.email && errors.email" class="error-text text-red-600 text-sm mt-1">
        {{ errors.email }}
      </p>
    </div>
    
    <!-- Phone Field (Optional) -->
    <div class="form-group mb-4">
      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
        Phone <span class="text-gray-500 text-xs">(optional)</span>
      </label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        maxlength="20"
        class="form-input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        :class="{ 'border-red-500': formState.touched.phone && errors.phone }"
        placeholder="+66 81 234 5678"
        @blur="handleBlur('phone')"
        @input="handleInput"
      />
      <p v-if="formState.touched.phone && errors.phone" class="error-text text-red-600 text-sm mt-1">
        {{ errors.phone }}
      </p>
    </div>
    
    <!-- Message Field -->
    <div class="form-group mb-4">
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Message <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="6"
        maxlength="2000"
        class="form-input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
        :class="{ 'border-red-500': formState.touched.message && errors.message }"
        placeholder="How can we help you? Tell us about your inquiry..."
        @blur="handleBlur('message')"
        @input="handleInput"
      ></textarea>
      <div class="flex justify-between items-center mt-1">
        <p v-if="formState.touched.message && errors.message" class="error-text text-red-600 text-sm">
          {{ errors.message }}
        </p>
        <p class="text-gray-500 text-xs ml-auto">
          {{ formData.message.length }} / 2000
        </p>
      </div>
    </div>
    
    <!-- Turnstile Widget -->
    <div class="form-group mb-6">
      <TurnstileWidget 
        ref="turnstileWidget"
        @verified="handleTurnstileVerified"
        @error="handleTurnstileError"
      />
      <p v-if="errors.turnstile" class="error-text text-red-600 text-sm mt-2 text-center">
        {{ errors.turnstile }}
      </p>
    </div>
    
    <!-- Submit Button -->
    <div class="form-actions">
      <button
        type="submit"
        :disabled="formState.loading || !isFormValid"
        class="submit-button w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="formState.loading" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>
    </div>

    <!-- Privacy Notice -->
    <p class="privacy-notice text-xs text-gray-500 text-center mt-4">
      By submitting this form, you agree to our 
      <NuxtLink to="/privacy" class="text-blue-600 hover:text-blue-700 underline">Privacy Policy</NuxtLink>. 
      We will use your contact information to respond to your inquiry.
    </p>
  </form>
</template>

<style scoped>
.form-input:focus {
  outline: none;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

textarea.form-input {
  min-height: 120px;
}
</style>
