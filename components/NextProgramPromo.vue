<template>
  <section
    v-if="sections.classPrograms"
    class="next-program-section pt-5 pb-10 md:pb-16 lg:pb-20"
    :style="sections?.classPrograms?.bg ? `background-image: url('${sections.classPrograms.bg}'); background-size: cover; background-position: center;` : 'background-image: url(/images/bg/hero-bg.webp); background-size: cover; background-position: center;'"
    role="region"
    aria-label="Upcoming program"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-[1280px] mx-auto">
        <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
        <!-- Left: Heading and subtitle -->
        <div class="flex-1 flex flex-col justify-center items-center md:items-start mb-0 md:pl-8 text-center md:text-left">
          <h2 class="text-white font-semibold text-3xl md:text-4xl lg:text-7xl mb-2 tracking-tight leading-tight">{{ sections?.classPrograms?.title ?? 'NEXT PROGRAM' }}</h2>
          <div class="text-base md:text-lg lg:text-3xl text-gray-200 mb-2">{{ sections?.classPrograms?.subtitle ?? 'ตารางการอบรม' }}</div>
          <div class="w-full h-0.5 mb-2 next-program-underline"></div>
        </div>
        <!-- Right: Program vertical card (mock) -->
        <div class="flex-1 w-full max-w-xs md:max-w-lg">
          <img :src="sections?.classPrograms?.image ?? '/images/next-program/next-program.webp'" alt="Next Program Card" class="w-full rounded-3xl shadow-2xl" />
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const { sections } = useHomeContent()

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

</style>
