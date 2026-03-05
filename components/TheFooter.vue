<template>
  <footer class="bg-black text-white py-6">
    <div class="max-w-[1920px] mx-auto px-4">
      <div class="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <!-- Center: Social Icons (top on mobile) -->
        <div class="order-1 md:order-2">
          <SocialIconsList :links="homeData.company.socialMedia.map(s => ({ icon: s.channel, url: s.link }))" />
        </div>

        <!-- Left: Copyright -->
        <div class="text-sm text-gray-400 order-2 md:order-1 text-center md:text-left">
          <p>{{ homeData.copyright }}</p>
        </div>

        <!-- Right: Policy Links -->
        <div class="flex items-center gap-4 md:gap-6 text-sm order-3 flex-wrap justify-center">
          <NuxtLink 
            :to="homeData.privacyPolicies.link" 
            class="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            {{ homeData.privacyPolicies.title }}
          </NuxtLink>
          <NuxtLink 
            :to="homeData.termsAndConditions.link" 
            class="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            {{ homeData.termsAndConditions.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { homeData } = useHomeContent()
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
