<script setup lang="ts">
import type { CardProps } from '~/types/design-system'

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false,
})
</script>

<template>
  <div
    :class="[
      // Base styles
      'rounded-xl border',
      'transition-all duration-300',
      
      // Variant styles
      {
        'bg-surface border-borderSubtle': variant === 'default',
        'bg-surfaceAlt border-brandGold': variant === 'highlight',
      },
      
      // Padding variants
      {
        'p-4': padding === 'sm',
        'p-6': padding === 'md',
        'p-8': padding === 'lg',
      },
      
      // Hoverable styles
      {
        'hover:shadow-lg hover:-translate-y-1 cursor-pointer': hoverable,
      }
    ]"
  >
    <slot />
  </div>
</template>
