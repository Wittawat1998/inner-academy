<template>
  <div class="error-page min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Error Icon -->
      <div class="mb-8">
        <div class="text-9xl font-bold text-gray-300">
          {{ statusCode }}
        </div>
      </div>

      <!-- Error Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {{ errorTitle }}
      </h1>

      <!-- Error Message -->
      <p class="text-xl text-gray-600 mb-8">
        {{ errorMessage }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/courses"
          class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Browse All Classes
        </NuxtLink>

        <NuxtLink 
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </NuxtLink>
      </div>

      <!-- Additional Help -->
      <div v-if="statusCode === 404" class="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Looking for a specific class?</h3>
        <p class="text-gray-600">
          We have 13 transformative classes available. Visit our class catalog to explore mindfulness, leadership, emotional intelligence, and more.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message?: string
  }
}>()

const statusCode = computed(() => props.error.statusCode || 500)

const errorTitle = computed(() => {
  switch (statusCode.value) {
    case 404:
      return 'Class Not Found'
    case 500:
      return 'Server Error'
    default:
      return 'Something Went Wrong'
  }
})

const errorMessage = computed(() => {
  if (props.error.message) {
    return props.error.message
  }
  
  switch (statusCode.value) {
    case 404:
      return 'The class you\'re looking for doesn\'t exist or may have been removed. Please check the URL or browse our complete class catalog.'
    case 500:
      return 'We\'re experiencing technical difficulties. Please try again later or contact support if the problem persists.'
    default:
      return 'An unexpected error occurred. Please try refreshing the page or return to the homepage.'
  }
})

// SEO
useHead({
  title: `${statusCode.value} - ${errorTitle.value} | Inner Academy`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
