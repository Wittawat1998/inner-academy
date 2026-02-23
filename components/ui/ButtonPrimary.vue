<script setup lang="ts">
import type { ButtonPrimaryProps } from '~/types/design-system'

const props = withDefaults(defineProps<ButtonPrimaryProps>(), {
  size: 'md',
  disabled: false,
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      // Base styles
      'bg-brandGold hover:bg-brandGoldHover',
      'text-white font-semibold',
      'rounded-full',
      'transition-colors duration-300',
      
      // Focus styles
      'focus:outline-none focus:ring-4 focus:ring-brandGold',
      'focus:ring-offset-2 focus:ring-offset-bgPrimary',
      
      // Disabled styles
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
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
