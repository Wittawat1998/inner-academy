<template>
  <section
    id="coaches"
    v-if="coaches && coaches.length > 0"
    class="coaches-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="ทีมโค้ช"
  >
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Heading – right-aligned, gold, inside same container as grid -->
      <div class="mb-8 md:mb-10 text-center" style="padding-left: 50%;">
        <h2
          class="text-5xl md:text-6xl lg:text-7xl font-bold"
          style="color: #C9A961;"
        >
          ทีมโค้ช
        </h2>
      </div>

      <!-- Coaches Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CoachCard
          v-for="coach in coaches"
          :key="coach.slug || coach.name"
          :coach="coach"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Coach } from '~/types/home'

/**
 * CoachesGrid Component
 * Feature: 006-coaches (Home Page Section 5)
 *
 * Thai-style grid: heading "ทีมโค้ช" right-aligned gold, 4-column portrait card grid
 * Per spec: anchor #coaches, links to /coaches/[slug] detail pages
 */

defineProps<{
  coaches: Coach[]
}>()
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
