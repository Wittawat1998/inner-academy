// TypeScript interfaces for homepage data structures (Feature 002-home-page)
// Updated: 2026-02-21 - 10-section homepage with dark+gold theme

// Meta tags for SEO
export interface MetaData {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}

// Hero section banner content
export interface HeroContent {
  titleLine1: string
  titleLine2: string
  subtitle: string
  description: string
  badgeIcon?: string
  bgHero?: string
}

// Trusted partner logos for horizontal slider
export interface TrustedLogo {
  order: number
  nameEn?: string
  nameTh?: string
  logo: string
  alt?: string
}

// Course preview for row-based list
export interface Course {
  [x: string]: any
  title: string
  description: string
  image?: string
  slug: string
  instructors?: Array<{
    name: string
    image: string
  }>
  featured?: boolean  // For highlighting (e.g., gold background)
}

// Next program promotional banner
export interface NextProgram {
  title: string
  date: string
  description: string
  ctaText?: string
  ctaUrl?: string
}

// Social media links for coaches
export interface SocialLinks {
  facebook?: string
  instagram?: string
  tiktok?: string
  linkedin?: string
  twitter?: string
}

// Coach profile for 7-item grid
export interface Coach {
  slug?: string
  nickname?: string        // Thai display name (e.g. ดร.เกด)
  name: string             // Full legal name
  title?: string
  image?: string
  bio?: string
  socialLinks?: SocialLinks
}

// Student testimonial for 3-item carousel
export interface Testimonial {
  studentName: string
  studentTitle?: string
  quoteIntro?: string
  quoteMid?: string
  quoteLarge?: string
  keyMessage?: string
  youtubeId: string
  thumbnail?: string
}

// Dual CTA section with two gold pill buttons
export interface DualCTA {
  heading: string
  description: string
  descriptionLine2?: string
  backgroundImage?: string
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText: string
  secondaryButtonUrl: string
}

// E-book promotional offer
export interface Ebook {
  headingLine1?: string
  headingLine2Before?: string
  headingLine2Highlight?: string
  headingLine2After?: string
  subheading?: string
  description: string
  backgroundImage?: string
  image: string
  ctaText: string
  ctaUrl: string
  // legacy
  title?: string
}

// Podcast episode
export interface Episode {
  title: string
  url: string
}

// Podcast/knowledge content block (optional)
export interface Podcast {
  title: string
  description: string
  episodes: Episode[]
  image?: string // Podcast background image
  titleLine1?: string
  titleLine2?: string
}


// Contact information and address
export interface Contact {
  heading: string
  description: string
  phone: string
  email: string
  address: {
    company: string
    building: string
    floor: string
    street: string
    district: string
  }
  mapImage?: string
  mapEmbedUrl?: string
  socialLinks?: Array<{
    platform: string
    url: string
  }>
}

// Type aliases for component compatibility
export type FeaturedClass = Course
export type Client = TrustedLogo
export type Review = Testimonial
export interface AssessmentCTA {
  heading: string
  description: string
  buttonText: string
  buttonUrl: string
}

// Root data structure - 10 mandatory sections
export interface HomeData {
  meta: MetaData
  logos?: TrustedLogo[]  // Moved to /api/logos
  courses?: Course[]
  nextProgram: NextProgram
  coaches?: Coach[]  // Moved to data/home-coaches.json + /api/home-coaches
  testimonials?: Testimonial[]  // Moved to data/testimonials.json + /api/testimonials
  dualCTA?: DualCTA  // Moved to data/dualCTA.json + /api/dualcta
  contact?: Contact  // Moved to data/contact.json + /api/contact
}
