<script setup lang="ts">
import type { GalleryImage } from '~/types/about'

interface Props {
  images: GalleryImage[]
}

defineProps<Props>()
</script>

<template>
  <section class="gallery-section py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Our Academy</h2>
      
      <!-- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img 
            :src="image.url" 
            :alt="image.alt"
            class="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
