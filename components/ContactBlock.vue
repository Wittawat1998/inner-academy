<template>
  <section 
    id="contact"
    v-if="company" 
    class="contact-block-section pb-10 md:pb-16 lg:pb-20"
    :style="`background-image: url('${sections?.contact?.bg ?? '/images/bg/home-contact-bg.webp'}'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;`"
    role="region"
    aria-label="Contact information"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-[1280px] mx-auto">
        <!-- Section Heading -->
        <div class=" text-start">
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold mb-2 header-fade" >
            {{ sections?.contact?.title }}
          </h2>
          <p class="text-lg text-gray-300 whitespace-pre-line leading-relaxed">
            {{ sections?.contact?.subtitle }}
          </p>
        </div>

        <!-- Single Column Layout -->
        <div class="space-y-6">
          <!-- Contact Form -->
          <div class="max-w-xl bg-transparent rounded-2xl pt-10">
            <!-- Success Message -->
            <div 
              v-if="formState.success" 
              class="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200"
            >
              <p class="text-sm mt-1">{{ sections?.contact?.mailSent ?? 'ขอบคุณที่ให้ความสนใจติดต่อเข้ามา ทางทีม IPA จะติดต่อกลับหาท่านโดยเร็วที่สุด' }}</p>
            </div>

            <!-- Error Message -->
            <div 
              v-if="formState.error" 
              class="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200"
            >
              <p class="font-semibold">เกิดข้อผิดพลาด</p>
              <p class="text-sm mt-1">{{ formState.error }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-3">
              <!-- Name -->
              <div>
                <div class="relative">
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                    :class="formState.touched.name && errors.name ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="ระบุชื่อ-นามสกุล"
                    required
                    @blur="handleBlur('name')"
                    @input="clearMessages"
                  />
                  <label
                    for="name"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs"
                  >ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
                </div>
                <p v-if="formState.touched.name && errors.name" class="mt-1 text-sm text-red-400">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Organization -->
              <div>
                <div class="relative">
                  <input
                    id="organization"
                    v-model="formData.organization"
                    type="text"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                    :class="formState.touched.organization && errors.organization ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="บริษัท / องค์กร"
                    @blur="handleBlur('organization')"
                    @input="clearMessages"
                  />
                  <label
                    for="organization"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs"
                  >บริษัท / องค์กร</label>
                </div>
                <p v-if="formState.touched.organization && errors.organization" class="mt-1 text-sm text-red-400">
                  {{ errors.organization }}
                </p>
              </div>

              <!-- Position -->
              <div>
                <div class="relative">
                  <input
                    id="position"
                    v-model="formData.position"
                    type="text"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                    :class="formState.touched.position && errors.position ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="ตำแหน่ง"
                    @blur="handleBlur('position')"
                    @input="clearMessages"
                  />
                  <label
                    for="position"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs"
                  >ตำแหน่ง</label>
                </div>
                <p v-if="formState.touched.position && errors.position" class="mt-1 text-sm text-red-400">
                  {{ errors.position }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <div class="relative">
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                    :class="formState.touched.email && errors.email ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="อีเมล"
                    required
                    @blur="handleBlur('email')"
                    @input="clearMessages"
                  />
                  <label
                    for="email"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs"
                  >อีเมล <span class="text-red-400">*</span></label>
                </div>
                <p v-if="formState.touched.email && errors.email" class="mt-1 text-sm text-red-400">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone -->
              <div>
                <div class="relative">
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent"
                    :class="formState.touched.phone && errors.phone ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="เบอร์ติดต่อ"
                    @blur="handleBlur('phone')"
                    @input="clearMessages"
                  />
                  <label
                    for="phone"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs"
                  >เบอร์ติดต่อ</label>
                </div>
                <p v-if="formState.touched.phone && errors.phone" class="mt-1 text-sm text-red-400">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <div class="relative">
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    class="peer w-full px-4 pt-6 pb-2 bg-inputBg border rounded-lg text-inputText placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-transparent resize-none"
                    :class="formState.touched.message && errors.message ? 'border-red-500' : 'border-inputBorder'"
                    placeholder="ข้อความ"
                    required
                    @blur="handleBlur('message')"
                    @input="clearMessages"
                  ></textarea>
                  <label
                    for="message"
                    class="absolute left-4 top-1.5 text-xs text-inputLabel transition-all duration-200
                           peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                           peer-focus:top-1.5 peer-focus:text-xs"
                  >ข้อความ <span class="text-red-400">*</span></label>
                </div>
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
                <span v-else>{{ sections?.contact?.submit ?? 'ส่งข้อความ' }}</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-6">
            <!-- Email -->
            <div>
              <p class="text-base text-gray-400 mb-1">{{ sections?.contact?.email ?? 'อีเมล' }}</p>
              <a 
                :href="`mailto:${company.email}`" 
                class="text-2xl font-semibold text-white hover:text-brandGold transition-colors"
              >
                {{ company.email }}
              </a>
            </div>

            <!-- Phone -->
            <div>
              <p class="text-base text-gray-400 mb-1">{{ sections?.contact?.tel ?? 'โทรศัพท์' }}</p>
              <a 
                :href="`tel:${company.tel.replace(/[^0-9+]/g, '')}`" 
                class="text-2xl font-semibold text-white hover:text-brandGold transition-colors block mb-2"
              >
                {{ company.tel }}
              </a>
              
              <!-- Call Button -->
              <a
                :href="`tel:${company.tel.replace(/[^0-9+]/g, '')}`"
                class="inline-flex items-center gap-2 px-4 py-2 text-black font-semibold text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl bg-ctaGold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" stroke="none" fill="#000000">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ sections?.contact?.callNow ?? 'โทร.ติดต่อตอนนี้' }}
              </a>
            </div>

            <!-- Address -->
            <div>
              <p class="text-base text-gray-400 mb-3">{{ sections?.contact?.address ?? 'แผนที่' }}</p>
              <div class="text-white space-y-1 text-lg mb-6">
                <p class="font-semibold">{{ company.addressStructured?.company }}</p>
                <p>{{ company.addressStructured?.building }}</p>
                <p>{{ company.addressStructured?.floor }}</p>
                <p>{{ company.addressStructured?.street }}</p>
                <p>{{ company.addressStructured?.district }}</p>
              </div>

              <!-- Map Image/Embed -->
              <div class="relative w-[75%] h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  v-if="company.mapEmbedUrl"
                  :src="company.mapEmbedUrl"
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

const { sections, company } = useHomeContent()

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
