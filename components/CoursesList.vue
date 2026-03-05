<template>
  <section 
    id="classes"
    v-if="courses && courses.length > 0" 
    class="courses-list-section bg-transparent pb-5"
    role="region"
    aria-label="หลักสูตร"
  >
    <div class="container mx-auto px-4">
      <!-- Courses List (Full-width rows) -->
      <div class="max-w-[1280px] mx-auto">
        <!-- Section Heading -->
        <div class=" section-header">
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold pb-8 header-fade">
            {{ sections?.classes?.title ?? 'หลักสูตร' }}
          </h2>
        </div>

        <div class="space-y-0">
          <article
            v-for="(course, index) in courses"
            :key="course.slug"
            class="course-row"
          >
          <NuxtLink 
            :to="`/courses/${course.slug}`"
            class="course-link flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-4 sm:py-6 px-4 md:px-10 lg:px-[80px] group"
          >
            <!-- Left: Title + Description -->
            <div class="flex-1 min-w-0">
              <h3 class="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-gray-900 transition-colors">
                {{ course.title }}
              </h3>
              <p class="text-sm text-gray-400 group-hover:text-gray-700 transition-colors">
                {{ course.shortDescription }}
              </p>
            </div>

            <!-- Center: Coaches (hidden on mobile) -->
            <div v-if="course.coachIds && course.coachIds.length > 0" class="hidden md:flex items-center gap-3 flex-shrink-0">
              <span class="text-sm text-gray-400 group-hover:text-gray-700 transition-colors whitespace-nowrap">{{ sections?.classes?.providedBy ?? 'ถ่ายทอดโดย' }}</span>
              <div class="flex gap-2">
                <NuxtImg
                  v-for="coach in getCoachesByIds(course.coachIds)"
                  :key="coach.id ?? coach.slug"
                  :src="coach.avatar || ''"
                  :alt="coach.name ?? ''"
                  class="w-12 h-12 md:w-16 md:h-16 rounded-full border-3 border-white object-cover shadow-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </div>

            <!-- Right: CTA -->
            <div class="flex-shrink-0">
              <span class="inline-flex items-center gap-2 text-goldText group-hover:text-white font-semibold text-sm transition-colors">
                {{ sections?.classes?.learnMore ?? 'รายละเอียด' }}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-200" 
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
import type { ClassesData } from '~/types/classes'
import type { Coach } from '~/types/coaches'

const { sections } = useHomeContent()
const { data: classesData } = await useFetch<ClassesData>('/api/courses')
const { data: coachesAll } = await useFetch<Coach[]>('/api/home-coaches')
const courses = computed(() => classesData.value?.classes ?? [])

function getCoachesByIds(ids: string[]): Coach[] {
  if (!ids?.length || !coachesAll.value) return []
  return ids.map(id => coachesAll.value!.find(c => c.id === id)).filter(Boolean) as Coach[]
}
</script>

<style scoped>

.section-header {
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0;
  margin-right: 0;
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

/* @media (min-width: 768px) {
  .section-header {
    padding-left: 3rem;
    padding-right: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .section-header {
    padding-left: 8rem;
    padding-right: 8rem;
    margin-left: 6rem;
    margin-right: 6rem;
  }
} */

.course-link {
  border-radius: 0;
  background: transparent;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
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

.course-link:hover {
  background: linear-gradient(90deg,
    rgba(215, 185, 125, 0) 0%,
    rgba(215, 185, 125, 0.10) 1%,
    rgba(215, 185, 125, 0.18) 2%,
    rgba(215, 185, 125, 0.25) 3%,
    rgba(215, 185, 125, 0.35) 4%,
    rgba(215, 185, 125, 0.45) 5%,
    rgba(215, 185, 125, 0.55) 6%,
    rgba(215, 185, 125, 0.60) 7%,
    rgba(215, 185, 125, 0.68) 8%,
    rgba(215, 185, 125, 0.75) 9%,
    rgba(218, 188, 128, 1) 80%,
    rgba(220, 190, 130, 1) 80%,
    rgba(223, 193, 133, 1) 80%,
    rgba(225, 195, 135, 1) 80%,
    rgba(227, 197, 137, 1) 80%,
    rgba(230, 200, 140, 1) 80%,
    rgba(232, 202, 142, 1) 80%,
    rgba(235, 205, 145, 1) 80%,
    rgba(241, 209, 149, 1) 80%,
    rgba(247, 198, 109, 1) 80%, /* ctaGold */
    rgba(241, 209, 149, 1) 80%,
    rgba(235, 205, 145, 1) 80%,
    rgba(232, 202, 142, 1) 80%,
    rgba(230, 200, 140, 1) 80%,
    rgba(227, 197, 137, 1) 80%,
    rgba(225, 195, 135, 1) 80%,
    rgba(223, 193, 133, 1) 80%,
    rgba(220, 190, 130, 1) 80%,
    rgba(218, 188, 128, 1) 80%,
    rgba(215, 185, 125, 0.75) 91%,
    rgba(215, 185, 125, 0.68) 93%,
    rgba(215, 185, 125, 0.60) 95%,
    rgba(215, 185, 125, 0.45) 97%,
    rgba(215, 185, 125, 0.25) 98%,
    rgba(215, 185, 125, 0.10) 99%,
    rgba(215, 185, 125, 0) 100%
  );
}
</style>

<!-- .course-link:hover {
  background: linear-gradient(90deg,
    rgba(215, 185, 125, 0) 0%,
    rgba(215, 185, 125, 0.25) 2%,
    rgba(215, 185, 125, 0.45) 4%,
    rgba(215, 185, 125, 0.60) 6%,
    rgba(215, 185, 125, 0.75) 8%,
    rgba(218, 188, 128, 0.77) 12%,
    rgba(220, 190, 130, 0.78) 16%,
    rgba(223, 193, 133, 0.79) 20%,
    rgba(225, 195, 135, 0.8) 24%,
    rgba(227, 197, 137, 0.85) 28%,
    rgba(230, 200, 140, 0.85) 32%,
    rgba(232, 202, 142, 0.85) 36%,
    rgba(235, 205, 145, 0.85) 40%,
    rgba(241, 209, 149, 0.85) 45%,
    rgba(247, 198, 109, 0.85) 50%, /* ctaGold */
    rgba(241, 209, 149, 0.85) 55%,
    rgba(235, 205, 145, 0.85) 60%,
    rgba(232, 202, 142, 0.85) 64%,
    rgba(230, 200, 140, 0.85) 68%,
    rgba(227, 197, 137, 0.85) 72%,
    rgba(225, 195, 135, 0.8) 76%,
    rgba(223, 193, 133, 0.79) 80%,
    rgba(220, 190, 130, 0.78) 84%,
    rgba(218, 188, 128, 0.77) 88%,
    rgba(215, 185, 125, 0.75) 92%,
    rgba(215, 185, 125, 0.60) 95%,
    rgba(215, 185, 125, 0.25) 98%,
    rgba(215, 185, 125, 0) 100%
  );
} -->