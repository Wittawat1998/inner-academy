/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    // Include data files so dynamic class names (e.g. from JSON) are not purged
    "./data/**/*.json",
  ],
  safelist: [
    'text-goldText',
    'w-[calc(50%-12px)]',
    'w-[calc(33.333%-16px)]',
  ],
  theme: {
    extend: {
      colors: {
          // ================= Custom Semantic Colors =================
          // Blue text
          blueText: '#637da0',
          // Blue border
          blueBorder: '#3f495f',
          // Gold text (same as CTA gold button)
          goldText: '#f7c66d',
          // Dark gold text
          goldTextDark: '#a1844f',
          // Input field border
          inputBorder: '#637da0',
          // Input label
          inputLabel: '#637da0',
          // Input field background
          inputBg: '#121d33',
          // Input text
          inputText: '#ffffff',
          // Price strikethrough text
          priceStrike: '#c1cfe3',
          // Font on gold button
          goldBtnText: '#000000',
          // General font color
          fontDefault: '#ffffff',
        // Legacy primary color scale (preserved for backwards compatibility)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // ============================================================================
        // Design System: Semantic Color Tokens (Feature 008-design-system)
        // ============================================================================
        // These tokens describe role/purpose rather than appearance.
        // Update these values to change the entire site's color scheme.
        // See: specs/008-design-system/data-model.md for full documentation
        
        // Brand colors
        brandGold: '#D4AF37',        // Primary CTA buttons, badges, accents
        brandGoldHover: '#B8941F',   // Hover state for gold elements
        
        // Feature 001: Layout Navigation semantic tokens
        gold: {
          DEFAULT: '#D4AF37',      // Premium gold (FR-017)
          light: '#F4E4B0',        // Light gold
          dark: '#B8941E',         // Dark gold
        },

        // CTA Gold (new shade for CTA buttons)
        ctaGold: '#f7c66d',
        
        // Background colors
        bgPrimary: '#0F172A',        // Main page background (dark navy) - FR-017
        bgSecondary: '#1E293B',      // Section backgrounds, gradient layers - FR-017
        
        // Surface colors (cards, modals, elevated elements)
        surface: '#334155',          // Card backgrounds - FR-017
        surfaceAlt: '#1E293B',       // Alternate/highlighted surface
        
        // Text colors
        textPrimary: '#F8FAFC',      // Main body text (light on dark) - FR-017
        textSecondary: '#CBD5E1',    // De-emphasized text, labels, metadata - FR-017
        textMuted: '#94A3B8',        // Muted text
        
        // Border colors
        borderSubtle: '#334155',     // Subtle card borders, dividers
      },
      
      // ============================================================================
      // Design System: Gradient Utilities (Feature 008-design-system)
      // ============================================================================
      backgroundImage: {
        // Dark gradient for page/section backgrounds
        'gradient-dark': 'linear-gradient(to bottom, #0F172A 0%, #1E293B 100%)',
        
        // Header background gradient
        'gradient-header': 'linear-gradient(to top, #121d33 0%, #000000 75%)',
        
        // Gold gradient for primary CTA buttons
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
        
        // Overlay gradient for hero images (ensures text readability)
        'gradient-overlay': 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
        
        // Radial gradient for premium backgrounds
        'gradient-radial-dark': 'radial-gradient(circle at center, #1E293B 0%, #0F172A 100%)',
      },
      
      // ============================================================================
      // Design System: Shadow Scale (Feature 008-design-system)
      // ============================================================================
      boxShadow: {
        // Card shadows for elevation
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        cardHover: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        
        // Button shadow (optional)
        button: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      
      // ============================================================================
      // Design System: Typography (Font Families)
      // ============================================================================
      fontFamily: {
        // English: Montserrat (headings + bold)
        en: ['Montserrat'],
        
        // Thai: Prompt (headings + medium)
        th: ['Prompt'],
        
        // Body font: Prompt-first (Thai-primary site), Montserrat covers Latin chars
        sans: ['Prompt', 'Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system'],
        
        // Heading font: Montserrat-first Bold (EN), Prompt covers Thai glyphs
        heading: ['Montserrat', 'Prompt'],
      },

      // Max screen width cap: 1920px
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
