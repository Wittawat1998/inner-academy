<template>
  <section class="hero-section">
    <div class="w-full">
      <!-- Hero Banner -->
      <img :src="hero.bgHero" alt="Inner Power Academy" class="w-full h-auto object-contain object-top" />
    </div>

    <!-- Text block: pulls up slightly over the bottom of the image -->
    <div class="-mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20 flex flex-col items-center justify-center px-4 w-full max-w-[1280px] mx-auto pb-6 md:pb-10">
      <h2 class="hero-subtitle text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mb-2 md:mb-4 text-center">
        {{ hero.subtitle }}
      </h2>

      <!-- Description -->
      <p class="hero-description text-white text-sm md:text-base lg:text-lg xl:text-3xl max-w-5xl mx-auto mb-2 md:mb-4 text-center">
        {{ hero.description }}
      </p>

      <!-- Certification Badge -->
      <img :src="hero.badgeIcon" alt="Certified Badge" class="w-auto h-16 md:h-22 lg:h-28 xl:h-48" />
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * HeroSection Component
 * Feature: 002-home-page - User Story 1
 *
 * Hero section with designed banner
 * Theme: Dark gradient background with gold accents
 * 
 * Banner includes:
 * - "INNER POWER ACADEMY" title in gold
 * - Team silhouettes (8 people)
 * - Thai subtitle: "ปลดปล่อยศักยภาพให้กับคุณ"
 * - Course quality description
 * - Certified quality badge
 */
const { hero } = useHomeContent()
</script>

<style scoped>

.hero-subtitle {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-description {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.team-container {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.team-member {
  background: linear-gradient(to top,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0.5) 100%);
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  position: relative;
  transition: all 0.3s ease;
}

.team-member::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 25%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.team-member.team-center {
  background: linear-gradient(to top,
      rgba(212, 175, 55, 0.9) 0%,
      rgba(212, 175, 55, 0.7) 50%,
      rgba(212, 175, 55, 0.5) 100%);
}

.certification-badge {
  color: #d4af37;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}


</style>
