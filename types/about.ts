/**
 * Complete data structure for about page content
 * Loaded from /data/about.json at build time
 */
export interface AboutData {
  /** Mission section: Organization introduction and purpose */
  mission: MissionData
  
  /** Founder section: Background, credentials, and vision */
  founder: FounderData
  
  /** Quote section: Inspirational message (OPTIONAL - conditionally rendered) */
  quote?: QuoteData
  
  /** Gallery section: Images showcasing academy (OPTIONAL - conditionally rendered) */
  images?: GalleryImage[]
}

/**
 * Mission section data
 * Displayed in AboutMission component (hero-style layout, centered)
 */
export interface MissionData {
  /** Mission section title (e.g., "Our Mission") */
  title: string
  
  /** 
   * Detailed mission statement and organization introduction
   * Length: 200-1000 characters
   * Used in: AboutMission component, SEO meta description (first 160 chars)
   */
  description: string
}

/**
 * Founder section data
 * Displayed in AboutFounder component (image + text layout)
 */
export interface FounderData {
  /** Founder's full name (e.g., "Dr. Sarah Johnson") */
  name: string
  
  /** 
   * Path to founder photo
   * Format: WebP with JPEG fallback
   * Size: Optimized for 1920px max width
   * Location: /public/images/about/founder.jpg
   * Loading: Eager (above-the-fold critical content)
   */
  photo: string
  
  /** 
   * Founder biography and credentials
   * Length: 200-800 characters
   * Content: Education, experience, expertise, qualifications
   */
  background: string
  
  /** 
   * Founder's vision statement for the academy
   * Length: 100-400 characters
   * Displayed as: Blockquote (styled with border-left, italic)
   */
  vision: string
}

/**
 * Quote section data (OPTIONAL)
 * Displayed in AboutQuote component (centered, large text, distinct background)
 * Conditional rendering: Only rendered if quote exists in JSON
 */
export interface QuoteData {
  /** 
   * Quote text content
   * Length: 50-300 characters
   * Format: Do NOT include quotation marks in JSON (added in template)
   */
  text: string
  
  /** 
   * Quote attribution (author or source)
   * Examples: "Dr. Sarah Johnson", "Unknown", "Ancient Wisdom"
   */
  author: string
}

/**
 * Gallery image data (OPTIONAL)
 * Displayed in AboutGallery component (responsive grid: 3/2/1 columns)
 * Conditional rendering: Only rendered if images array has length > 0
 */
export interface GalleryImage {
  /** 
   * Path to gallery image
   * Format: WebP with JPEG fallback
   * Size: Optimized for 1920px max width, 256px display height
   * Location: /public/images/about/gallery/
   * Loading: Lazy (below-the-fold, non-critical)
   */
  url: string
  
  /** 
   * Descriptive alt text for accessibility
   * Length: 20-100 characters
   * Content: Describe what the image shows (not generic "image" or "photo")
   * Examples: "Inner Power Academy main hall", "Workshop in session"
   */
  alt: string
}
