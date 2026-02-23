<script setup lang="ts">
import type { FormInputProps } from '~/types/design-system'

const props = withDefaults(defineProps<FormInputProps>(), {
  type: 'text',
  error: false,
  disabled: false,
})

const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="[
      // Base styles
      'w-full px-4 py-3',
      'bg-surface text-textPrimary',
      'border-2 rounded-lg',
      'transition-all duration-300',
      
      // Border states
      {
        'border-borderSubtle': !error,
        'border-red-500': error,
      },
      
      // Focus styles
      'focus:outline-none',
      {
        'focus:border-brandGold focus:ring-4 focus:ring-brandGold focus:ring-opacity-20': !error,
        'focus:border-red-500 focus:ring-4 focus:ring-red-500 focus:ring-opacity-20': error,
      },
      
      // Disabled styles
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Placeholder
      'placeholder:text-textSecondary',
    ]"
  />
</template>
