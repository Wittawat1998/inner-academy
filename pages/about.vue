<template>
  <main class="about-page">
    <!-- Hero Section -->
    <section class="relative h-[480px] md:h-[600px] flex items-center">
      <img src="/images/about/about-hero-bg.webp" alt="About Hero Background" class="absolute inset-0 w-full h-full object-cover" />
      <!-- <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" /> -->
      <div class="relative z-10 flex flex-col justify-center h-full w-full">
        <div class="container max-w-screen-lg mx-auto px-4">
          <h1
            class="text-left text-7xl md:text-8xl font-extrabold mb-8 header-fade drop-shadow-lg">
            เกี่ยวกับเรา
          </h1>
          <div class="max-w-3xl text-white text-lg md:text-xl font-medium text-right ml-auto mt-2 md:mt-4">
            <span class="font-bold text-goldText">Inner Power Academy</span> คือ สถาบันที่ก่อตั้งโดย ครูเจาะ รสสุคนธ์
            กองเกตุ โดยเล็งเห็นว่า การเปลี่ยนแปลงที่ได้ผลลัพธ์ที่แท้จริง คือการเปลี่ยนจาก “อินเนอร์” หรือภายในจิตใจ
            ตั้งแต่ความเชื่อ ความกลัว และความต้องการ ซึ่งผลลัพธ์ของการเปลี่ยนแปลงจากภายในโดย Soft Skill
            จะส่งผลให้ภายนอกของเราเห็นมุมมองต่อการจัดการทำงานได้อย่างมีประสิทธิภาพ และมีความเข้าใจในตัวเอง
            และเพื่อพร้อมร่วมงานที่ดีมากขึ้น ซึ่งสถาบัน Inner Power Academy
            จะเป็นตัวช่วยในการดึงศักยภาพขององค์กรของคุณพาธุรกิจเดินไปข้างหน้า
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="relative py-24 md:py-32 bg-black/80">
      <img src="/images/about/about-quote-bg.webp" alt="About Hero Background" class="absolute inset-0 w-full h-full object-cover" />
      <div class="relative z-10 flex flex-col justify-center h-full w-full">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="mb-8">
            <span class="inline-block text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
              <span class="text-goldTextDark align-middle text-5xl md:text-6xl mr-2">“</span>
              เมื่อเรามี <span class="text-goldText">อินเนอร์</span> ที่แข็งแกร่ง<br />
              เท่ากับการสร้าง <span class="text-goldText">ผลลัพธ์</span> ที่ดี
  
            </span>
          </div>
          <div class="text-lg md:text-xl text-gray-200 mb-6">
            การเปลี่ยนแปลงจากข้างในตัวเอง จะส่งผลให้เกิดการเปลี่ยนแปลง<br
              class="hidden md:inline" />กับคนรอบข้างขยายออกไปสู่องค์กร และสังคม<span
              class="text-goldTextDark align-middle text-5xl md:text-6xl ml-2">”</span>
          </div>
          <div class="text-base md:text-lg text-white mt-4">
            — ครูเจาะ รสสุคนธ์ กองเกตุ —
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import aboutData from '~/data/about.json'
import type { AboutData } from '~/types/about'

// Type assertion for imported JSON
const data = aboutData as AboutData

// SEO meta tags
useHead({
  title: 'About Us - Inner Power Academy',
  meta: [
    {
      name: 'description',
      content: data.mission.description.substring(0, 160)
    },
    {
      property: 'og:title',
      content: 'About Us - Inner Power Academy'
    },
    {
      property: 'og:description',
      content: data.mission.description.substring(0, 160)
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>