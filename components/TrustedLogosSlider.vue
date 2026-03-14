<template>
  <section 
    v-if="clients && clients.length > 0" 
    class="trusted-clients-section py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-16"
    role="region"
    aria-label="Partner organizations"
  >
    <div class="w-full px-4">
      <!-- Header -->
      <div class="text-center mb-[50px]">
        <h2 class="text-3xl md:text-6xl lg:text-6xl xl:text-8xl font-semibold mb-[15px] md:mb-[30px]  header-fade">
          {{ sections?.clients?.title ?? 'มากกว่า 30 องค์กรชั้นนำ' }}
        </h2>
        <p class="text-base md:text-xl text-white leading-relaxed">
          {{ sections?.clients?.subtitle ?? 'ที่ได้รวมเติบโตไปกับเรา' }}
        </p>
      </div>

      <!-- White rounded container for clients -->
      <div class="clients-container border border-goldText bg-white py-6  px-2 ">
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
            <!-- First set of clients -->
            <div class="marquee-group">
              <div
                v-for="logo in clients"
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
                  <p class="text-sm font-semibold text-gray-800 leading-tight">
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
                v-for="logo in clients"
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
                  <p class="text-sm font-semibold text-gray-800 leading-tight">
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

const { sections } = useHomeContent()
const { data: clients } = await useFetch<TrustedLogo[]>('/api/clients')

const isPaused = ref(false)
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<style scoped>

.clients-container {
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
  gap: 2rem;
  flex-shrink: 0;
  align-items: center;
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 120px;
  flex-shrink: 0;
  padding: 0.25rem;
}

.logo-label {
  min-height: 2.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
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
