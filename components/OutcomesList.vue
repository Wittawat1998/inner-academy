<template>
  <section class="outcomes-section mb-12">
    <h2 class="text-3xl font-bold mb-6">Learning Outcomes</h2>
    <ul class="outcomes-list grid grid-cols-1 md:grid-cols-2 gap-4">
      <li 
        v-for="(outcome, index) in outcomes" 
        :key="index"
        class="outcome-item p-4 bg-blue-50 rounded-lg flex items-start"
      >
        <span class="text-2xl mr-3">🎯</span>
        <span class="text-base">{{ outcome }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { OutcomesListProps } from '~/types/classes'

defineProps<OutcomesListProps>()
</script>
