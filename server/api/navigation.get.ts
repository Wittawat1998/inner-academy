/**
 * Navigation Data API Route
 * Feature: 001-layout-navigation
 *
 * Returns navigation.json as a typed API response.
 * Used by useNavigationData composable for SSR-safe data fetching.
 */

import navigationDataRaw from '../../data/menu.json'

export default defineEventHandler(() => {
  return navigationDataRaw
})
