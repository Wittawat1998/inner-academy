<template>
  <section v-if="sections?.ebook" class="relative overflow-hidden flex items-center justify-center"
    :style="`min-height: min(56.25vw, 1080px); background-image: url('${sections.ebook.bg ?? '/images/bg/home-ebook-bg.webp'}'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;`"
    role="region" aria-label="Free e-book offer">

    <!-- Content -->
    <div class="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-14 py-10 md:py-16 lg:py-20">

      <!-- Heading: full-width centered on top -->
      <div class="text-center mb-3 text-[clamp(1.8rem,7vw,70px)] font-semibold leading-[1.15]">
        <p class=" text-white  ">
          {{ sections.ebook.headingLine1 }}
        </p>
        <p class="">
          <span class="text-white">{{ sections.ebook.headingLine2Before }}</span><span class="header-fade">{{
            sections.ebook.headingLine2Highlight }}</span><span class="text-white">{{ sections.ebook.headingLine2After }}</span>
        </p>
      </div>

      <!-- Bottom: 2 columns on md+, stacked on mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

        <!-- Left: Book cover -->
        <div class="flex justify-start md:justify-center ">
          <img :src="sections.ebook.image" :alt="sections.ebook.headingLine1 || 'Guidebook'"
            class="w-[240px] sm:w-[300px] md:w-[400px] h-auto drop-shadow-2xl" loading="lazy" />
        </div>

        <!-- Right: subheading + description + CTA -->
        <div class="flex flex-col items-start gap-5 pt-[30px]">
          <h3 v-if="sections.ebook.subheading"
            class="font-medium text-white leading-relaxed whitespace-pre-line text-[clamp(1.35rem,2.5vw,1.9rem)]">
            {{ sections.ebook.subheading }}
          </h3>

          <p class="text-base text-gray-300 leading-relaxed max-w-sm">
            {{ sections.ebook.description }}
          </p>

          <a :href="sections.ebook.link" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-black font-semibold text-base md:text-2xl rounded-full transition-all duration-200 shadow-lg hover:shadow-xl mt-2 bg-ctaGold">
            <span>⬇</span>
            <span>{{ sections.ebook.submit }}</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { sections } = useHomeContent()
</script>
