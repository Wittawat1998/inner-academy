<script setup lang="ts">
import type { BadgeProps } from '~/types/design-system'

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'gold',
  size: 'md',
})
</script>

<template>
  <span
    :class="[
      // Base styles
      'inline-flex items-center justify-center',
      'font-semibold rounded-full',
      
      // Variant styles
      {
        'bg-brandGold text-white': variant === 'gold',
        'bg-surface border border-borderSubtle text-textPrimary': variant === 'subtle',
      },
      
      // Size variants
      {
        'text-xs px-2 py-1': size === 'sm',
        'text-sm px-3 py-1': size === 'md',
      }
    ]"
  >
    <slot />
  </span>
</template>
