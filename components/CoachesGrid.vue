<template>
  <section
    id="coaches"
    v-if="coaches && coaches.length > 0"
    class="coaches-section bg-transparent py-10 md:py-16 lg:py-20"
    role="region"
    :aria-label="sections?.coaches?.title ?? 'ทีมโค้ช'"
  >
    <div class="max-w-[1280px] mx-auto px-4">
      <!-- Section Heading – right-aligned, gold, inside same container as grid -->
      <div class="mb-10 text-center md:pl-[50%]">
        <h2
          class="text-4xl md:text-5xl lg:text-7xl font-semibold header-fade"
        >
          {{ sections?.coaches?.title ?? 'ทีมโค้ช' }}
        </h2>
      </div>

      <!-- Coaches Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <CoachCard
          v-for="coach in coaches"
          :key="coach.id || coach.name"
          :coach="coach"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Coach } from '~/types/coaches'



const { sections } = useHomeContent()
const { data: coaches } = await useFetch<Coach[]>('/api/home-coaches')
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
