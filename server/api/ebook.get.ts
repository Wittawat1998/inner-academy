/**
 * Ebook API Route
 * Feature: 002-home-page
 *
 * Returns ebook.json as a typed API response.
 * Used by EbookOffer component for SSR-safe data fetching.
 */

import ebookDataRaw from '../../data/ebook.json'

export default defineEventHandler(() => {
  return ebookDataRaw
})
