<template>
  <nav aria-label="Breadcrumb" class="breadcrumb mb-6">
    <ol class="flex items-center space-x-2 text-sm text-textSecondary">
      <li>
        <NuxtLink 
          to="/" 
          class="hover:text-brandGold transition-colors duration-200"
          aria-label="Home">
          Home
        </NuxtLink>
      </li>
      <li aria-hidden="true" class="select-none">/</li>
      <li>
        <NuxtLink 
          to="/#coaches" 
          class="hover:text-brandGold transition-colors duration-200"
          aria-label="Coaches">
          Coaches
        </NuxtLink>
      </li>
      <li aria-hidden="true" class="select-none">/</li>
      <li class="text-textPrimary font-medium" aria-current="page">
        {{ coachName }}
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
/**
 * Breadcrumb navigation component for coach detail pages
 * Displays: Home > Coaches > [Coach Name]
 */

interface Props {
  coachName: string  // Current coach's name for final breadcrumb item
}

const props = defineProps<Props>()
</script>
