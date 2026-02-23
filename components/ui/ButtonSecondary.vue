<script setup lang="ts">
import type { ButtonSecondaryProps } from '~/types/design-system'

const props = withDefaults(defineProps<ButtonSecondaryProps>(), {
  size: 'md',
  disabled: false,
  variant: 'outline',
})
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      // Base styles
      'font-semibold rounded-full',
      'transition-all duration-300',
      
      // Focus styles
      'focus:outline-none focus:ring-4 focus:ring-brandGold',
      'focus:ring-offset-2 focus:ring-offset-bgPrimary',
      
      // Disabled styles
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Variant styles
      {
        // Outline variant
        'border-2 border-brandGold text-brandGold hover:bg-brandGold hover:text-white': variant === 'outline',
        
        // Ghost variant
        'bg-transparent text-textPrimary hover:bg-surface': variant === 'ghost',
      },
      
      // Size variants
      {
        'text-sm px-4 py-2': size === 'sm',
        'text-base px-6 py-3': size === 'md',
        'text-lg px-8 py-4': size === 'lg',
      }
    ]"
  >
    <slot />
  </button>
</template>
