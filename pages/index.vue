<template>
  <div class="homepage">
    <!-- Section 1: Hero banner -->
    <HeroSection />

    <!-- Section 2: Trusted Logos horizontal slider (full width) -->
    <TrustedLogosSlider />

    <!-- Section 3: Courses row-based list -->
    <CoursesList />

    <!-- Section 4: Next Program promotional banner -->
    <NextProgramPromo v-if="nextProgram" :program="nextProgram" />

    <!-- Section 5: Coaches grid (ทีมโค้ช) -->
    <CoachesGrid />

    <!-- Section 6: Testimonials 3-item carousel -->
    <TestimonialsCarousel />

    <!-- Section 7: Dual CTA with two gold pill buttons -->
    <DualCTA />

    <!-- Section 8: E-book offer with split layout -->
    <EbookOffer />

    <!-- Section 9: Podcast/Knowledge block (optional) -->
    <PodcastBlock />

    <!-- Section 10: Contact block with form and info -->
    <ContactBlock />
  </div>
</template>

<script setup lang="ts">
// Feature: 002-home-page
// Homepage with 10 mandatory sections in dark+gold theme

const { homeData, meta, hero, nextProgram } = useHomeContent()

// SEO meta tags
useHead({
  title: meta.title,
  meta: [
    { name: 'description', content: meta.description },
    { name: 'keywords', content: meta.keywords || '' },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:image', content: meta.ogImage || '/images/og-homepage.jpg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
    { name: 'twitter:image', content: meta.ogImage || '/images/og-homepage.jpg' }
  ]
})
</script>

