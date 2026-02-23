<script setup lang="ts">
import { ref } from 'vue'
import type { FounderData } from '~/types/about'

interface Props {
  founder: FounderData
}

const props = defineProps<Props>()

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<template>
  <section class="founder-section py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Meet Our Founder</h2>
      
      <!-- Responsive layout: stacked on mobile, side-by-side on desktop -->
      <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <!-- Founder photo (40% on desktop, 100% on mobile) -->
        <div class="w-full md:w-2/5">
          <img 
            v-if="!imageError"
            :src="founder.photo" 
            :alt="`${founder.name}, Founder of Inner Power Academy`"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
            loading="eager"
            @error="handleImageError"
          />
          <div v-else class="rounded-lg shadow-lg w-full aspect-square bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">Image not available</span>
          </div>
        </div>
        
        <!-- Founder text (60% on desktop, 100% on mobile) -->
        <div class="w-full md:w-3/5">
          <h3 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{{ founder.name }}</h3>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 mb-6 leading-relaxed">{{ founder.background }}</p>
            <blockquote class="border-l-4 border-blue-600 pl-6 py-2 italic text-gray-800">
              "{{ founder.vision }}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
