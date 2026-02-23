<template>
  <section v-if="classes.length > 0" class="featured-classes-section py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Courses
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our most popular transformative programs designed to unlock your potential
        </p>
      </div>
      
      <!-- Classes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ClassCard
          v-for="classItem in displayedClasses"
          :key="classItem.slug"
          :class-item="classItem"
        />
      </div>
      
      <!-- View All Link -->
      <div class="text-center">
        <NuxtLink
          to="/courses"
          class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
        >
          View All Courses
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FeaturedClass } from '~/types/home'

/**
 * FeaturedClasses Component
 * 
 * Displays featured course previews in a responsive grid.
 * 
 * @remarks
 * - Maximum 6 classes displayed on homepage (enforced with slice)
 * - Section hidden when classes array is empty (v-if check)
 * - Each card links to /courses#slug for direct navigation
 * 
 * @see Feature 002 Clarification: Data Volume Limits, Navigation Pattern
 */

// Component props
const props = defineProps<{
  classes: FeaturedClass[]
}>()

// Limit to first 6 classes for homepage
const displayedClasses = computed(() => props.classes.slice(0, 6))
</script>
