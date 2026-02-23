<template>
  <div class="review-embed">
    <!-- YouTube Embed Container -->
    <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${review.youtubeId}`"
        :title="`${review.studentName} - Student Testimonial`"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
    
    <!-- Student Name -->
    <p class="text-center mt-4 font-medium text-gray-700">
      {{ review.studentName }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '~/types/home'

// Component props
defineProps<{
  review: Review
}>()
</script>
