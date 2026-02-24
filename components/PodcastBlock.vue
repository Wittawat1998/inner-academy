<template>
  <section
    id="knowledge"
    v-if="podcast"
    class="relative overflow-hidden py-24 md:py-36"
    role="region"
    aria-label="Podcast highlight"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto relative">
        <!-- Overlay gradient background -->
        <div class="absolute inset-0">
          <img
            v-if="podcast.image"
            :src="podcast.image"
            alt="Podcast background"
            class="w-full h-full object-cover"
            style="object-position: center;"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-[#f7c66d]/30" />
        </div>
        <!-- Content: Bottom Left in container -->
        <div class="relative z-10 flex flex-col items-start justify-end min-h-[520px] md:min-h-[600px] px-6 md:px-16 pb-16 md:pb-24">
          <div class="mb-6">
            <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-2" style="line-height: 1.15;">
              {{ podcast.titleLine1 }}
            </h2>
            <h2 class="text-5xl md:text-6xl font-extrabold text-white mb-4" style="line-height: 1.15;">
              {{ podcast.titleLine2 }}
            </h2>
          </div>
          <p class="text-lg md:text-xl text-white mb-8" style="line-height: 1.4; max-width: 600px;">
            {{ podcast.description }}
          </p>
          <NuxtLink
            :to="podcast.episodes[0]?.url"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg bg-ctaGold text-black shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="8,6 20,12 8,18" fill="#000"/>
            </svg>
            <span class="text-lg font-bold">ชมรายการ</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Podcast } from '~/types/home'

/**
 * PodcastBlock Component
 * Feature: 002-home-page - Additional Sections
 * 
 * Podcast section with episode list (conditional rendering)
 * Theme: Dark background, episode cards with hover effects
 * 
 * @requirements
 * - FR-037: Conditional rendering (v-if podcast data exists)
 * - FR-038: Podcast title, description, and episode list
 * - FR-039: Dark background (bg-bgPrimary)
 */

defineProps<{
  podcast: Podcast
}>()
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
