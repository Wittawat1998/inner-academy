// Logo
export interface Logo {
  text: string
  href: string
}

// Main navigation
export interface MenuItem {
  label: string
  href: string
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
  menuItems: MenuItem[]
  footerLinks: FooterSection[]
  socialLinks: SocialLink[]
  copyright: string
}
