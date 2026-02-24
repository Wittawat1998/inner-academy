<template>
  <section
    v-if="program"
    class="next-program-section bg-transparent py-16 md:py-20"
    role="region"
    aria-label="Upcoming program"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row gap-10 items-center justify-center">
        <!-- Left: Heading and subtitle -->
        <div class="flex-1 flex flex-col justify-center items-start md:items-start mb-8 md:mb-0 pl-2 md:pl-8">
          <h2 class="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl mb-2 tracking-tight leading-tight whitespace-nowrap">{{ program.title }}</h2>
          <div class="text-base md:text-lg text-gray-200 mb-2">{{ program.subtitle }}</div>
          <div class="w-full h-0.5 mb-2 next-program-underline"></div>
        </div>
        <!-- Right: Program vertical card (mock) -->
        <div class="flex-1 w-full max-w-lg">
          <img src="/images/next-program-card-mock.svg" alt="Next Program Card" class="w-full rounded-3xl shadow-2xl" />
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import nextProgramData from '~/data/nextProgram.json'

/**
 * NextProgramPromo Component
 * Feature: 002-home-page - User Story 2
 * 
 * Promotional banner for upcoming program
 * Theme: Dark surface background, gradient card, gold accents
 * 
 * @requirements
 * - FR-013: Dark surface background (bg-surface)
 * - FR-014: Program card with title, date, description
 * - FR-015: Optional gold pill CTA button (rounded-full)
 */

const program = nextProgramData
</script>

<style scoped>
/* Custom gradient for promotional card */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Dark overlay gradient at bottom of banner image */
.banner-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%);
}

/* Underline for NextProgramPromo heading */
.next-program-underline {
  background: linear-gradient(to right, #9ca3af66 0%, #9ca3af00 100%);
}

/* Placeholder for missing coach images */
.coach-placeholder {
  background: linear-gradient(135deg, #c9d4e0 0%, #b0bccc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.coach-placeholder::after {
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238899aa'%3E%3Cpath d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z'/%3E%3C/svg%3E") center/contain no-repeat;
}
</style>

<!-- <div class="p-3 grid grid-cols-2 gap-3">
              <div v-for="(item, idx) in program.programs" :key="'prog-'+idx" class="rounded-xl flex flex-row overflow-hidden min-h-[100px]" style="background-color: #7a93aa;">
                <div class="w-2/5 flex-shrink-0 bg-[#d1d9e0]">
                  <img
                    :src="item.image"
                    :alt="item.coach"
                    class="w-full h-full object-cover object-top"
                    @error="(e) => { (e.target as HTMLImageElement).style.display='none'; (e.target as HTMLImageElement).parentElement!.classList.add('coach-placeholder') }"
                  />
                </div>
                <div class="flex flex-col flex-1 min-w-0 justify-between p-2">
                  <div class="text-[10px] font-semibold text-white/80 mb-0.5">{{ item.date }}</div>
                  <div class="text-sm font-extrabold text-goldText leading-tight mb-0.5">{{ item.title }}</div>
                  <div class="text-[9px] text-white/70 mb-0.5 leading-tight">{{ item.desc }}</div>
                  <div class="text-[10px] font-bold text-white leading-tight">{{ item.coach }}</div>
                </div>
              </div>
            </div> -->