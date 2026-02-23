<template>
  <section 
    id="classes"
    v-if="courses && courses.length > 0" 
    class="courses-list-section bg-transparent py-12 md:py-16 lg:py-20"
    role="region"
    aria-label="หลักสูตร"
  >
    <div class="container mx-auto px-4">
      <!-- Courses List (Full-width rows) -->
      <div class="max-w-7xl mx-auto">
        <!-- Section Heading -->
        <div class="mb-8 md:mb-12 section-header">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold pb-6 md:pb-8" style="color: #C9A961;">
            หลักสูตร
          </h2>
        </div>

        <div class="space-y-1">
          <article
            v-for="(course, index) in courses"
            :key="course.slug"
            class="course-row"
          >
          <NuxtLink 
            :to="`/courses/${course.slug}`"
            class="course-link flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 group"
          >
            <!-- Left: Title + Description -->
            <div class="flex-1 min-w-0">
              <h3 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-2 md:mb-3 group-hover:text-gray-900 transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-sm md:text-base text-gray-400 group-hover:text-gray-700 transition-colors">
                {{ course.description }}
              </p>
            </div>

            <!-- Center: Instructors -->
            <div v-if="course.instructors && course.instructors.length > 0" class="flex items-center gap-3 flex-shrink-0">
              <span class="text-sm text-gray-400 group-hover:text-gray-700 transition-colors whitespace-nowrap">ถ่ายทอดโดย</span>
              <div class="flex gap-2">
                <NuxtImg
                  v-for="(instructor, idx) in course.instructors"
                  :key="idx"
                  :src="instructor.image"
                  :alt="instructor.name"
                  class="w-20 h-20 md:w-24 md:h-24 rounded-full border-3 border-white object-cover shadow-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </div>

            <!-- Right: CTA -->
            <div class="flex-shrink-0">
              <span class="inline-flex items-center gap-2 text-gold group-hover:text-gray-900 font-semibold text-base md:text-lg transition-colors">
                รายละเอียด
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 md:h-6 md:w-6 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Course } from '~/types/home'

/**
 * CoursesList Component
 * Feature: 002-home-page - User Story 2
 * 
 * Full-width course cards with dark theme and gold accents
 * Theme: Black background, gold highlights, featured card with gold gradient
 * 
 * @requirements
 * - FR-009: Full-width row layout (not grid)
 * - FR-010: Title, description, instructors on left; CTA on right
 * - FR-011: Thai "รายละเอียด →" link in gold with right arrow
 * - FR-012: Links to /courses/[slug] route
 * - FR-013: Featured course with gold gradient background
 */

defineProps<{
  courses: Course[]
}>()
</script>

<style scoped>
.text-gold {
  color: #d4af37;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.section-header {
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, 
    rgba(156, 163, 175, 0) 0%,
    rgba(156, 163, 175, 0.2) 10%,
    rgba(156, 163, 175, 0.4) 30%,
    rgba(156, 163, 175, 0.5) 50%,
    rgba(156, 163, 175, 0.4) 70%,
    rgba(156, 163, 175, 0.2) 90%,
    rgba(156, 163, 175, 0) 100%
  ) 1;
}

@media (min-width: 768px) {
  .section-header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .section-header {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.course-link {
  border-radius: 0;
  background: transparent;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.course-link:hover {
  background: linear-gradient(90deg, 
    rgba(215, 185, 125, 0.75) 0%, 
    rgba(220, 190, 130, 0.78) 10%,
    rgba(225, 195, 135, 0.8) 20%,
    rgba(230, 200, 140, 0.82) 30%,
    rgba(235, 205, 145, 0.83) 40%,
    rgba(240, 210, 150, 0.85) 50%,
    rgba(235, 205, 145, 0.83) 60%,
    rgba(230, 200, 140, 0.82) 70%,
    rgba(225, 195, 135, 0.8) 80%,
    rgba(220, 190, 130, 0.78) 90%,
    rgba(215, 185, 125, 0.75) 100%
  );
}
</style>
