// Logo (bilingual)
export interface Logo {
  textThai: string
  textEnglish: string
  href: string
}

// CTA Button
export interface CTAButton {
  [x: string]: any
  text: string
  subtext?: string
  url: string
  external: boolean
}

// Main navigation (Thai labels)
export interface MenuItem {
  title: string  // Thai label
  link: string   // Can be #anchor or /page
  order: number
}

// Footer
export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  section: string
  links: FooterLink[]
}

// Social media
export type SocialPlatform = 
  | 'Facebook' 
  | 'Instagram' 
  | 'Twitter' 
  | 'Line' 
  | 'YouTube' 
  | 'LinkedIn'

export interface SocialLink {
  platform: SocialPlatform
  url: string
  icon: string
}

// Root data structure
export interface NavigationData {
  logo: Logo
  cta: CTAButton
  menu: MenuItem[]
  menuItems: MenuItem[] // Deprecated: use 'menu' instead
  footerLinks: FooterSection[]
  socialLinks: SocialLink[]
  copyright: string
}
