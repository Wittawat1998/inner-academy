<template>
  <section 
    v-if="logos && logos.length > 0" 
    class="trusted-logos-section bg-black py-12 md:py-16 lg:py-20 px-16"
    role="region"
    aria-label="Partner organizations"
  >
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-[50px] md:mb-[50px]">
        <h2 class="text-8xl  font-medium mb-[30px] first-letter: header-fade">
          มากกว่า 30 องค์กรชั้นนำ
        </h2>
        <p class="text-xl text-white">
          ที่ได้รวมเติบโตไปกับเรา
        </p>
      </div>

      <!-- White rounded container for logos -->
      <div class="logos-container border border-goldText bg-white py-6  px-2 ">
        <!-- Hidden overflow wrapper -->
        <div 
          class="marquee-wrapper"
          @mouseenter="isPaused = true"
          @mouseleave="isPaused = false"
        >
          <!-- Scrolling track -->
          <div 
            class="marquee-track"
            :style="{
              animationPlayState: isPaused || prefersReducedMotion ? 'paused' : 'running'
            }"
          >
            <!-- First set of logos -->
            <div class="marquee-group">
              <div
                v-for="logo in logos"
                :key="`first-${logo.nameEn}`"
                class="logo-item"
              >
                <img
                  :src="logo.logo"
                  :alt="logo.alt"
                  :title="logo.nameEn"
                  class="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div class="logo-label mt-2 text-center">
                  <p class="text-xs md:text-sm font-semibold text-gray-800 leading-tight">
                    {{ logo.nameEn }}
                  </p>
                  <p v-if="logo.nameTh" class="text-xs text-gray-600 leading-tight mt-0.5">
                    {{ logo.nameTh }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Duplicate set for seamless loop -->
            <div class="marquee-group">
              <div
                v-for="logo in logos"
                :key="`second-${logo.nameEn}`"
                class="logo-item"
              >
                <img
                  :src="logo.logo"
                  :alt="logo.alt"
                  :title="logo.nameEn"
                  class="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div class="logo-label mt-2 text-center">
                  <p class="text-xs md:text-sm font-semibold text-gray-800 leading-tight">
                    {{ logo.nameEn }}
                  </p>
                  <p v-if="logo.nameTh" class="text-xs text-gray-600 leading-tight mt-0.5">
                    {{ logo.nameTh }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TrustedLogo } from '~/types/home'
import { useMediaQuery } from '@vueuse/core'

/**
 * TrustedLogosSlider Component
 * Feature: 002-home-page - User Story 1
 * 
 * Horizontal auto-scroll slider with hidden overflow wrapper
 * Theme: Dark background, auto-scroll with pause on hover
 * 
 * @requirements
 * - FR-006: Horizontal scrolling container with overflow-x: hidden wrapper
 * - FR-007: Auto-scroll continuously with manual hover override
 * - FR-008: Dark background (bgSecondary)
 */

const { data: logos } = await useFetch<TrustedLogo[]>('/api/logos')

const isPaused = ref(false)
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<style scoped>
.text-gold {
  color: #d4af37;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.logos-container {
  background: linear-gradient(to right, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
  border-radius: 60px;
  box-shadow: inset 0 6px 20px rgba(0, 0, 0, 0.25),
              inset 0 -4px 12px rgba(0, 0, 0, 0.15),
              inset 0 2px 4px rgba(0, 0, 0, 0.1),
              0 4px 12px rgba(0, 0, 0, 0.1);
}

.marquee-wrapper {
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  animation: scroll-horizontal 40s linear infinite;
}

.marquee-group {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
  align-items: center;
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 0.25rem;
}

@media (min-width: 768px) {
  .marquee-group {
    gap: 0.75rem;
  }
  
  .logo-item {
    min-width: 100px;
  }
}

@media (min-width: 1024px) {
  .marquee-group {
    gap: 1rem;
  }
  
  .logo-item {
    min-width: 110px;
  }
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
