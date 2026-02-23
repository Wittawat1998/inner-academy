<template>
  <section class="assessment-cta py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div class="container mx-auto px-4 text-center">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
        {{ cta.heading }}
      </h2>
      
      <!-- Description -->
      <p class="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
        {{ cta.description }}
      </p>
      
      <!-- CTA Button -->
      <NuxtLink
        :to="cta.buttonUrl"
        class="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        {{ cta.buttonText }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AssessmentCTA } from '~/types/home'

// Component props
defineProps<{
  cta: AssessmentCTA
}>()
</script>
