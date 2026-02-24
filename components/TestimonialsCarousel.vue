<template>
  <section
    id="testimonials"
    class="py-16 md:py-20"
    >
    <!-- style="background: linear-gradient(180deg, #0F172A 0%, #0c1525 100%);" -->
    <div class="max-w-7xl mx-auto px-4">

      <!-- Section Heading -->
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-16"
        style="color: #C9A961;"
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

                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                  <!-- IP Badge top-right -->
                  <!-- <div
                    class="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style="background-color: rgba(15,23,42,0.85); border: 1px solid #94A3B8; color: #fff;"
                  >
                    <span class="text-[9px] font-semibold leading-tight text-center">INNER<br>POWER</span>
                  </div> -->

                  <!-- Text Overlay (bottom) -->
                  <div class="absolute bottom-0 left-0 right-0 p-4">
                    <!-- Quote lines -->
                    <!-- <p v-if="t.quoteIntro" class="text-xs text-gray-300 leading-snug mb-0.5">
                      {{ t.quoteIntro }}
                    </p>
                    <p v-if="t.quoteMid" class="text-sm text-white font-semibold leading-snug mb-1">
                      {{ t.quoteMid }}
                    </p>
                    <p
                      v-if="t.quoteLarge"
                      class="text-xl font-bold leading-snug mb-3"
                      style="color: #E8B84B;"
                    >
                      {{ t.quoteLarge }}
                    </p> -->

                    <!-- Divider + Name -->
                    <!-- <div class="border-t border-gray-500 pt-2 mb-2">
                      <p class="text-sm font-bold text-white">{{ t.studentName }}</p>
                      <p v-if="t.studentTitle" class="text-xs text-gray-400 leading-snug mt-0.5">
                        {{ t.studentTitle }}
                      </p>
                    </div> -->

                    <!-- Key Message Tag -->
                    <!-- <div
                      v-if="t.keyMessage"
                      class="inline-block px-2 py-1 rounded text-xs text-gray-300"
                      style="background-color: rgba(0,0,0,0.65);"
                    >
                      {{ t.keyMessage }}
                    </div> -->
                  </div>
                </div>
              </a>

              <!-- CTA Button below card -->
              <div class="mt-4 flex justify-center">
                <a
                  :href="'https://www.youtube.com/watch?v=' + t.youtubeId"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cta-btn flex items-center gap-2 px-7 py-3 text-[#E8CD91] border border-[#E8CD91] rounded-full font-semibold text-sm transition-colors duration-200"
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

const props = defineProps<{
  testimonials: Testimonial[]
}>()

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
