<template>
  <div class="class-metadata grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-gray-50 rounded-lg">
    <div class="metadata-item text-center">
      <div class="text-4xl mb-2">⏱️</div>
      <h3 class="font-semibold text-gray-600 mb-1">Duration</h3>
      <p class="text-lg font-medium">{{ duration }}</p>
    </div>
    
    <div class="metadata-item text-center">
      <div class="text-4xl mb-2">📊</div>
      <h3 class="font-semibold text-gray-600 mb-1">Level</h3>
      <p class="text-lg font-medium">{{ level }}</p>
    </div>
    
    <div class="metadata-item text-center">
      <div class="text-4xl mb-2">👤</div>
      <h3 class="font-semibold text-gray-600 mb-1">Instructor</h3>
      <p class="text-lg font-medium">{{ instructor }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClassMetadataProps } from '~/types/classes'

defineProps<ClassMetadataProps>()
</script>
