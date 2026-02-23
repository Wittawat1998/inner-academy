/**
 * Design System Type Definitions
 * Feature: 008-design-system
 * 
 * TypeScript interfaces for design tokens and component primitives
 */

// ============================================================================
// Design Token Interfaces
// ============================================================================

/**
 * Semantic color tokens that describe role/purpose rather than appearance
 */
export interface ColorTokens {
  // Brand colors
  brandGold: string          // Primary CTA color, badges, accents
  brandGoldHover: string     // Hover state for gold elements
  
  // Background colors
  bgPrimary: string          // Main page background (dark)
  bgSecondary: string        // Section backgrounds, gradient layers
  
  // Surface colors (cards, modals, elevated elements)
  surface: string            // Card backgrounds
  surfaceAlt: string         // Alternate/highlighted surface
  
  // Text colors
  textPrimary: string        // Main body text (light on dark)
  textSecondary: string      // De-emphasized text, labels, metadata
  
  // Border colors
  borderSubtle: string       // Subtle card borders, dividers
  
  // Overlay
  overlayGradient: string    // Gradient overlay for images/videos
}

/**
 * Typography style definition with responsive sizing
 */
export interface TypographyStyle {
  fontSize: Record<string, string>  // Responsive sizes
  lineHeight: string
  fontWeight: string
  letterSpacing?: string
}

/**
 * Typography scale for all text levels
 */
export interface TypographyScale {
  hero: TypographyStyle       // Hero headline
  sectionTitle: TypographyStyle  // Section titles (H2)
  cardTitle: TypographyStyle     // Card titles (H3)
  body: TypographyStyle          // Body text
  label: TypographyStyle         // Small labels, metadata
}

/**
 * Spacing scale for margins, padding, and gaps
 */
export interface SpacingScale {
  sectionY: string      // Vertical section spacing
  containerX: string    // Container horizontal padding
}

/**
 * Border radius scale
 */
export interface BorderRadiusScale {
  card: string       // Card corners
  pill: string       // Pill-shaped buttons (full rounded)
  image: string      // Image corners
  input: string      // Form inputs
}

/**
 * Shadow scale for elevation
 */
export interface ShadowScale {
  card: string          // Resting card shadow
  cardHover: string     // Card hover lifted shadow
  button: string        // Button shadow (optional)
}

/**
 * Gradient utilities
 */
export interface GradientUtilities {
  dark: string           // Page/section background gradient
  gold: string           // Button gradient
  overlay: string        // Image overlay for text readability
  radialDark: string     // Radial background gradient
}

// ============================================================================
// Component Primitive Interfaces
// ============================================================================

/**
 * ButtonPrimary component props
 */
export interface ButtonPrimaryProps {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

/**
 * ButtonSecondary component props
 */
export interface ButtonSecondaryProps {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  variant?: 'outline' | 'ghost'
}

/**
 * Card component props
 */
export interface CardProps {
  variant?: 'default' | 'highlight'
  padding?: 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

/**
 * Badge component props
 */
export interface BadgeProps {
  variant?: 'gold' | 'subtle'
  size?: 'sm' | 'md'
}

/**
 * SectionWrapper component props
 */
export interface SectionWrapperProps {
  id?: string
  spacing?: 'sm' | 'md' | 'lg'
  background?: 'primary' | 'secondary' | 'gradient'
}

/**
 * SliderRow component props
 */
export interface SliderRowProps {
  gap?: 'sm' | 'md' | 'lg'
  scrollBehavior?: 'smooth' | 'auto'
}

/**
 * FormInput component props
 */
export interface FormInputProps {
  type?: 'text' | 'email' | 'tel' | 'password'
  error?: boolean
  disabled?: boolean
  placeholder?: string
}
