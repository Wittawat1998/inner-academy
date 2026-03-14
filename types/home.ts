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
  bgHeroMobile?: string
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
  order: number
  classId?: string
  cover?: string
  link: string
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

// Company information
export interface CompanyData {
  nameEn: string
  email: string
  tel: string
  address: string
  addressStructured?: {
    company: string
    building: string
    floor: string
    street: string
    district: string
  }
  mapEmbedUrl?: string
  maps: Array<{ channel: string; link: string }>
  socialMedia: Array<{ channel: string; link: string }>
}

// Section labels/text per section
export interface SectionTexts {
  hero?: { title: string; subtitle: string; description: string; bgHero?: string; bgHeroMobile?: string; badgeIcon?: string }
  clients?: { title: string; subtitle: string }
  classes?: { title: string; providedBy: string; learnMore: string }
  classPrograms?: { title: string; subtitle: string; image: string; bg?: string }
  coaches?: { title: string; proficiency?: string; education?: string; experience?: string; downloads?: string; nextClass?: string }
  reviews?: { title: string; submit: string }
  assessments?: {
    title: string
    subtitle: string
    bg?: string
    items: Array<{ submit: string; link: string }>
  }
  knowledge?: { title: string }
  ebook?: {
    headingLine1?: string
    headingLine2Before?: string
    headingLine2Highlight?: string
    headingLine2After?: string
    subheading?: string
    description?: string
    bg?: string
    image: string
    submit: string
    link: string
    title?: string
    subtitle?: string
  }
  podcast?: { title?: string; titleLine1?: string; titleLine2?: string; description?: string; subtitle?: string; bg?: string; submit: string; link: string }
  contact?: {
    title: string
    subtitle: string
    bg?: string
    form: Array<{ name: string; type: string; required?: boolean; label: string }>
    submit: string
    mailSubmitTo: string
    mailSubject: string
    mailSent: string
    email: string
    tel: string
    callNow: string
    address: string
  }
}

// Root data structure
export interface HomeData {
  title: string
  description: string
  keywords?: string
  company: CompanyData
  copyright: string
  sections: SectionTexts
  privacyPolicies: { title: string; link: string }
  termsAndConditions: { title: string; link: string }
}
