<template>
  <main class="classes-page" role="main">
    <!-- Page Header -->
    <PageHeader 
      :title="classesData.meta.title"
      :intro="classesData.meta.intro"
    />
    
    <!-- Classes Grid Section -->
    <section 
      class="classes-grid py-16 bg-gray-50"
      aria-label="Available classes"
    >
      <div class="container mx-auto px-4">
        <div 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          <article 
            v-for="classItem in classesData.classes" 
            :key="classItem.slug"
            role="listitem"
          >
            <ClassCard :class-item="classItem" />
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
/**
 * Class List Page
 * 
 * Feature: 003-class-list
 * Route: /courses
 * 
 * Displays all 13 available training classes in a responsive grid layout.
 * Each class card links to the detail page at /courses/[slug] (via ClassCard component).
 * 
 * @component
 */

import type { ClassesData } from '~/types/classes'
import classesDataRaw from '~/data/classes.json'

// Type assertion for imported JSON
const classesData = classesDataRaw as ClassesData

// SEO Meta Tags
useHead({
  title: classesData.meta.title,
  meta: [
    // Standard meta tags
    { name: 'description', content: classesData.meta.description },
    { name: 'keywords', content: 'online courses, personal development classes, professional training, self-improvement, mindfulness, leadership' },
    
    // Open Graph tags for social sharing
    { property: 'og:title', content: classesData.meta.title },
    { property: 'og:description', content: classesData.meta.description },
    { property: 'og:type', content: 'website' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: classesData.meta.title },
    { name: 'twitter:description', content: classesData.meta.description }
  ]
})
</script>
