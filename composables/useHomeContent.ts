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
  if (!homeData.meta) {
    throw new Error('Missing required homepage sections in home.json')
  }

  return {
    homeData,
    // Convenience getters for individual sections
    meta: homeData.meta,
    hero,
    nextProgram: homeData.nextProgram,
  }
}
