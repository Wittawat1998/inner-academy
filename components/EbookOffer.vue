<template>
  <section
    v-if="ebook"
    class="relative overflow-hidden"
    style="min-height: 520px; background-image: url('/images/bg/home-ebook-bg.webp'); background-size: cover; background-position: center;"
    role="region"
    aria-label="Free e-book offer"
  >
    <!-- Background Image + dark overlay -->

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-14 py-10 md:py-16 lg:py-20">

      <!-- Heading: full-width centered on top -->
      <div class="text-center mb-3 text-[clamp(2rem,6vw,70px)] leading-[1.15]">
        <p class=" text-white  ">
          {{ ebook.headingLine1 }}
        </p>
        <p class="">
          <span class="text-white">{{ ebook.headingLine2Before }}</span><span class="header-fade">{{ ebook.headingLine2Highlight }}</span><span class="text-white">{{ ebook.headingLine2After }}</span>
        </p>
      </div>

      <!-- Bottom: 2 columns on md+, stacked on mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

        <!-- Left: Book cover -->
        <div class="flex justify-center">
          <img
            :src="ebook.image"
            :alt="ebook.headingLine1 || 'Guidebook'"
            class="w-[240px] sm:w-[300px] md:w-[380px] h-auto drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        <!-- Right: subheading + description + CTA -->
        <div class="flex flex-col items-start gap-5 pt-[30px]">
          <h3
            v-if="ebook.subheading"
            class="font-medium text-white leading-[1.4] whitespace-pre-line text-[clamp(1.35rem,2.5vw,1.9rem)]"
          >
            {{ ebook.subheading }}
          </h3>

          <p class="text-base text-gray-300 leading-relaxed max-w-sm">
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

const { data: ebook } = await useFetch<Ebook>('/api/ebook')
</script>
