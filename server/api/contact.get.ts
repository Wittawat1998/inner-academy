/**
 * Contact Info API Route
 * Feature: 007-contact
 *
 * Returns contact.json as a typed API response.
 * Used by ContactBlock component for SSR-safe data fetching.
 */

import contactDataRaw from '../../data/contact.json'

export default defineEventHandler(() => {
  return contactDataRaw
})
