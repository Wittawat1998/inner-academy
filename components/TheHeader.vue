<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="navigationData.logo.href" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          {{ navigationData.logo.text }}
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          <NuxtLink
            v-for="item in sortedMenuItems"
            :key="item.href"
            :to="item.href"
            class="text-gray-700 hover:text-blue-600 transition-colors font-medium focus:outline-2 focus:outline-blue-600 focus:outline-offset-2 rounded-sm"
            active-class="text-blue-600 border-b-2 border-blue-600"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-2 focus:outline-blue-600 focus:outline-offset-2"
          aria-label="Toggle mobile menu"
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
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-gray-200"
          aria-label="Mobile navigation"
        >
          <NuxtLink
            v-for="item in sortedMenuItems"
            :key="item.href"
            :to="item.href"
            @click="closeMenu"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors focus:outline-2 focus:outline-blue-600 focus:bg-gray-50 rounded-sm"
            active-class="bg-blue-50 text-blue-600 font-semibold"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationData } from '~/types/navigation'
import navigationDataRaw from '~/data/navigation.json'

// Cast JSON import to typed structure
const navigationData = navigationDataRaw as NavigationData

// Sort menu items by order field
const sortedMenuItems = computed(() => {
  return [...navigationData.menuItems].sort((a, b) => a.order - b.order)
})

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

// Auto-close menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
/* Active link styling is handled by active-class in NuxtLink */
</style>
