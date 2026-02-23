<template>
  <section class="hero-section relative overflow-hidden py-8 md:py-12 lg:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Banner -->
        <div class="hero-banner rounded-lg md:rounded-xl shadow-2xl overflow-hidden">
          <div class="banner-content relative z-10 text-center py-12 md:py-16 lg:py-20 px-6 md:px-12">
            <!-- Title -->
            <h1 class="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
              INNER POWER<br>ACADEMY
            </h1>
            
            <!-- Team Silhouettes -->
            <div class="team-container mb-8 md:mb-12 flex justify-center items-end gap-2 md:gap-3 lg:gap-4 max-w-4xl mx-auto">
              <div class="team-member h-32 md:h-40 lg:h-48 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member h-36 md:h-44 lg:h-52 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member h-32 md:h-40 lg:h-48 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member h-40 md:h-48 lg:h-56 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member team-center h-44 md:h-52 lg:h-60 w-20 md:w-24 lg:w-28"></div>
              <div class="team-member h-40 md:h-48 lg:h-56 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member h-36 md:h-44 lg:h-52 w-16 md:w-20 lg:w-24"></div>
              <div class="team-member h-32 md:h-40 lg:h-48 w-16 md:w-20 lg:w-24"></div>
            </div>
            
            <!-- Thai Subtitle -->
            <h2 class="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium mb-3 md:mb-4">
              ปลดปล่อยศักยภาพให้กับคุณ
            </h2>
            
            <!-- Description -->
            <p class="hero-description text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8">
              ด้วยหลักสูตรอิสระคุณภาพ รับรองคุณภาพโดย คุรูเจ้า รสลคนธ์ ทองบาทุง
            </p>
            
            <!-- Certification Badge -->
            <div class="certification-badge inline-flex items-center justify-center">
              <div class="badge-content">
                <svg class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
                  <circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="1.5" fill="none"/>
                  <path d="M50 20 L55 35 L70 35 L58 45 L63 60 L50 50 L37 60 L42 45 L30 35 L45 35 Z" fill="currentColor"/>
                  <text x="50" y="75" text-anchor="middle" font-size="10" fill="currentColor" font-weight="600">CERTIFIED</text>
                </svg>
              </div>
            </div>
          </div>
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
</script>

<style scoped>
.hero-banner {
  background: linear-gradient(135deg, 
    #1e3a5f 0%,
    #2c5282 25%,
    #1a365d 50%,
    #2c5282 75%,
    #1e3a5f 100%
  );
  position: relative;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%);
  pointer-events: none;
}

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
  color: #f4e5c3;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-description {
  color: #e5e7eb;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.team-container {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.team-member {
  background: linear-gradient(to top, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.5) 100%
  );
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
    rgba(212, 175, 55, 0.5) 100%
  );
}

.certification-badge {
  color: #d4af37;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
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
