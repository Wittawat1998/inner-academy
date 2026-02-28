<template>
  <div class="coach-card">
    <!-- Portrait Photo -->
    <NuxtLink :to="coach.slug ? '/coaches/' + coach.slug : '#coaches'">
      <div class="aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 border border-gray-700">
        <NuxtImg
          :src="coach.image || '/images/coaches/placeholder.webp'"
          :alt="coach.nickname || coach.name"
          class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          loading="lazy"
          format="webp"
          sizes="240px"
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

      <!-- Social Media Badges (new array format) -->
      <div v-if="coach.socialMedia?.length" class="flex gap-2 flex-wrap">
        <a
          v-for="social in coach.socialMedia"
          :key="social.channel"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200"
          :aria-label="social.channel"
        >
          <span class="font-bold text-sm leading-none" style="color: #1E293B;">
            {{ social.channel === 'facebook' ? 'f' : social.channel === 'instagram' ? 'ig' : social.channel === 'tiktok' ? 'd' : 'in' }}
          </span>
        </a>
      </div>

      <!-- Social Media Badges (legacy object format) -->
      <div v-else-if="coach.socialLinks" class="flex gap-2 flex-wrap">
        <a v-if="coach.socialLinks.facebook" :href="coach.socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200" aria-label="Facebook">
          <span class="font-bold text-sm leading-none" style="color: #1E293B;">f</span>
        </a>
        <a v-if="coach.socialLinks.instagram" :href="coach.socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200" aria-label="Instagram">
          <span class="font-bold text-xs leading-none" style="color: #1E293B;">ig</span>
        </a>
        <a v-if="coach.socialLinks.tiktok" :href="coach.socialLinks.tiktok" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200" aria-label="TikTok">
          <span class="font-bold text-sm leading-none" style="color: #1E293B;">d</span>
        </a>
        <a v-if="coach.socialLinks.linkedin" :href="coach.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-9 h-9 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200" aria-label="LinkedIn">
          <span class="font-bold text-xs leading-none" style="color: #1E293B;">in</span>
        </a>
      </div>
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

defineProps<{
  coach: Coach
}>()
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
