/**
 * Social media links for a coach (all optional)
 */
export interface SocialLinks {
  facebook?: string     // Facebook profile URL (e.g., "https://facebook.com/coach")
  instagram?: string    // Instagram profile URL (e.g., "https://instagram.com/coach")
  tiktok?: string       // TikTok profile URL (e.g., "https://tiktok.com/@coach")
  linkedin?: string     // LinkedIn profile URL (e.g., "https://linkedin.com/in/coach")
}

/**
 * Individual coach profile data
 */
export interface Coach {
  slug: string                  // URL-safe identifier for dynamic routing (e.g., "dr-ananya-sharma")
  nickname?: string             // Thai display name (e.g., ครูหม่อน, ดร.เกด)
  name: string                  // Full name (3-50 chars)
  title: string                 // Professional title (5-100 chars)
  image?: string                // Photo URL path (e.g., "/images/coaches/coach1.webp") - aliased from 'photo' for consistency
  photo?: string                // Photo URL path (backwards compatibility)
  bio: string                   // Short biography (50-300 chars)
  expertise: string[]           // Areas of expertise (3-8 items, 5-50 chars each)
  education: string[]           // Educational qualifications (1-5 items, 10-200 chars each)
  experience: string[]          // Professional experience (1-8 items, 10-200 chars each)
  philosophy?: string           // Optional teaching philosophy for detail pages
  socialLinks?: SocialLinks     // Optional social media links
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
