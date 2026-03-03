<template>
  <section 
    id="assessments"
    v-if="cta"
    class="dual-cta-section relative overflow-hidden flex items-center justify-center py-16 md:py-20 lg:py-28"
    style="min-height: min(56.25vw, 1080px); background-image: url('/images/bg/home-assessment-bg.webp'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;"
    role="region"
    aria-label="Call to action"
  >
    <!-- Background image -->
    <div
      v-if="cta.backgroundImage"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <!-- :style="{ backgroundImage: `url('${cta.backgroundImage}')` }" -->

    <!-- Dark blue overlay -->
    <div class="absolute inset-0 bg-transparent" />

    <!-- Content -->
    <div class="relative z-10 max-w-[1280px] mx-auto px-4">
      <div class="max-w-[1280px] mx-auto text-center">
        <!-- Heading -->
        <h2 class="text-3xl  text-[clamp(6rem,6vw,70px)] font-semibold text-textPrimary mb-5 leading-tight">
          <!-- md:text-5xl lg:text-[120px] -->
          {{ cta.heading }}
        </h2>

        <!-- Description -->
        <p class="text-lg md:text-3xl text-textSecondary leading-relaxed">
          {{ cta.description }}
        </p>
        <p v-if="cta.descriptionLine2" class="text-lg md:text-3xl text-textSecondary mb-10">
          {{ cta.descriptionLine2 }}
        </p>
        <div v-else class="mb-10" />

        <!-- Two Gold Pill Buttons – stacked vertically, centered -->
        <div class="flex flex-col items-center gap-4">
          <!-- Primary Button -->
          <a
            :href="cta.primaryButtonUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-6 text-black font-semibold text-5xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full  text-center bg-fade"
          >
            {{ cta.primaryButtonText }}
          </a>

          <!-- Secondary Button -->
          <a
            :href="cta.secondaryButtonUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-6 text-black font-semibold text-5xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full  text-center bg-fade"
          >
            {{ cta.secondaryButtonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DualCTA } from '~/types/home'

/**
 * DualCTA Component
 * Feature: 002-home-page - Additional Sections
 * 
 * Dual call-to-action section with two gold pill buttons
 * Theme: Dark background, centered layout, gold buttons
 * 
 * @requirements
 * - FR-031: Two gold pill buttons on dark background
 * - FR-032: Heading and description with text-textPrimary
 * - FR-033: Both buttons use bg-brandGold rounded-full
 */

const { data: cta } = await useFetch<DualCTA>('/api/dualcta')
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
