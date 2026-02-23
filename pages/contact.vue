<script setup lang="ts">
/**
 * Contact Page
 * Feature: 007-contact
 * 
 * Main contact page with form submission
 */

// SEO meta tags
useHead({
  title: 'Contact Us - Inner Academy',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Inner Academy. Send us your inquiries about our mindfulness and leadership courses, or ask any questions you may have.'
    },
    {
      property: 'og:title',
      content: 'Contact Us - Inner Academy'
    },
    {
      property: 'og:description',
      content: 'Get in touch with Inner Academy. Send us your inquiries about our courses and programs.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});
</script>

<template>
  <main class="contact-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div class="container mx-auto px-4 max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Have questions about our courses or programs? We're here to help. 
          Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>
    </section>
    
    <!-- Contact Content Section -->
    <section class="contact-content py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Responsive Grid: Form + Contact Info -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Left Column: Contact Form -->
          <div class="contact-form-column">
            <div class="bg-gray-50 rounded-lg p-6 md:p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          <!-- Right Column: Contact Info, Map, Social Links -->
          <div class="contact-info-column space-y-6">
            <!-- Contact Information -->
            <ContactInfo />
            
            <!-- Map -->
            <ContactMap />
            
            <!-- Social Links -->
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
}
</style>
