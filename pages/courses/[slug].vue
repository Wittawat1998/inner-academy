<template>
  <main v-if="classData" class="class-detail-page bg-gradient-header min-h-screen">

    <!-- ─── Hero ────────────────────────────────────────────────────── -->
    <section class="relative pt-20 md:pt-24 overflow-hidden" style="background-image: url('/images/bg/hero-bg.webp'); background-size: cover; background-position: center;">
      <div class="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-16">
        <div class="max-w-[1024px] flex flex-col lg:flex-row items-center gap-8 md:gap-12">

          <!-- Left: title, description, instructors -->
          <div class="flex-1 min-w-0">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] header-fade mb-4">
              {{ classData.title }}
            </h1>
            <p class="text-xl md:text-2xl lg:text-4xl text-white mb-6 md:mb-10 leading-relaxed">
              {{ classData.shortDescription || classData.description.split('\n')[0] }}
            </p>

            <!-- Instructors -->
            <div v-if="classData.instructors?.length">
              <p class="text-sm text-textSecondary mb-3 tracking-widest uppercase">ถ่ายทอดโดย</p>
              <div class="flex gap-4">
                <div
                  v-for="(ins, i) in classData.instructors"
                  :key="i"
                  class="flex flex-col items-center gap-2"
                >
                  <img
                    :src="ins.image"
                    :alt="ins.name"
                    class="w-20 h-20 rounded-full object-cover border-2 border-brandGold bg-[#1a1a2e]"
                  />
                </div>
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
            <div class="sticky top-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 space-y-6">

              <div v-if="classData.category">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">หมวดหมู่</p>
                <p class="text-lg font-semibold text-textPrimary">{{ classData.category }}</p>
              </div>

              <div v-if="classData.duration">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">ระยะเวลา</p>
                <p class="text-2xl font-bold text-textPrimary">{{ classData.duration }}</p>
              </div>

              <div v-if="classData.targetAudience?.length">
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-2">เหมาะกับ</p>
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
                <p class="text-xs text-textSecondary tracking-widest uppercase mb-1">ราคา</p>
                <p v-if="classData.originalPrice" class="text-sm line-through text-textSecondary">
                  {{ classData.originalPrice.toLocaleString() }} บาท
                </p>
                <p class="text-3xl font-extrabold text-goldText">
                  {{ classData.price.toLocaleString() }} <span class="text-lg font-normal">บาท</span>
                </p>
                <p v-if="classData.priceNote" class="text-xs text-goldText mt-1">
                  ({{ classData.priceNote }})
                </p>
              </div>

            </div>
          </aside>

          <!-- Right: description content -->
          <article class="flex-1 min-w-0 space-y-5">
            <template v-for="(para, i) in descriptionParagraphs" :key="i">
              <p class="text-textSecondary leading-[1.85] text-[1.05rem]">{{ para }}</p>
            </template>
          </article>

        </div>
      </div>
    </section>

    <!-- ─── Gallery ────────────────────────────────────────────────── -->
    <section v-if="classData.gallery?.length" class="py-8">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div class="relative">
          <!-- Left arrow -->
          <button
            @click="scrollGallery(-1)"
            class="absolute left-0 top-0 z-10 w-16 h-full flex items-center justify-start pl-2 bg-gradient-to-r from-black/80 to-transparent text-white transition"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Scroll track -->
          <div ref="galleryRef" class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar">
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
            class="absolute right-0 top-0 z-10 w-16 h-full flex items-center justify-end pr-2 bg-gradient-to-l from-black/80 to-transparent text-white transition"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
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
            v-if="classData.ctaDocumentUrl"
            :href="classData.ctaDocumentUrl"
            class="block w-full text-center text-xl md:text-3xl lg:text-4xl font-semibold py-4 md:py-5 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
          >
            ดาวน์โหลดเอกสาร
          </a>
          <NuxtLink
            :to="classData.ctaNextRoundUrl || '/contact'"
            class="block w-full text-center text-xl md:text-3xl lg:text-4xl font-semibold py-4 md:py-5 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
          >
            คลาสรอบถัดไป
          </NuxtLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import type { ClassesData } from '~/types/classes'
import classesDataRaw from '~/data/classes.json'

const route = useRoute()
const id = Number(route.params.slug)

const classesData = classesDataRaw as ClassesData
const classData = isNaN(id)
  ? classesData.classes.find(c => c.slug === String(route.params.slug))
  : classesData.classes.find(c => c.id === id)

if (!classData) {
  throw showError({ statusCode: 404, message: 'Class not found.' })
}

const galleryRef = ref<HTMLElement | null>(null)

function scrollGallery(direction: 1 | -1) {
  const el = galleryRef.value
  if (!el) return
  const itemWidth = el.querySelector('div')?.offsetWidth ?? 340
  el.scrollBy({ left: direction * (itemWidth + 16), behavior: 'smooth' })
}

const descriptionParagraphs = computed(() =>
  (classData.description || '').split('\n').filter(Boolean)
)

useHead({
  title: `${classData.title} - Inner Academy`,
  meta: [
    { name: 'description', content: classData.shortDescription || classData.description },
    { property: 'og:title', content: `${classData.title} - Inner Academy` },
    { property: 'og:description', content: classData.shortDescription || classData.description },
    { property: 'og:image', content: `https://inneracademy.com${classData.image || ''}` },
    { property: 'og:url', content: `https://inneracademy.com/courses/${classData.slug}` }
  ]
})
</script>

<style scoped>
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
</style>

