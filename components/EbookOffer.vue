<template>
  <section
    v-if="ebook"
    class="relative overflow-hidden"
    style="min-height: 520px;"
    role="region"
    aria-label="Free e-book offer"
  >
    <!-- Background Image + dark overlay -->
    <div class="absolute inset-0">
      <!-- <img
        v-if="ebook.backgroundImage"
        :src="ebook.backgroundImage"
        alt=""
        class="w-full h-full object-cover object-center"
        loading="lazy"
      /> -->
      
      <!-- <div class="absolute inset-0" style="background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(8,18,38,0.72) 40%, rgba(8,18,38,0.97) 100%);" /> -->
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-14 py-14 md:py-20">

      <!-- Heading: full-width centered on top -->
      <div class="text-center mb-10 md:mb-14">
        <p class="font-extrabold text-white leading-tight" style="font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.15;">
          {{ ebook.headingLine1 }}
        </p>
        <p class="font-extrabold leading-tight" style="font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.15;">
          <span class="text-white">{{ ebook.headingLine2Before }}</span><span style="color: #C9A961;">{{ ebook.headingLine2Highlight }}</span><span class="text-white">{{ ebook.headingLine2After }}</span>
        </p>
      </div>

      <!-- Bottom: 2 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Left: Book cover -->
        <div class="flex justify-center">
          <img
            :src="ebook.image"
            :alt="ebook.headingLine1 || 'Guidebook'"
            class="w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        <!-- Right: subheading + description + CTA -->
        <div class="flex flex-col items-start gap-5">
          <h3
            v-if="ebook.subheading"
            class="font-bold text-white leading-snug whitespace-pre-line"
            style="font-size: clamp(1.35rem, 2.5vw, 1.9rem); line-height: 1.4;"
          >
            {{ ebook.subheading }}
          </h3>

          <p class="text-sm md:text-base text-gray-300 leading-relaxed max-w-sm">
            {{ ebook.description }}
          </p>

          <a
            :href="ebook.ctaUrl"
            class="inline-flex items-center gap-3 px-8 py-4 text-black font-semibold text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl mt-2 bg-ctaGold"
          >
            <span>⬇</span>
            <span>{{ ebook.ctaText }}</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ebook } from '~/types/home'

defineProps<{
  ebook: Ebook
}>()
</script>
