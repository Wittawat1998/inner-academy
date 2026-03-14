<template>
  <div class="coach-card">
    <!-- Portrait Photo -->
    <NuxtLink :to="coach.id ? '/coaches/' + coach.id : '#coaches'">
      <div class="aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-gray-700">
        <NuxtImg
          :src="coach.avatar"
          :alt="coach.nickname || coach.name"
          class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          loading="lazy"
          format="webp"
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
          width="240"
          height="320"
        />
      </div>
    </NuxtLink>

    <!-- Coach Info -->
    <div class="pt-4 pb-2">
      <!-- Display name (nickname) -->
      <h3
        v-if="coach.name || coach.nickname"
        class="text-2xl font-medium mb-1 leading-tight header-fade"
      >
        {{ coach.name || coach.nickname }}
      </h3>

      <!-- Full name -->
      <p v-if="coach.nameTh" class="text-sm font-medium mb-1 text-goldTextDark">
        {{ coach.nameTh }}
      </p>

      <!-- Title / Career -->
      <p class="text-xs text-gray-400 italic leading-snug mb-3 line-clamp-2 h-[2.5em]">
        {{ coach.career || coach.title }}
      </p>

      <!-- Social Media Icons -->
      <SocialIconsList :links="socialLinks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Coach } from '~/types/coaches'

/**
 * CoachCard Component
 * Feature: 006-coaches (Home Page Grid)
 *
 * Portrait card: photo (3:4) → nickname (gold) → full name → italic title → social badges
 * Per spec: social links Facebook, Instagram, TikTok, LinkedIn (all optional)
 */

const props = defineProps<{
  coach: Coach
}>()

const socialLinks = computed(() => {
  if (props.coach.socialMedia?.length) {
    return props.coach.socialMedia.map(s => ({ icon: s.channel, url: s.link }))
  }
  if (props.coach.socialLinks) {
    return Object.entries(props.coach.socialLinks)
      .filter(([, url]) => !!url)
      .map(([icon, url]) => ({ icon, url: url as string }))
  }
  return []
})
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
