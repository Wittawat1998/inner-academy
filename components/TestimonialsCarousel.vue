<template>
  <section
    id="testimonials"
    class=""
    >
    <!-- style="background: linear-gradient(180deg, #0F172A 0%, #0c1525 100%);" -->
    <div class="max-w-5xl mx-auto px-4 pb-16">

      <!-- Section Heading -->
      <h2
        class="text-7xl font-semibold text-center mb-10 header-fade"
      >
        ผลลัพธ์ผู้เรียน
      </h2>

      <!-- Carousel Wrapper -->
      <div class="relative px-10 md:px-14">
        <!-- Left Arrow -->
        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-12 z-10 w-9 h-9 flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-200"
          aria-label="Previous"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Cards Track -->
        <div
          ref="track"
          class="overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        >
          <div class="flex gap-4 md:gap-6" style="min-width: 100%;">
            <div
              v-for="(t, i) in testimonials"
              :key="t.youtubeId"
              class="snap-center flex-shrink-0 flex flex-col"
              :style="`width: calc((100% - 2 * 24px) / 3); max-width: 360px`"
            >
              <!-- Card -->
              <a
                :href="'https://www.youtube.com/watch?v=' + t.youtubeId"
                target="_blank"
                rel="noopener noreferrer"
                class="relative block rounded-2xl overflow-hidden border border-gray-700 group"
              >
                <!-- Portrait Image -->
                <div class="aspect-[4/5] relative overflow-hidden">
                  <img
                    :src="t.thumbnail || '/images/testimonials/testimonial-' + (i + 1) + '.webp'"
                    :alt="t.studentName"
                    class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </a>

              <!-- CTA Button below card -->
              <div class="mt-4 flex justify-center">
                <a
                  :href="'https://www.youtube.com/watch?v=' + t.youtubeId"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cta-btn flex items-center gap-2 px-5 py-2 text-goldText border border-goldText rounded-full font-semibold text-sm transition-colors duration-200"
                >
                  <span>&#9654;</span>
                  <span>ดูคลิปเต็ม</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-12 z-10 w-9 h-9 flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-200"
          aria-label="Next"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types/home'

const { data: testimonials } = await useFetch<Testimonial[]>('/api/testimonials')

const track = ref<HTMLElement | null>(null)

const prev = () => {
  if (!track.value) return
  const items = track.value.querySelectorAll('.snap-center')
  if (!items.length) return
  const cardWidth = (items[0] as HTMLElement).offsetWidth
  track.value.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' })
}

const next = () => {
  if (!track.value) return
  const items = track.value.querySelectorAll('.snap-center')
  if (!items.length) return
  const cardWidth = (items[0] as HTMLElement).offsetWidth
  track.value.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
}
</script>

<style scoped>
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
.cta-btn:hover { background-color: #f7c66d; color: #000; border-color: #f7c66d; }
</style>
