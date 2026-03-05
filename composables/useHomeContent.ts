import type { HomeData } from '~/types/home'
import homeDataRaw from '~/data/home.json'

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

  // Validate required sections exist
  if (!homeData.sections) {
    throw new Error('Missing required homepage sections in home.json')
  }

  return {
    homeData,
    // Convenience getters for individual sections
    sections: homeData.sections,
    company: homeData.company,
  }
}
