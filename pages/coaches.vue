<script setup lang="ts">
import coachesData from '~/data/coaches.json'
import type { CoachesData, Coach as CoachesCoach } from '~/types/coaches'
import type { Coach as HomeCoach } from '~/types/home'

// Type assertion for imported JSON
const data = coachesData as CoachesData

// Transform coaches data to match CoachCard component expectations
const transformedCoaches = computed<HomeCoach[]>(() => 
  data.coaches.map((coach: CoachesCoach) => ({
    name: coach.name,
    title: coach.title,
    image: coach.photo || coach.image || '',
    bio: coach.bio,
    socialLinks: coach.socialLinks || {}
  }))
)

// SEO meta tags
useHead({
  title: `${data.meta.title} - Inner Power Academy`,
  meta: [
    {
      name: 'description',
      content: data.meta.description
    },
    {
      property: 'og:title',
      content: `${data.meta.title} - Inner Power Academy`
    },
    {
      property: 'og:description',
      content: data.meta.description
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <main class="coaches-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {{ data.meta.title }}
        </h1>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {{ data.meta.intro }}
        </p>
      </div>
    </section>
    
    <!-- Coaches Grid -->
    <section class="coaches-grid py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CoachCard 
            v-for="(coach, index) in transformedCoaches" 
            :key="coach.name"
            :coach="coach"
          />
        </div>
      </div>
    </section>
  </main>
</template>
