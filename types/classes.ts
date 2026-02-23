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
 * Individual class/course entity
 * EXTENDED for Feature 004 (Class Detail Pages)
 */
export interface Class {
  /** URL-safe identifier (kebab-case) */
  slug: string
  /** Display name of class (30-60 chars) */
  title: string
  /** Brief description for list view (100-150 chars) */
  shortDescription: string
  /** Full description for detail page (500-5000 chars) */
  description: string
  /** Path to class image (640x384px, 16:9 aspect ratio) */
  image: string
  /** Human-readable class duration (e.g., "6 weeks") */
  duration: string
  /** Difficulty level */
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  /** Instructor name */
  instructor: string
  /** Whether class appears on homepage featured section */
  featured: boolean
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
