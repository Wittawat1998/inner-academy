<template>
  <section 
    id="assessments"
    v-if="cta"
    class="dual-cta-section relative overflow-hidden py-16 md:py-20 lg:py-28"
    style="background-image: url('/images/bg/home-assessment-bg.webp'); background-size: cover; background-position: center;"
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
    <div class="relative z-10 container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Heading -->
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-textPrimary mb-5 leading-tight">
          {{ cta.heading }}
        </h2>

        <!-- Description -->
        <p class="text-lg text-textSecondary leading-relaxed">
          {{ cta.description }}
        </p>
        <p v-if="cta.descriptionLine2" class="text-lg text-textSecondary mb-10">
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
            class="px-10 py-4 text-black font-semibold text-xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full max-w-md text-center bg-fade"
          >
            {{ cta.primaryButtonText }}
          </a>

          <!-- Secondary Button -->
          <a
            :href="cta.secondaryButtonUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-10 py-4 text-black font-semibold text-xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full max-w-md text-center bg-fade"
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
