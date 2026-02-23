<script setup lang="ts">
import type { SectionWrapperProps } from '~/types/design-system'

const props = withDefaults(defineProps<SectionWrapperProps>(), {
  spacing: 'md',
  background: 'primary',
})
</script>

<template>
  <section
    :id="id"
    :class="[
      // Background variants
      {
        'bg-bgPrimary': background === 'primary',
        'bg-bgSecondary': background === 'secondary',
        'bg-gradient-to-b from-bgPrimary to-bgSecondary': background === 'gradient',
      },
      
      // Spacing variants
      {
        'py-8 md:py-10': spacing === 'sm',
        'py-8 md:py-12 lg:py-16': spacing === 'md',
        'py-12 md:py-16 lg:py-24': spacing === 'lg',
      }
    ]"
  >
    <slot />
  </section>
</template>
