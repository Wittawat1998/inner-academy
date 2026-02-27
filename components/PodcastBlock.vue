<template>
  <section
    id="knowledge"
    v-if="podcast"
    class="relative overflow-hidden pt-30"
    style="background-image: url('/images/bg/home-podcast-bg.webp'); background-size: contain; background-position: center; background-repeat: no-repeat;"
    role="region"
    aria-label="Podcast highlight"
  >
    <div class="container mx-auto px-4">
      <div class="xl:max-w-5xl mx-auto relative">

        <!-- Content: Bottom Left in container -->
        <div class="relative z-10 flex flex-col items-start justify-end min-h-[800px] pb-24">
          <div class=" text-[40px] font-semibold text-white leading-[1.15]">
            <h2 class=" mb-2 ">
              {{ podcast.titleLine1 }}
            </h2>
            <h2 class="mb-4 ">
              {{ podcast.titleLine2 }}
            </h2>
          </div>
          <p class="text-md font-light text-white mb-8 leading-[1.4] max-w-[600px]">
            {{ podcast.description }}
          </p>
          <a
            :href="podcast.episodes[0]?.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg bg-ctaGold text-black shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="8,6 20,12 8,18" fill="#000"/>
            </svg>
            <span class="text-xl font-semibold">ชมรายการ</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Podcast } from '~/types/home'

const { data: podcast } = await useFetch<Podcast>('/api/podcast')
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
