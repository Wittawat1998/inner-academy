<template>
  <main class="coach-detail-page">
    <!-- Coach profile found -->
    <div v-if="coach" class="container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <!-- Breadcrumb navigation -->
      <CoachBreadcrumb :coach-name="coach.name" />
      
      <!-- Coach profile content -->
      <article class="coach-profile">
        <!-- Header section with photo and basic info -->
        <header class="coach-header grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Large coach photo -->
          <div class="coach-photo-container md:col-span-1">
            <img 
              :src="coach.photo || coach.image" 
              :alt="`${coach.name}, ${coach.title}`"
              class="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-lg object-cover mx-auto md:mx-0 shadow-lg"
              @error="handleImageError"
              loading="lazy"
            />
            <div v-if="imageError" class="mt-4 text-center md:text-left text-sm text-textSecondary">
              Photo not available
            </div>
          </div>
          
          <!-- Name and title -->
          <div class="coach-info md:col-span-2">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-brandGold mb-2">
              {{ coach.name }}
            </h1>
            <p class="text-lg md:text-xl text-textSecondary mb-6">
              {{ coach.title }}
            </p>
            
            <!-- Expertise tags -->
            <div v-if="coach.expertise && coach.expertise.length > 0" class="expertise-section mb-6">
              <h2 class="text-lg font-semibold text-textPrimary mb-3">Areas of Expertise</h2>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in coach.expertise" 
                  :key="skill"
                  class="px-3 py-1 bg-brandGold/10 text-brandGold rounded-full text-sm border border-brandGold/20">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </header>
        
        <!-- Full bio section -->
        <section v-if="coach.bio" class="bio-section mb-8 bg-surface rounded-lg p-6">
          <h2 class="text-xl font-semibold text-textPrimary mb-4">About {{ coach.name }}</h2>
          <p class="text-textPrimary leading-relaxed whitespace-pre-wrap">
            {{ coach.bio }}
          </p>
        </section>
        
        <!-- Credentials grid -->
        <div class="credentials-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <!-- Education section -->
          <section v-if="coach.education && coach.education.length > 0" class="education-section bg-surface rounded-lg p-6">
            <h3 class="text-lg font-semibold text-textPrimary mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Education
            </h3>
            <ul class="space-y-2">
              <li 
                v-for="(edu, index) in coach.education" 
                :key="index"
                class="text-textPrimary text-sm leading-relaxed pl-4 border-l-2 border-brandGold/30">
                {{ edu }}
              </li>
            </ul>
          </section>
          
          <!-- Experience section -->
          <section v-if="coach.experience && coach.experience.length > 0" class="experience-section bg-surface rounded-lg p-6">
            <h3 class="text-lg font-semibold text-textPrimary mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </h3>
            <ul class="space-y-2">
              <li 
                v-for="(exp, index) in coach.experience" 
                :key="index"
                class="text-textPrimary text-sm leading-relaxed pl-4 border-l-2 border-brandGold/30">
                {{ exp }}
              </li>
            </ul>
          </section>
        </div>
        
        <!-- Teaching philosophy (optional) -->
        <section v-if="coach.philosophy" class="philosophy-section mb-8 bg-surface rounded-lg p-6 border-l-4 border-brandGold">
          <h2 class="text-xl font-semibold text-textPrimary mb-4">Teaching Philosophy</h2>
          <p class="text-textPrimary leading-relaxed italic whitespace-pre-wrap">
            "{{ coach.philosophy }}"
          </p>
        </section>
        
        <!-- Social media links (conditional) -->
        <section v-if="hasSocialLinks" class="social-links-section mb-8 bg-surface rounded-lg p-6">
          <h2 class="text-xl font-semibold text-textPrimary mb-4">Connect with {{ coach.name }}</h2>
          <div class="flex gap-4 items-center">
            <!-- Facebook -->
            <a 
              v-if="coach.socialLinks?.facebook"
              :href="coach.socialLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${coach.name} on Facebook`"
              class="social-link text-textSecondary hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-bgPrimary p-2 rounded">
              <IconFacebook class="w-8 h-8" />
            </a>
            
            <!-- Instagram -->
            <a 
              v-if="coach.socialLinks?.instagram"
              :href="coach.socialLinks.instagram"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${coach.name} on Instagram`"
              class="social-link text-textSecondary hover:text-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-bgPrimary p-2 rounded">
              <IconInstagram class="w-8 h-8" />
            </a>
            
            <!-- TikTok -->
            <a 
              v-if="coach.socialLinks?.tiktok"
              :href="coach.socialLinks.tiktok"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${coach.name} on TikTok`"
              class="social-link text-textSecondary hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-bgPrimary p-2 rounded">
              <IconTikTok class="w-8 h-8" />
            </a>
            
            <!-- LinkedIn -->
            <a 
              v-if="coach.socialLinks?.linkedin"
              :href="coach.socialLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${coach.name} on LinkedIn`"
              class="social-link text-textSecondary hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-bgPrimary p-2 rounded">
              <IconLinkedIn class="w-8 h-8" />
            </a>
          </div>
        </section>
        
        <!-- Back to Team link -->
        <div class="back-to-team mt-8">
          <NuxtLink 
            to="/#coaches" 
            class="inline-flex items-center text-brandGold hover:text-brandGoldHover transition-colors duration-200 font-medium">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Team
          </NuxtLink>
        </div>
      </article>
    </div>
    
    <!-- 404 - Coach not found -->
    <div v-else class="coach-not-found container mx-auto px-4 py-16 text-center">
      <div class="max-w-md mx-auto">
        <h1 class="text-4xl font-bold text-textPrimary mb-4">Coach Not Found</h1>
        <p class="text-textSecondary mb-8">
          Sorry, we couldn't find a coach with that profile. The coach may have been removed or the link may be incorrect.
        </p>
        <NuxtLink 
          to="/#coaches" 
          class="inline-block bg-brandGold hover:bg-brandGoldHover text-bgPrimary font-semibold px-6 py-3 rounded-full transition-colors duration-200">
          View All Coaches
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
/**
 * Coach Detail Page - Dynamic route for individual coach profiles
 * Route: /coaches/[slug]
 * Feature: 006-coaches (REVISED SCOPE - detail pages)
 */

import type { Coach } from '~/types/coaches'
import coachesData from '~/data/coaches.json'

// Get route parameter
const route = useRoute()
const slug = route.params.slug as string

// Find coach by slug
const coach = computed<Coach | undefined>(() => {
  return coachesData.coaches.find((c: any) => c.slug === slug)
})

// Image error handling
const imageError = ref(false)
const handleImageError = () => {
  imageError.value = true
}

// Check if coach has any social links
const hasSocialLinks = computed(() => {
  if (!coach.value?.socialLinks) return false
  const links = coach.value.socialLinks
  return !!(links.facebook || links.instagram || links.tiktok || links.linkedin)
})

// Dynamic SEO meta tags
useHead({
  title: coach.value 
    ? `${coach.value.name} - ${coach.value.title} | Inner Academy`
    : 'Coach Not Found | Inner Academy',
  meta: [
    { 
      name: 'description', 
      content: coach.value 
        ? `Learn about ${coach.value.name}, ${coach.value.title} at Inner Academy. ${coach.value.bio.substring(0, 140)}...`
        : 'Coach profile not found. View all our expert coaches at Inner Academy.'
    },
    {
      property: 'og:title',
      content: coach.value 
        ? `${coach.value.name} - Coach Profile`
        : 'Coach Not Found'
    },
    {
      property: 'og:description',
      content: coach.value 
        ? `${coach.value.title} at Inner Academy. ${coach.value.expertise.join(', ')}`
        : 'Coach profile not found'
    },
    {
      property: 'og:type',
      content: 'profile'
    }
  ]
})
</script>

<style scoped>
/* Coach detail page styling following dark+gold theme */
.coach-detail-page {
  min-height: 50vh;
}

.coach-profile {
  max-width: 1200px;
  margin: 0 auto;
}

/* Ensure long text wraps properly */
.coach-profile h1,
.coach-profile h2,
.coach-profile p {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
