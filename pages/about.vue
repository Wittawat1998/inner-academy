<script setup lang="ts">
import aboutData from '~/data/about.json'
import type { AboutData } from '~/types/about'

// Type assertion for imported JSON
const data = aboutData as AboutData

// SEO meta tags
useHead({
  title: 'About Us - Inner Power Academy',
  meta: [
    {
      name: 'description',
      content: data.mission.description.substring(0, 160)
    },
    {
      property: 'og:title',
      content: 'About Us - Inner Power Academy'
    },
    {
      property: 'og:description',
      content: data.mission.description.substring(0, 160)
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <main class="about-page">
    <!-- Mission Section (User Story 1) -->
    <AboutMission :mission="data.mission" />
    
    <!-- Founder Section (User Story 2) -->
    <AboutFounder :founder="data.founder" />
    
    <!-- Quote Section (User Story 3 - Conditional) -->
    <AboutQuote v-if="data.quote" :quote="data.quote" />
    
    <!-- Gallery Section (User Story 3 - Conditional) -->
    <AboutGallery v-if="data.images && data.images.length > 0" :images="data.images" />
  </main>
</template>
