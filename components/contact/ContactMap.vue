<script setup lang="ts">
/**
 * Contact Map Component
 * Feature: 007-contact
 * 
 * Displays map image showing academy location
 */

import contactData from '~/data/contact.json';
import type { ContactInfo } from '~/types/contact';

const contactInfo = contactData as ContactInfo;
</script>

<template>
  <div class="contact-map bg-white rounded-lg shadow-md overflow-hidden">
    <h3 class="text-2xl font-bold text-gray-900 p-6 pb-4">Our Location</h3>
    <div class="map-container">
      <img 
        :src="contactInfo.mapImage" 
        :alt="`Map showing ${contactInfo.address.building}, ${contactInfo.address.district}`"
        class="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.map-container {
  aspect-ratio: 16 / 9;
  background-color: #f3f4f6;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
