<template>
  <section 
    v-if="program" 
    class="next-program-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="Upcoming program"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Promotional Card -->
        <div class="bg-gradient-to-br from-bgPrimary to-bgSecondary rounded-2xl p-8 md:p-12 shadow-2xl border border-brandGold/20">
          <!-- "Coming Soon" Badge -->
          <div class="inline-block mb-6">
            <span class="px-4 py-2 bg-brandGold/10 text-brandGold rounded-full text-sm font-semibold border border-brandGold/30">
              🎯 ลงทะเบียนเปิดแล้ว (Registration Open)
            </span>
          </div>

          <!-- Program Title -->
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            {{ program.title }}
          </h2>

          <!-- Program Date -->
          <p class="text-xl md:text-2xl text-brandGold font-semibold mb-6">
            {{ program.date }}
          </p>

          <!-- Program Description -->
          <p class="text-lg text-textSecondary leading-relaxed mb-8 max-w-2xl">
            {{ program.description }}
          </p>

          <!-- Optional Gold Pill CTA -->
          <NuxtLink
            v-if="program.ctaText && program.ctaUrl"
            :to="program.ctaUrl"
            class="inline-block px-8 py-4 bg-brandGold hover:bg-brandGoldHover text-bgPrimary font-semibold text-lg rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {{ program.ctaText }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NextProgram } from '~/types/home'

/**
 * NextProgramPromo Component
 * Feature: 002-home-page - User Story 2
 * 
 * Promotional banner for upcoming program
 * Theme: Dark surface background, gradient card, gold accents
 * 
 * @requirements
 * - FR-013: Dark surface background (bg-surface)
 * - FR-014: Program card with title, date, description
 * - FR-015: Optional gold pill CTA button (rounded-full)
 */

defineProps<{
  program: NextProgram
}>()
</script>

<style scoped>
/* Custom gradient for promotional card */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
</style>
