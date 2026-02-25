<template>
  <section
    id="coaches"
    v-if="coaches && coaches.length > 0"
    class="coaches-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="ทีมโค้ช"
  >
    <div class="max-w-5xl mx-auto px-4">
      <!-- Section Heading – right-aligned, gold, inside same container as grid -->
      <div class="mb-8 md:mb-10 text-center pl-[50%]">
        <h2
          class="text-7xl font-medium header-fade"
         
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



const { data: coaches } = await useFetch<Coach[]>('/api/home-coaches')
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
