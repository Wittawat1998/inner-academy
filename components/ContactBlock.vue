<template>
  <section 
    id="contact"
    v-if="contact" 
    class="contact-block-section pb-20"
    style="background-image: url('/images/bg/home-contact-bg.webp'); background-size: contain; background-position: top; background-repeat: no-repeat;"
    role="region"
    aria-label="Contact information"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Section Heading -->
        <div class=" text-start">
          <h2 class="text-7xl font-medium mb-2 header-fade" >
            {{ contact.heading }}
          </h2>
          <p class="text-base md:text-lg text-gray-300 whitespace-pre-line">
            {{ contact.description }}
          </p>
        </div>

        <!-- Single Column Layout -->
        <div class="space-y-6">
          <!-- Contact Form -->
          <div class="max-w-xl bg-transparent rounded-2xl pt-8 md:pt-10">
            <!-- Success Message -->
            <div 
              v-if="formState.success" 
              class="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200"
            >
              <p class="font-semibold">ขอบคุณที่ติดต่อเรา!</p>
              <p class="text-sm mt-1">เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
            </div>

            <!-- Error Message -->
            <div 
              v-if="formState.error" 
              class="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200"
            >
              <p class="font-semibold">เกิดข้อผิดพลาด</p>
              <p class="text-sm mt-1">{{ formState.error }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-2">
              <!-- Name -->
              <div>
                <!-- <label for="name" class="block text-sm md:text-base text-inputLabel mb-2">
                  ชื่อ - นามสกุล <span class="text-red-400">*</span>
                </label> -->
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                  :class="formState.touched.name && errors.name ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="ระบุชื่อ-นามสกุล"
                  required
                  @blur="handleBlur('name')"
                  @input="clearMessages"
                />
                <p v-if="formState.touched.name && errors.name" class="mt-1 text-sm text-red-400">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Organization -->
              <div>
                <!-- <label for="organization" class="block text-sm md:text-base text-inputLabel mb-2">
                  องค์กร
                </label> -->
                <input
                  id="organization"
                  v-model="formData.organization"
                  type="text"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                  :class="formState.touched.organization && errors.organization ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="บริษัท ออฟฟิศเดิน จำกัด"
                  @blur="handleBlur('organization')"
                  @input="clearMessages"
                />
                <p v-if="formState.touched.organization && errors.organization" class="mt-1 text-sm text-red-400">
                  {{ errors.organization }}
                </p>
              </div>

              <!-- Position -->
              <div>
                <!-- <label for="position" class="block text-sm md:text-base text-inputLabel mb-2">
                  ตำแหน่ง
                </label> -->
                <input
                  id="position"
                  v-model="formData.position"
                  type="text"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                  :class="formState.touched.position && errors.position ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="ตำแหน่ง"
                  @blur="handleBlur('position')"
                  @input="clearMessages"
                />
                <p v-if="formState.touched.position && errors.position" class="mt-1 text-sm text-red-400">
                  {{ errors.position }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <!-- <label for="email" class="block text-sm md:text-base text-inputLabel mb-2">
                  อีเมล <span class="text-red-400">*</span>
                </label> -->
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                  :class="formState.touched.email && errors.email ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="example@email.com"
                  required
                  @blur="handleBlur('email')"
                  @input="clearMessages"
                />
                <p v-if="formState.touched.email && errors.email" class="mt-1 text-sm text-red-400">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone -->
              <div>
                <!-- <label for="phone" class="block text-sm md:text-base text-inputLabel mb-2">
                  เบอร์ติดต่อ
                </label> -->
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                  :class="formState.touched.phone && errors.phone ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="080-xxx-xxxx"
                  @blur="handleBlur('phone')"
                  @input="clearMessages"
                />
                <p v-if="formState.touched.phone && errors.phone" class="mt-1 text-sm text-red-400">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <!-- <label for="message" class="block text-sm md:text-base text-inputLabel mb-2">
                  ข้อความ <span class="text-red-400">*</span>
                </label> -->
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  class="w-full px-4 py-3 bg-inputBg border rounded-lg text-inputText placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent resize-none"
                  :class="formState.touched.message && errors.message ? 'border-red-500' : 'border-inputBorder'"
                  placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  required
                  @blur="handleBlur('message')"
                  @input="clearMessages"
                ></textarea>
                <p v-if="formState.touched.message && errors.message" class="mt-1 text-sm text-red-400">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Turnstile Widget -->
              <div>
                <TurnstileWidget 
                  ref="turnstileWidget"
                  @verified="handleTurnstileVerified"
                  @error="handleTurnstileError"
                />
                <p v-if="errors.turnstile" class="mt-1 text-sm text-red-400 text-center">
                  {{ errors.turnstile }}
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="formState.loading || !formData.turnstileToken"
                class="px-8 py-3 text-black font-semibold text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed bg-ctaGold"
              >
                <span v-if="formState.loading">กำลังส่ง...</span>
                <span v-else>ส่งข้อความ</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-6">
            <!-- Email -->
            <div>
              <p class="text-base text-gray-400 mb-1">อีเมล</p>
              <a 
                :href="`mailto:${contact.email}`" 
                class="text-2xl font-semibold text-white hover:text-brandGold transition-colors"
              >
                {{ contact.email }}
              </a>
            </div>

            <!-- Phone -->
            <div>
              <p class="text-base text-gray-400 mb-1">โทรศัพท์</p>
              <a 
                :href="`tel:${contact.phone.replace(/[^0-9+]/g, '')}`" 
                class="text-2xl font-semibold text-white hover:text-brandGold transition-colors block mb-2"
              >
                {{ contact.phone }}
              </a>
              
              <!-- Call Button -->
              <a
                :href="`tel:${contact.phone.replace(/[^0-9+]/g, '')}`"
                class="inline-flex items-center gap-2 px-4 py-2 text-black font-semibold text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl bg-ctaGold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="none" fill="#000000">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                โทร.ติดต่อตอนนี้
              </a>
            </div>

            <!-- Address -->
            <div>
              <p class="text-sm md:text-base text-gray-400 mb-3">แผนที่</p>
              <div class="text-white space-y-1 text-base md:text-lg mb-6">
                <p class="font-semibold">{{ contact.address.company }}</p>
                <p>{{ contact.address.building }}</p>
                <p>{{ contact.address.floor }}</p>
                <p>{{ contact.address.street }}</p>
                <p>{{ contact.address.district }}</p>
              </div>

              <!-- Map Image/Embed -->
              <div class="relative w-[75%] h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  v-if="contact.mapEmbedUrl"
                  :src="contact.mapEmbedUrl"
                  width="100%"
                  height="100%"
                  class="w-full h-full"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Inner Academy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Contact } from '~/types/home'
import { useContactForm } from '~/composables/useContactForm'

/**
 * ContactBlock Component
 * Feature: 002-home-page - Additional Sections
 * 
 * Contact section with form, info, and map
 * Theme: Dark background, dark form styles, gold accents
 * 
 * @requirements
 * - FR-040: Contact form, info, and map integration
 * - FR-041: Dark-themed form inputs with focus:ring-brandGold
 * - FR-042: Grid layout (form left, info+map right on desktop)
 */

const { data: contact } = await useFetch<Contact>('/api/contact')

const { formData, formState, errors, submitForm, validateField, clearMessages } = useContactForm()
const turnstileWidget = ref<{ reset: () => void } | null>(null)

const handleSubmit = async () => {
  await submitForm()
  
  // Reset Turnstile on error
  if (formState.error && turnstileWidget.value) {
    turnstileWidget.value.reset()
  }
  
  // Auto-hide success message after 5 seconds
  if (formState.success) {
    setTimeout(() => {
      formState.success = false
    }, 5000)
  }
}

const handleTurnstileVerified = (token: string) => {
  formData.turnstileToken = token
  errors.turnstile = ''
}

const handleTurnstileError = () => {
  formData.turnstileToken = ''
  errors.turnstile = 'Please complete the verification'
}

const handleBlur = (field: keyof typeof formData) => {
  formState.touched[field as keyof typeof formState.touched] = true
  validateField(field)
}
</script>

<style scoped>
/* No custom styles needed - using Tailwind utilities */
</style>
