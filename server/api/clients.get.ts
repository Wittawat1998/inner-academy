/**
 * Logos API Route
 * Feature: 002-home-page
 *
 * Returns logos.json as a typed API response.
 * Used by TrustedLogosSlider component for SSR-safe data fetching.
 */

import logosDataRaw from '../../data/clients.json'

export default defineEventHandler(() => {
  return logosDataRaw.clients
})
