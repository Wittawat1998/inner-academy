/**
 * Social media links for a coach (all optional) - legacy format
 */
export interface SocialLinks {
  facebook?: string
  instagram?: string
  tiktok?: string
  linkedin?: string
}

/**
 * Social media entry - new array format
 */
export interface SocialMediaEntry {
  channel: 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | string
  link: string
}

/**
 * Experience entry - can be a string (legacy) or structured object (new)
 */
export interface ExperienceEntry {
  title: string
  items?: string[]
}

/**
 * Individual coach profile data
 */
export interface Coach {
  slug: string
  id?: string                     // Short coach ID used in coachIds (e.g. "LK", "KD")
  order?: number                  // Display order (from /json/coaches.json)
  // New field names
  name?: string                   // Thai display name / nickname (e.g., ครูลูกแก้ว)
  nameTh?: string                 // Full Thai name
  career?: string                 // Professional title (new)
  // Legacy field names (kept for backward compatibility)
  nickname?: string               // Legacy: Thai display name
  title?: string                  // Legacy: Professional title
  avatar?: string
  bio: string
  expertise: string | string[]    // Can be a string (new) or array (legacy)
  education: string[]
  experience: (string | ExperienceEntry)[]  // Can be string array (legacy) or object array (new)
  philosophy?: string
  images?: string[]                // Gallery image paths
  socialMedia?: SocialMediaEntry[] // New: array format
  socialLinks?: SocialLinks        // Legacy: object format
  proposal?: string                // Optional downloadable proposal PDF path
}

/**
 * Page metadata for coaches page
 */
export interface CoachesMeta {
  title: string         // Page header title (e.g., "Our Coaches")
  intro: string         // Introductory text below title (100-500 chars)
  description: string   // SEO meta description (120-160 chars)
}

/**
 * Complete coaches data structure (root)
 */
export interface CoachesData {
  meta: CoachesMeta     // Page metadata
  coaches: Coach[]      // Array of coach profiles (7 coaches expected)
}
