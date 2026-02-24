import type { NavigationData } from '~/types/navigation'

/**
 * Composable for fetching navigation data via API
 * Feature: 001-layout-navigation
 *
 * Fetches navigation data from /api/navigation (server/api/navigation.get.ts).
 * Uses useFetch for SSR-safe data fetching with automatic caching.
 */
export const useNavigationData = () => {
  const { data, error, status } = useFetch<NavigationData>('/api/navigation', {
    key: 'navigation',
    default: () => null,
  })

  const navigationData = computed(() => data.value ?? null)
  const isLoading = computed(() => status.value === 'pending')

  return {
    navigationData,
    isLoading,
    error,
  }
}
