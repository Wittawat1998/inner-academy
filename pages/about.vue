<template>
  <main class="about-page">
    <!-- Hero Section -->
    <!-- flex flex-col justify-end: on mobile the text sits at the bottom of the image in normal flow -->
    <!-- on lg+ the text div switches to absolute and overlaps into the quote section -->
    <section class="relative flex flex-col justify-end pt-64"
      style="min-height: min(56.25vw, 1080px); background-image: url('/images/about/about-hero-bg.webp'); background-size: 100% auto; background-position: center center; background-repeat: no-repeat;">
      <div class="relative z-10
        px-4 pb-4
        md:px-8 md:pb-8
        lg:absolute lg:left-[20%] lg:bottom-[-390px] lg:max-w-3xl lg:px-0 lg:pb-0
        xl:max-w-4xl">
        <h1
          class="text-left text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold mb-4 md:mb-6 header-fade drop-shadow-lg">
          {{ data.title }}
        </h1>
        <div class="text-white text-sm md:text-base lg:text-xl font-medium mt-4">
          {{ data.description }}
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="relative flex items-center justify-center py-16 md:py-24 lg:py-32"
      style="min-height: min(56.25vw, 1080px); background-image: url('/images/about/about-quote-bg.webp'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;">
      <div class="relative z-10 flex flex-col justify-center w-full">
        <!-- mt-[300px] only on lg+ to offset the overlapping hero text -->
        <div class="lg:mt-[300px] max-w-4xl mx-auto px-6 text-center">
          <div class="mb-8">
            <span class="inline-block text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug">
              <span class="text-goldTextDark align-middle text-6xl mr-2">“</span>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="highlightedQuote" />
            </span>
          </div>
          <div class="text-base md:text-2xl text-gray-200 mb-6">
            {{ data.subquote }}<span class="text-goldTextDark align-middle text-6xl ml-2">"</span>
          </div>
          <div class="text-xl md:text-2xl text-white mt-4">
            — {{ data.author }} —
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import aboutData from '~/data/about.json'

const data = aboutData as unknown as { title: string; description: string; quote: string; quoteHighlights: string[]; subquote: string; author: string }

const highlightedQuote = computed(() => {
  let result = data.quote
  for (const word of data.quoteHighlights) {
    result = result.replaceAll(word, `<span class="text-goldText">${word}</span>`)
  }
  return result
})

// SEO meta tags
useHead({
  title: 'About Us - Inner Power Academy',
  meta: [
    {
      name: 'description',
      content: data.description.substring(0, 160)
    },
    {
      property: 'og:title',
      content: 'About Us - Inner Power Academy'
    },
    {
      property: 'og:description',
      content: data.description.substring(0, 160)
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>