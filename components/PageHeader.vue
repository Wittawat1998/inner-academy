<template>
  <header class="page-header bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ title }}
      </h1>
      <p 
        v-if="intro" 
        class="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100"
      >
        {{ intro }}
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * PageHeader Component
 * 
 * Reusable page header with title and optional introductory text.
 * Features gradient background and responsive typography.
 * 
 * @component
 * @example
 * <PageHeader 
 *   title="Our Classes"
 *   intro="Explore our complete catalog of courses"
 * />
 */

defineProps<{
  /** Page title (required) - displayed as h1 */
  title: string
  /** Optional introductory text */
  intro?: string
}>()
</script>

<style scoped>
/* Component-specific styles if needed */
</style>
