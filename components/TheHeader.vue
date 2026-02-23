<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-sm"
    :class="isScrolled ? 'shadow-lg' : ''"
  >
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo (Left) -->
        <NuxtLink 
          :to="navigationData.logo.href" 
          class="logo-link flex items-center gap-2"
          aria-label="Inner Power Academy homepage"
        >
          <!-- Logo Image/Icon -->
          <div class="w-12 h-12 flex-shrink-0">
            <svg viewBox="0 0 50 50" class="w-full h-full text-brandGold" fill="currentColor">
              <circle cx="25" cy="25" r="23" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="25" cy="15" r="2"/>
              <circle cx="25" cy="25" r="2"/>
              <circle cx="25" cy="35" r="2"/>
              <circle cx="15" cy="20" r="2"/>
              <circle cx="35" cy="20" r="2"/>
              <circle cx="15" cy="30" r="2"/>
              <circle cx="35" cy="30" r="2"/>
            </svg>
          </div>
          <!-- Logo Text -->
          <div class="flex flex-col leading-tight">
            <span class="text-base md:text-lg font-bold text-brandGold tracking-wide font-en">
              {{ navigationData.logo.textThai }}
            </span>
            <span class="text-xs md:text-sm text-brandGold/80 tracking-wider font-en uppercase">
              {{ navigationData.logo.textEnglish }}
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation (Center) -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main navigation">
          <NuxtLink
            v-for="item in sortedMenu"
            :key="item.link"
            :to="item.link.startsWith('#') ? `/${item.link}` : item.link"
            @click="handleMenuClick(item.link, $event)"
            class="text-white hover:text-brandGold transition-colors font-medium font-th text-base"
            :active-class="item.link.startsWith('/') ? 'text-brandGold' : ''"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>

        <!-- Desktop CTA Button (Right) -->
        <a
          :href="navigationData.cta.url"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden lg:inline-flex items-center px-6 py-3 text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 font-th text-sm"
          style="background-color: #E8CD91;"
        >
          {{ navigationData.cta.text }}
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden pb-4 border-t border-white/10 bg-black/95"
        >
          <!-- Mobile CTA (First Item) -->
          <div class="px-4 pt-4 pb-2">
            <a
              :href="navigationData.cta.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-6 py-3 text-black font-bold rounded-full shadow-lg transition-all duration-300 font-th"
              style="background-color: #E8CD91;"
              @click="closeMenu"
            >
              {{ navigationData.cta.text }}
            </a>
          </div>

          <!-- Mobile Menu Items -->
          <nav class="px-4 pt-2" aria-label="Mobile navigation">
            <NuxtLink
              v-for="item in sortedMenu"
              :key="item.link"
              :to="item.link.startsWith('#') ? `/${item.link}` : item.link"
              @click="handleMenuClick(item.link, $event), closeMenu()"
              class="block px-4 py-3 text-white hover:bg-white/10 hover:text-brandGold transition-colors rounded-md font-th"
              :active-class="item.link.startsWith('/') ? 'bg-white/10 text-brandGold font-semibold' : ''"
            >
              {{ item.title }}
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationData } from '~/types/navigation'
import navigationDataRaw from '~/data/navigation.json'

// Cast JSON import to typed structure
const navigationData = navigationDataRaw as NavigationData

// Use 'menu' field (preferred) or fall back to 'menuItems' (deprecated)
const menuSource = navigationData.menu && navigationData.menu.length > 0 
  ? navigationData.menu 
  : navigationData.menuItems

// Sort menu items by order field
const sortedMenu = computed(() => {
  return [...menuSource].sort((a, b) => a.order - b.order)
})

// Sticky header scroll state
const { isScrolled } = useScrollHeader(50)

// Anchor navigation with offset
const { handleAnchorClick } = useAnchorScroll(80)

// Mobile menu state (persists across navigation)
const mobileMenuOpen = useState<boolean>('mobile-menu-open', () => false)

// Toggle menu
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close menu
const closeMenu = () => {
  mobileMenuOpen.value = false
}

// Handle menu click with anchor support
const handleMenuClick = (link: string, event: Event) => {
  if (link.startsWith('#')) {
    event.preventDefault()
    handleAnchorClick(link)
  }
  // Page links handled by NuxtLink automatically
}

// Auto-close menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
/* Logo hover effect */
.logo-link {
  transition: opacity 0.2s;
}

.logo-link:hover {
  opacity: 0.8;
}
</style>
