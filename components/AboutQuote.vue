<script setup lang="ts">
import type { QuoteData } from '~/types/about'

interface Props {
  quote: QuoteData
}

defineProps<Props>()
</script>

<template>
  <section class="quote-section bg-gray-50 py-12 md:py-16">
    <div class="container mx-auto px-4 max-w-4xl text-center">
      <blockquote class="text-2xl md:text-3xl font-medium text-gray-900 mb-4 leading-relaxed">
        "{{ quote.text }}"
      </blockquote>
      <cite class="text-lg md:text-xl text-gray-600 not-italic font-semibold">
        — {{ quote.author }}
      </cite>
    </div>
  </section>
</template>
