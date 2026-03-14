<template>
  <section
    id="knowledge"
    v-if="sections?.podcast"
    class="relative overflow-hidden flex flex-col"
    :style="`min-height: min(56.25vw, 1080px); background-image: url('${sections.podcast.bg ?? '/images/bg/home-podcast-bg.webp'}'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;`"
    role="region"
    aria-label="Podcast highlight"
  >
    <div class="mt-auto container mx-auto px-4 pb-10 sm:pb-16 md:pb-12 lg:pb-20 xl:pb-48">
      <div class="max-w-[1280px] mx-auto relative">

        <!-- Content: Bottom Left in container -->
        <div class="relative z-10 flex flex-col items-start">
          <div class="text-[clamp(1.2rem,4vw,70px)] font-semibold text-white leading-[1.15]">
            <h2 class=" mb-2 ">
              {{ sections.podcast.titleLine1 }}
            </h2>
            <h2 class="mb-4 ">
              {{ sections.podcast.titleLine2 }}
            </h2>
          </div>
          <p class="text-sm md:text-base xl:text-2xl lg:text-3xl font-light text-white mb-6 md:mb-8 leading-relaxed max-w-[90%] md:max-w-[800px]">
            {{ sections.podcast.description }}
          </p>
          <a
            :href="sections.podcast.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[clamp(1.5rem,4vw,2rem)] bg-ctaGold text-black shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="8,6 20,12 8,18" fill="#000"/>
            </svg>
            <span class="text-xl font-semibold">{{ sections.podcast.submit }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { sections } = useHomeContent()
</script>

<style scoped>
@media (max-width: 767px) {
  section {
    min-height: 420px !important;
  }
}
</style>
