<script setup lang="ts">
import type { SliderRowProps } from '~/types/design-system'

const props = withDefaults(defineProps<SliderRowProps>(), {
  gap: 'md',
  scrollBehavior: 'smooth',
})
</script>

<template>
  <div
    :class="[
      // Base styles
      'flex overflow-x-auto',
      'scrollbar-hide',
      
      // Scroll behavior
      {
        'scroll-smooth': scrollBehavior === 'smooth',
        'scroll-auto': scrollBehavior === 'auto',
      },
      
      // Gap variants
      {
        'gap-4': gap === 'sm',
        'gap-6': gap === 'md',
        'gap-8': gap === 'lg',
      }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
