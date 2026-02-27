<template>
  <section class="hero-section relative overflow-hidden">
    <div class="">
      <div class="w-full h-[1000px] relative ">
        <!-- Hero Banner -->
        <img :src="hero.bgHero" alt="Inner Power Academy" class=" w-full" />
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
          <h2 class="hero-subtitle text-white text-xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4">
            {{ hero.subtitle }}
          </h2>

          <!-- Description -->
          <p class="hero-description text-white text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-4">
            {{ hero.description }}
          </p>

          <!-- Certification Badge -->
          <img :src="hero.badgeIcon" alt="Certified Badge" class="w-18 h-18 md:w-22 md:h-22 lg:w-26 lg:h-26" />

        </div>
      </div>
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

.hero-title {
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;
  line-height: 1.2;
  background: linear-gradient(135deg, #f4e5c3 0%, #d4af37 50%, #c9a961 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .team-member {
    width: 3rem;
  }
}
</style>
