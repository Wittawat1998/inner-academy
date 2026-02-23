<template>
  <section 
    v-if="ebook" 
    class="ebook-offer-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="Free e-book offer"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Split Layout: Image left, Text right on desktop -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <!-- E-book Cover Image (Left on desktop, top on mobile) -->
          <div class="flex-shrink-0 w-full md:w-auto">
            <img
              :src="ebook.image"
              :alt="ebook.title"
              class="w-full md:w-64 lg:w-80 h-auto rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          <!-- E-book Content (Right on desktop) -->
          <div class="flex-1 text-center md:text-left">
            <!-- Badge -->
            <div class="inline-block mb-4">
              <span class="px-4 py-2 bg-brandGold/10 text-brandGold rounded-full text-sm font-semibold border border-brandGold/30">
                📚 FREE DOWNLOAD
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              {{ ebook.title }}
            </h2>

            <!-- Description -->
            <p class="text-lg text-textSecondary leading-relaxed mb-8">
              {{ ebook.description }}
            </p>

            <!-- Gold Pill CTA -->
            <NuxtLink
              :to="ebook.ctaUrl"
              class="inline-block px-8 py-4 bg-brandGold hover:bg-brandGoldHover text-bgPrimary font-semibold text-lg rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {{ ebook.ctaText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ebook } from '~/types/home'

/**
 * EbookOffer Component
 * Feature: 002-home-page - Additional Sections
 * 
 * E-book promotional offer with split layout
 * Theme: Dark surface background, image left, text right
 * 
 * @requirements
 * - FR-034: Split layout (image left, text right on desktop)
 * - FR-035: E-book cover image with responsive sizing (w-full md:w-48 h-auto)
 * - FR-036: E-book title, description, and gold pill CTA
 */

defineProps<{
  ebook: Ebook
}>()
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
