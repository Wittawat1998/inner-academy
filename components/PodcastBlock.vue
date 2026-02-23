<template>
  <section 
    id="knowledge"
    v-if="podcast" 
    class="podcast-block-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="Podcast episodes"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Section Heading -->
        <div class="text-center mb-12">
          <div class="inline-block mb-4">
            <span class="px-4 py-2 bg-brandGold/10 text-brandGold rounded-full text-sm font-semibold border border-brandGold/30">
              🎙️ PODCAST
            </span>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            {{ podcast.title }}
          </h2>

          <p class="text-lg text-textSecondary leading-relaxed">
            {{ podcast.description }}
          </p>
        </div>

        <!-- Episode List -->
        <div class="space-y-4">
          <NuxtLink
            v-for="(episode, index) in podcast.episodes"
            :key="index"
            :to="episode.url"
            class="block bg-surface rounded-lg p-6 hover:bg-bgSecondary transition-colors duration-200 group"
          >
            <div class="flex items-center gap-4">
              <!-- Episode Number Badge -->
              <div class="flex-shrink-0 w-12 h-12 bg-brandGold/10 rounded-full flex items-center justify-center text-brandGold font-bold border border-brandGold/30">
                {{ index + 1 }}
              </div>

              <!-- Episode Title -->
              <h3 class="flex-1 text-lg font-semibold text-textPrimary group-hover:text-brandGold transition-colors duration-200">
                {{ episode.title }}
              </h3>

              <!-- Arrow Icon -->
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 text-brandGold transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
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
