<template>
  <main v-if="classData" class="class-detail-page">
    <ClassHero 
      :title="classData.title"
      :image="classData.image"
      :level="classData.level"
    />
    
    <div class="container mx-auto px-4 py-12">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12">
        <!-- Main Content -->
        <article class="lg:col-span-8">
          <ClassMetadata 
            :duration="classData.duration"
            :level="classData.level"
            :instructor="classData.instructor"
          />
          
          <section class="description mb-12" aria-labelledby="description-heading">
            <h2 id="description-heading" class="text-3xl font-bold mb-6">About This Class</h2>
            <div class="prose prose-lg max-w-none">
              <p class="text-lg leading-relaxed">{{ classData.description }}</p>
            </div>
          </section>
          
          <CurriculumList 
            v-if="classData.curriculum?.length"
            :curriculum="classData.curriculum"
          />
          
          <OutcomesList 
            v-if="classData.learningOutcomes?.length"
            :outcomes="classData.learningOutcomes"
          />
        </article>
        
        <!-- Sidebar -->
        <aside class="lg:col-span-4 mt-8 lg:mt-0">
          <div class="sticky top-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
            <h3 class="text-2xl font-bold mb-4">Ready to Transform?</h3>
            <p class="mb-6">Start your journey with this course today.</p>
            <NuxtLink 
              to="/contact" 
              class="block bg-white text-blue-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
            >
              Enroll Now
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ClassesData } from '~/types/classes'
import classesDataRaw from '~/data/classes.json'

const route = useRoute()
const slug = route.params.slug as string

const classesData = classesDataRaw as ClassesData
const classData = classesData.classes.find(c => c.slug === slug)

// 404 handling
if (!classData) {
  throw showError({ 
    statusCode: 404, 
    message: 'Class not found. This class may have been removed or the URL is incorrect.' 
  })
}

// Dynamic SEO meta tags
useHead({
  title: `${classData.title} - Inner Academy`,
  meta: [
    { name: 'description', content: classData.shortDescription },
    { property: 'og:title', content: `${classData.title} - Inner Academy` },
    { property: 'og:description', content: classData.shortDescription },
    { property: 'og:image', content: `https://inneracademy.com${classData.image}` },
    { property: 'og:url', content: `https://inneracademy.com/courses/${slug}` }
  ]
})
</script>
