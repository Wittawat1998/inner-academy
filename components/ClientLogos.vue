<template>
  <section v-if="clients.length > 0" class="client-logos-section bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-gray-600 text-sm font-semibold uppercase tracking-wider mb-8">
        Trusted by Leading Organizations
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div
          v-for="client in clients"
          :key="client.nameEN"
          class="client-logo flex items-center justify-center"
        >
          <img
            :src="client.logo"
            :alt="client.alt"
            :title="client.nameEN"
            class="max-w-full h-auto max-h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            loading="lazy"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TrustedLogo } from '~/types/home'

/**
 * ClientLogos Component
 * 
 * Displays partner/client logos in a responsive grid.
 * 
 * @remarks
 * - Maximum 20 clients recommended for performance
 * - Section hidden when clients array is empty (v-if check)
 * - Logos display in grayscale, color on hover
 * - Graceful error handling with invisible fallback
 * 
 * @see Feature 002 Clarification: Data Volume Limits
 */

// Component props
defineProps<{
  clients: TrustedLogo[]
}>()

// Handle image load errors - hide broken images gracefully
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Hide broken image by making it transparent
  img.style.opacity = '0'
  img.style.visibility = 'hidden'
}</script>

<style scoped>
.client-logo img {
  filter: grayscale(100%);
}

.client-logo:hover img {
  filter: grayscale(0%);
}
</style>
