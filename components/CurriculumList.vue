<template>
  <section class="curriculum-section mb-12">
    <h2 class="text-3xl font-bold mb-6">What You'll Learn</h2>
    <ul class="curriculum-list space-y-3">
      <li 
        v-for="(item, index) in curriculum" 
        :key="index"
        class="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 mt-1">
          ✓
        </span>
        <span class="text-lg">{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { CurriculumListProps } from '~/types/classes'

defineProps<CurriculumListProps>()
</script>
