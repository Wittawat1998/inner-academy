<template>
  <footer class="bg-black text-white py-6">
    <div class="max-w-[1920px] mx-auto px-4">
      <div class="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <!-- Center: Social Icons (top on mobile) -->
        <div class="order-1 md:order-2">
          <SocialIconsList :links="navigationData.socialLinks.map(s => ({ icon: s.icon, url: s.url }))" />
        </div>

        <!-- Left: Copyright -->
        <div class="text-sm text-gray-400 order-2 md:order-1 text-center md:text-left">
          <p>{{ navigationData.copyright }}</p>
        </div>

        <!-- Right: Policy Links -->
        <div class="flex items-center gap-4 md:gap-6 text-sm order-3 flex-wrap justify-center">
          <NuxtLink 
            to="/privacy" 
            class="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            Privacy Policies
          </NuxtLink>
          <NuxtLink 
            to="/terms" 
            class="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            Terms and Conditions
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationData } from '~/types/navigation'
import navigationDataRaw from '~/data/navigation.json'

// Cast JSON import to typed structure
const navigationData = navigationDataRaw as NavigationData

// Helper function to detect internal vs external links
const isInternalLink = (href: string): boolean => {
  return href.startsWith('/')
}
</script>

<style scoped>
/* Screen reader only class for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
