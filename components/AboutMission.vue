<script setup lang="ts">
import type { MissionData } from '~/types/about'

interface Props {
  mission: MissionData
}

defineProps<Props>()
</script>

<template>
  <section class="mission-section bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {{ mission.title }}
      </h2>
      <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
        {{ mission.description }}
      </p>
    </div>
  </section>
</template>
