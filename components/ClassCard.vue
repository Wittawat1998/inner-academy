<template>
  <NuxtLink
    :to="`/courses/${classItem.slug}`"
    class="class-card block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
  >
    <!-- Class Image -->
    <div class="relative aspect-video overflow-hidden bg-gray-200">
      <img
        :src="classItem.image"
        :alt="`${classItem.title} Course`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        @error="handleImageError"
      />
    </div>
    
    <!-- Class Content -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="text-xl font-semibold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {{ classItem.title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 line-clamp-3 min-h-[4.5rem] mb-4">
        {{ classItem.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { FeaturedClass } from '~/types/home'

// Component props
const props = defineProps<{
  classItem: FeaturedClass
}>()

// Handle image load errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/classes/placeholder.webp'
}
</script>

