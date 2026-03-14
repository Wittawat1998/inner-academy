<template>
  <section 
    id="assessments"
    v-if="sections?.assessments"
    class="dual-cta-section relative overflow-hidden flex items-center justify-center py-16 md:py-20 lg:py-28"
    :style="`min-height: min(56.25vw, 1080px); background-image: url('${sections?.assessments?.bg ?? '/images/bg/home-assessment-bg.webp'}'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;`"
    role="region"
    aria-label="Call to action"
  >
    <!-- Background image -->
    <div class="absolute inset-0 bg-transparent" />

    <!-- Content -->
    <div class="relative z-10 max-w-[1280px] mx-auto px-4">
      <div class="max-w-[1280px] mx-auto text-center">
        <!-- Heading -->
        <h2 class="text-[clamp(1.8rem,7vw,70px)] font-semibold text-textPrimary mb-5 leading-tight">
          {{ sections.assessments.title }}
        </h2>

        <!-- Description -->
        <p class="text-lg md:text-3xl text-textSecondary leading-relaxed whitespace-pre-line mb-10">
          {{ sections.assessments.subtitle }}
        </p>

        <!-- Two Gold Pill Buttons – stacked vertically, centered -->
        <div class="flex flex-col items-center gap-4">
          <!-- Primary Button -->
          <a
            :href="sections.assessments.items?.[0]?.link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-4 md:px-10 md:py-6 text-black font-semibold text-xl md:text-3xl lg:text-5xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full text-center bg-fade"
          >
            {{ sections.assessments.items?.[0]?.submit }}
          </a>

          <!-- Secondary Button -->
          <a
            :href="sections.assessments.items?.[1]?.link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-4 md:px-10 md:py-6 text-black font-semibold text-xl md:text-3xl lg:text-5xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl w-full text-center bg-fade"
          >
            {{ sections.assessments.items?.[1]?.submit }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

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

const { sections } = useHomeContent()
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
