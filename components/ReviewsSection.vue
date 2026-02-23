<template>
  <section v-if="reviews.length > 0" class="reviews-section py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from real students who transformed their lives through our programs
        </p>
      </div>
      
      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ReviewEmbed
          v-for="review in reviews"
          :key="review.youtubeId"
          :review="review"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Review } from '~/types/home'

/**
 * ReviewsSection Component
 * 
 * Displays student video testimonials in a responsive grid.
 * 
 * @remarks
 * - Maximum 10 reviews recommended for performance
 * - Section hidden when reviews array is empty (v-if check)
 * - YouTube embeds use youtube-nocookie.com for GDPR compliance
 * 
 * @see Feature 002 Clarification: Data Volume Limits, Empty Array Handling
 */

// Component props
defineProps<{
  reviews: Review[]
}>()
</script>
