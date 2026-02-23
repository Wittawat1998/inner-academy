<script setup lang="ts">
/**
 * Contact Information Component
 * Feature: 007-contact
 * 
 * Displays phone, email, and physical address with clickable links
 */

import contactData from '~/data/contact.json';
import type { ContactInfo } from '~/types/contact';

const contactInfo = contactData as ContactInfo;
</script>

<template>
  <div class="contact-info bg-white rounded-lg shadow-md p-6">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
    
    <div class="space-y-4">
      <!-- Phone -->
      <div class="contact-item flex items-start">
        <div class="icon-wrapper flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 mb-1">Phone</p>
          <a 
            :href="`tel:${contactInfo.phone.replace(/\s+/g, '')}`"
            class="text-gray-900 hover:text-blue-600 transition-colors font-medium"
          >
            {{ contactInfo.phone }}
          </a>
        </div>
      </div>
      
      <!-- Email -->
      <div class="contact-item flex items-start">
        <div class="icon-wrapper flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 mb-1">Email</p>
          <a 
            :href="`mailto:${contactInfo.email}`"
            class="text-gray-900 hover:text-blue-600 transition-colors font-medium break-all"
          >
            {{ contactInfo.email }}
          </a>
        </div>
      </div>
      
      <!-- Address -->
      <div class="contact-item flex items-start">
        <div class="icon-wrapper flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500 mb-1">Address</p>
          <address class="text-gray-900 not-italic">
            {{ contactInfo.address.company }}<br>
            {{ contactInfo.address.building }}<br>
            {{ contactInfo.address.floor }}<br>
            {{ contactInfo.address.street }}<br>
            {{ contactInfo.address.district }}
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-item {
  transition: transform 0.2s;
}

.contact-item:hover {
  transform: translateX(4px);
}
</style>
