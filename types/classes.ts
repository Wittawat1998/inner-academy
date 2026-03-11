/**
 * Type Definitions for Class List Page
 * 
 * Feature: 003-class-list
 * 
 * Defines TypeScript interfaces for class catalog data structure.
 * Shared between class list page and homepage featured classes.
 */

/**
 * Page metadata for class list page
 */
export interface ClassesMeta {
  /** Page title for <title> tag and header */
  title: string
  /** SEO meta description (120-160 chars) */
  description: string
  /** Introductory paragraph for page header (150-300 chars) */
  intro: string
}

/**
 * A single section within a class description
 */
export interface ClassDescriptionSection {
  /** Section heading (empty string = no heading) */
  title: string
  /** Heading color config — 'gold' uses goldText, default is textPrimary */
  titleColor?: 'gold'
  /** Render mode — 'text' (default) renders a paragraph, 'bullet' renders an item list */
  type?: 'text' | 'bullet'
  /** Body text for type 'text', or intro line for type 'bullet' */
  description: string
  /** Bullet items used when type is 'bullet' */
  items?: string[]
}

/**
 * Individual class/course entity
 * EXTENDED for Feature 004 (Class Detail Pages)
 */
export interface Class {
  /** Class ID (e.g. "KM", "EM", "BH") */
  id?: string
  /** URL-safe identifier (kebab-case) */
  slug: string
  /** Display name */
  title: string
  /** Short description for list view */
  nameTh?: string
  /** Description sections with optional title headers */
  description: ClassDescriptionSection[]
  /** Hero banner image (right column) */
  logo?: string
  /** Duration string e.g. "8 ชั่วโมง" */
  duration?: string
  /** Category e.g. "การสื่อสาร" */
  category?: string
  /** Who is this class for */
  targetAudience?: string[]
  /** Current price (THB) */
  price?: number
  /** Original price before discount */
  originalPrice?: number
  /** Price note text */
  priceNote?: string
  /** Coach IDs referencing coaches.json id field */
  coachIds?: string[]
  /** Gallery images for the carousel */
  images?: string[]
  /** Downloadable files */
  downloads?: { proposal?: string }
  /** Next round / enroll URL */
  ctaNextRoundUrl?: string
  /** Difficulty level */
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
  /** Single instructor name (legacy) */
  instructor?: string
  /** Sort order */
  order?: number
  /** Whether class appears on homepage featured section */
  featured?: boolean
  /** Optional curriculum topics/modules */
  curriculum?: string[]
  /** Optional learning outcomes/objectives */
  learningOutcomes?: string[]
}

/**
 * Root data structure for class list page
 */
export interface ClassesData {
  /** Page-level metadata */
  meta: ClassesMeta
  /** Array of all class objects */
  classes: Class[]
}

/**
 * Component prop types for Feature 004 (Class Detail Pages)
 */

export interface ClassHeroProps {
  title: string
  image: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

export interface ClassMetadataProps {
  duration: string
  level: string
  instructor: string
}

export interface CurriculumListProps {
  curriculum: string[]
}

export interface OutcomesListProps {
  outcomes: string[]
}
