<template>
  <div class="homepage">
    <!-- Section 1: Hero banner -->
    <HeroSection />

    <!-- Section 2: Trusted Logos horizontal slider -->
    <TrustedLogosSlider v-if="logos && logos.length > 0" :logos="logos" />

    <!-- Section 3: Courses row-based list -->
    <CoursesList v-if="courses && courses.length > 0" :courses="courses" />

    <!-- Section 4: Next Program promotional banner -->
    <NextProgramPromo v-if="nextProgram" :program="nextProgram" />

    <!-- Section 5: Coaches grid (ทีมโค้ช) -->
    <CoachesGrid v-if="coaches && coaches.length > 0" :coaches="coaches" />

    <!-- Section 6: Testimonials 3-item carousel -->
    <TestimonialsCarousel v-if="testimonials && testimonials.length > 0" :testimonials="testimonials" />

    <!-- Section 7: Dual CTA with two gold pill buttons -->
    <DualCTA v-if="dualCTA" :cta="dualCTA" />

    <!-- Section 8: E-book offer with split layout -->
    <EbookOffer v-if="ebook" :ebook="ebook" />

    <!-- Section 9: Podcast/Knowledge block (optional) -->
    <PodcastBlock v-if="podcast" :podcast="podcast" />

    <!-- Section 10: Contact block with form and info -->
    <ContactBlock v-if="contact" :contact="contact" />
  </div>
</template>

<script setup lang="ts">
// Feature: 002-home-page
// Homepage with 10 mandatory sections in dark+gold theme

const { homeData, meta, hero, logos, courses, nextProgram, coaches, testimonials, dualCTA, ebook, podcast, contact } = useHomeContent()

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

