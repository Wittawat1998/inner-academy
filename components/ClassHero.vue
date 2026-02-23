<template>
  <section class="class-hero relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
    <img 
      v-if="image"
      :src="image" 
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover opacity-40"
      loading="eager"
      width="1920"
      height="768"
      @error="handleImageError"
    />
    
    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="text-white max-w-3xl">
        <span 
          class="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
          :class="levelBadgeClass"
        >
          {{ level }}
        </span>
        <h1 class="text-5xl md:text-6xl font-bold">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ClassHeroProps } from '~/types/classes'

const props = defineProps<ClassHeroProps>()

const levelBadgeClass = computed(() => {
  switch (props.level) {
    case 'Beginner': return 'bg-green-500'
    case 'Intermediate': return 'bg-yellow-500'
    case 'Advanced': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
})

const handleImageError = (event: Event) => {
  (event.target as HTMLImageElement).src = '/images/class-placeholder.webp'
}
</script>
