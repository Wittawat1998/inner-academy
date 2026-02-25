/**
 * Podcast API Route
 * Feature: 002-home-page
 *
 * Returns podcast.json as a typed API response.
 * Used by PodcastBlock component for SSR-safe data fetching.
 */

import podcastDataRaw from '../../data/podcast.json'

export default defineEventHandler(() => {
  return podcastDataRaw
})
