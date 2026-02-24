import type { HomeData, HeroContent } from '~/types/home'
import homeDataRaw from '~/data/home.json'
import heroDataRaw from '~/data/hero.json'

/**
 * Composable for loading and parsing homepage content
 * Feature: 002-home-page
 * 
 * Provides type-safe access to homepage data from /data/home.json
 * Validates that all required sections are present
 */
export const useHomeContent = () => {
  // Cast JSON import to typed structure
  const homeData = homeDataRaw as HomeData
  const hero = heroDataRaw as HeroContent

  // Validate required sections exist
  if (!homeData.meta || !homeData.logos || !homeData.courses) {
    throw new Error('Missing required homepage sections in home.json')
  }

  // Coaches array: 7 expected (Feature 006 - ทีมโค้ช)
  if (homeData.coaches && homeData.coaches.length === 0) {
    console.warn('No coaches found in home.json')
  }

  // Validate testimonials have valid YouTube IDs (11 characters)
  if (homeData.testimonials) {
    homeData.testimonials.forEach((testimonial, index) => {
      if (testimonial.youtubeId.length !== 11) {
        console.warn(`Testimonial ${index} has invalid YouTube ID length: ${testimonial.youtubeId.length} (expected 11)`)
      }
    })
  }

  return {
    homeData,
    // Convenience getters for individual sections
    meta: homeData.meta,
    hero,
    logos: homeData.logos,
    courses: homeData.courses,
    nextProgram: homeData.nextProgram,
    coaches: homeData.coaches,
    testimonials: homeData.testimonials,
    dualCTA: homeData.dualCTA,
    ebook: homeData.ebook,
    podcast: homeData.podcast,
    contact: homeData.contact,
  }
}
