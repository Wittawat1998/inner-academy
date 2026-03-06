<template>
  <main v-if="classData" class="class-detail-page bg-gradient-header min-h-screen" style="background-image: url('/images/bg/hero-bg.webp'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;">

    <!-- ─── Hero ────────────────────────────────────────────────────── -->
    <section class="relative pt-20 md:pt-24 overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-16">
        <div class="max-w-[1024px] flex flex-col lg:flex-row items-center gap-8 md:gap-12">

          <!-- Left: title, description, instructors -->
          <div class="flex-1 min-w-0">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] header-fade mb-4">
              {{ classData.title }}
            </h1>
            <p class="text-xl md:text-2xl lg:text-4xl text-white mb-6 md:mb-10 leading-relaxed">
              {{ classData.shortDescription }}
            </p>

            <!-- Coaches -->
            <div v-if="classCoaches.length">
              <p class="text-sm text-textSecondary mb-3 tracking-widest uppercase">{{ sections?.classes?.providedBy ?? 'ถ่ายทอดโดย' }}</p>
              <div class="flex gap-4">
                <NuxtLink
                  v-for="coach in classCoaches"
                  :key="coach.id ?? coach.slug"
                  :to="`/coaches/${coach.slug}`"
                  class="flex flex-col items-center gap-2 group"
                >
                  <img
                    :src="coach.avatar"
                    :alt="coach.name ?? ''"
                    class="w-20 h-20 rounded-full object-cover border-0 bg-[#1a1a2e] group-hover:ring-2 group-hover:ring-goldText"
                  />
                  <span class="text-xs text-textSecondary group-hover:text-goldText">{{ coach.name }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Right: hero image -->
          <div class="flex-shrink-0 w-full lg:w-[480px]">
            <img
              :src="classData.image || '/images/classes/placeholder.webp'"
              :alt="classData.title"
              class="w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- ─── Details ────────────────────────────────────────────────── -->
    <section class="py-16">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div class="max-w-[1024px] flex flex-col lg:flex-row gap-10">

          <!-- Left: metadata card -->
          <aside class="lg:w-72 flex-shrink-0">
            <div class="sticky top-24 rounded-2xl border border-[#4a5e77] bg-[#121d33] p-7 space-y-6">

              <div v-if="classData.category">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">{{ classLabels.category }}</p>
                <p class="text-lg font-semibold text-textPrimary">{{ classData.category }}</p>
              </div>

              <div v-if="classData.duration">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">{{ classLabels.duration }}</p>
                <p class="text-2xl font-bold text-textPrimary">{{ classData.duration }}</p>
              </div>

              <div v-if="classData.targetAudience?.length">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-2">{{ classLabels.audience }}</p>
                <ul class="space-y-1">
                  <li
                    v-for="(a, i) in classData.targetAudience"
                    :key="i"
                    class="flex items-center gap-2 text-textPrimary"
                  >
                    <span class="w-2 h-2 rounded-full bg-goldTextDark flex-shrink-0" />
                    {{ a }}
                  </li>
                </ul>
              </div>

              <div v-if="classData.price">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">{{ classLabels.price }}</p>
                <p v-if="classData.originalPrice" class="text-sm line-through text-textSecondary">
                  {{ classData.originalPrice.toLocaleString() }} บาท
                </p>
                <p class="text-3xl font-extrabold text-goldText">
                  {{ classData.price.toLocaleString() }} <span class="text-lg font-normal">บาท</span>
                </p>
                <p class="text-xs text-goldText mt-1">
                  {{ classData.priceNote || classLabels.priceRemark }}
                </p>
              </div>

            </div>
          </aside>

          <!-- Right: description content -->
          <article class="flex-1 min-w-0 space-y-8">
            <div v-for="(section, i) in classData.description" :key="i">
              <h3
                v-if="section.title"
                class="text-xl font-semibold mb-3 whitespace-pre-line"
                :class="section.titleColor === 'gold' ? 'text-goldText' : 'text-textPrimary'"
              >{{ section.title }}</h3>

              <!-- text (default) -->
              <p v-if="!section.type || section.type === 'text'" class="text-textSecondary leading-[1.85] text-[1.05rem] whitespace-pre-line">{{ section.description }}</p>

              <!-- bullet -->
              <template v-else-if="section.type === 'bullet'">
                <p v-if="section.description" class="text-textSecondary leading-[1.85] text-[1.05rem] mb-3">{{ section.description }}</p>
                <ul class="space-y-2">
                  <li
                    v-for="(item, j) in section.items"
                    :key="j"
                    class="flex items-start gap-3 text-textPrimary"
                  >
                    <span class="mt-2 w-2.5 h-2.5 rounded-full bg-goldTextDark flex-shrink-0" />
                    {{ item }}
                  </li>
                </ul>
              </template>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ─── Gallery ────────────────────────────────────────────────── -->
    <section v-if="classData.gallery?.length" class="py-8">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div class="relative px-14">
          <!-- Left arrow -->
          <button
            @click="scrollGallery(-1)"
            :disabled="!galleryCanScrollLeft"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all duration-300"
            :class="galleryCanScrollLeft ? 'text-white hover:text-yellow-300' : 'text-white/25 cursor-default'"
            aria-label="Previous"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Scroll track -->
          <div ref="galleryRef" class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar" @scroll="updateGalleryScroll">
            <div
              v-for="(img, i) in classData.gallery"
              :key="i"
              class="snap-center flex-shrink-0 w-[420px] rounded-xl overflow-hidden"
            >
              <img :src="img" :alt="`Gallery ${i + 1}`" class="w-full h-56 object-cover" />
            </div>
          </div>

          <!-- Right arrow -->
          <button
            @click="scrollGallery(1)"
            :disabled="!galleryCanScrollRight"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center transition-all duration-300"
            :class="galleryCanScrollRight ? 'text-white hover:text-yellow-300' : 'text-white/25 cursor-default'"
            aria-label="Next"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ─── CTA Buttons ──────────────────────────────────────────── -->
    <section class="py-14">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div class="flex flex-col gap-4 max-w-xl mx-auto">
          <a
            v-if="classData.downloads?.proposal"
            :href="classData.downloads.proposal"
            download
            target="_blank"
            class="block w-full text-center text-xl md:text-3xl lg:text-4xl font-semibold py-4 md:py-5 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
          >
            {{ classLabels.downloads }}
          </a>
          <NuxtLink
            :to="classData.ctaNextRoundUrl || '/contact'"
            class="block w-full text-center text-xl md:text-3xl lg:text-4xl font-semibold py-4 md:py-5 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
          >
            {{ classLabels.nextClass }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import type { ClassesData } from '~/types/classes'
import type { Coach } from '~/types/coaches'
import classesDataRaw from '~/data/classes.json'
import coachesDataRaw from '~/data/coaches.json'
import classLabels from '~/data/json/class.json'

const { sections } = useHomeContent()
const route = useRoute()
const id = Number(route.params.slug)

const classesData = classesDataRaw as ClassesData
const classData = isNaN(id)
  ? classesData.classes.find(c => c.slug === String(route.params.slug))
  : classesData.classes.find(c => c.id === id)

if (!classData) {
  throw showError({ statusCode: 404, message: 'Class not found.' })
}

const coaches = (coachesDataRaw as any).coaches as Coach[]
const classCoaches = computed(() => {
  const ids = (classData as any).coachIds as string[] ?? []
  return ids.map(id => coaches.find(c => c.id === id)).filter(Boolean) as Coach[]
})

const galleryRef = ref<HTMLElement | null>(null)
const galleryCanScrollLeft = ref(false)
const galleryCanScrollRight = ref(true)

function updateGalleryScroll() {
  const el = galleryRef.value
  if (!el) return
  galleryCanScrollLeft.value = el.scrollLeft > 1
  galleryCanScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function scrollGallery(direction: 1 | -1) {
  const el = galleryRef.value
  if (!el) return
  const itemWidth = el.querySelector('div')?.offsetWidth ?? 340
  el.scrollBy({ left: direction * (itemWidth + 16), behavior: 'smooth' })
}

onMounted(() => {
  updateGalleryScroll()
})

const descriptionText = classData.description.map(s => s.description).join(' ')

useHead({
  title: `${classData.title} - Inner Academy`,
  meta: [
    { name: 'description', content: classData.shortDescription || descriptionText },
    { property: 'og:title', content: `${classData.title} - Inner Academy` },
    { property: 'og:description', content: classData.shortDescription || descriptionText },
    { property: 'og:image', content: `https://inneracademy.com${classData.image || ''}` },
    { property: 'og:url', content: `https://inneracademy.com/courses/${classData.slug}` }
  ]
})
</script>

<style scoped>
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
</style>

