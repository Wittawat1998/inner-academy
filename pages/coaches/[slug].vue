<template>
  <main class="coach-detail-page bg-bgPrimary min-h-screen">

    <!-- ─── Hero ────────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden py-16 md:py-24">
      <div class="max-w-[1280px] mx-auto px-8 lg:px-16">
        <div class="flex flex-col lg:flex-row items-center gap-12">

          <!-- Left: name, title, social -->
          <div class="flex-1 min-w-0 z-10">
            <h1 class="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[1.05] text-brandGold mb-4">
              {{ coach?.name || coach?.nickname }}
            </h1>
            <p class="text-[clamp(1.2rem,2.5vw,1.8rem)] text-brandGold font-medium mb-1">
              {{ coach?.nameTh }}
            </p>
            <p class="text-[clamp(1rem,1.8vw,1.3rem)] text-textSecondary italic mb-8">
              {{ coach?.career || coach?.title }}
            </p>

            <!-- Social icons (new array format) -->
            <div v-if="coach?.socialMedia?.length" class="flex gap-3">
              <a
                v-for="social in coach.socialMedia"
                :key="social.channel"
                :href="social.link"
                target="_blank" rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <IconFacebook v-if="social.channel === 'facebook'" class="w-5 h-5 text-white" />
                <IconInstagram v-else-if="social.channel === 'instagram'" class="w-5 h-5 text-white" />
                <IconTikTok v-else-if="social.channel === 'tiktok'" class="w-5 h-5 text-white" />
                <IconLinkedIn v-else-if="social.channel === 'linkedin'" class="w-5 h-5 text-white" />
              </a>
            </div>

            <!-- Social icons (legacy object format) -->
            <div v-else class="flex gap-3">
              <a v-if="coach?.socialLinks?.facebook" :href="coach.socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <IconFacebook class="w-5 h-5 text-white" />
              </a>
              <a v-if="coach?.socialLinks?.instagram" :href="coach.socialLinks.instagram" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <IconInstagram class="w-5 h-5 text-white" />
              </a>
              <a v-if="coach?.socialLinks?.tiktok" :href="coach.socialLinks.tiktok" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <IconTikTok class="w-5 h-5 text-white" />
              </a>
              <a v-if="coach?.socialLinks?.linkedin" :href="coach.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <IconLinkedIn class="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <!-- Right: coach photo -->
          <div class="flex-shrink-0 w-full lg:w-[480px] flex justify-center lg:justify-end">
            <img
              :src="coach?.photo || coach?.image"
              :alt="coach?.name"
              class="w-full max-w-[480px] object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>

      <!-- Divider line -->
      <div class="max-w-[1280px] mx-auto px-8 lg:px-16 mt-12">
        <hr class="border-0 h-px bg-gradient-to-r from-transparent via-brandGold/40 to-transparent" />
      </div>
    </section>

    <!-- ─── Details ─────────────────────────────────────────────────── -->
    <section class="py-12 md:py-16">
      <div class="max-w-[1280px] mx-auto px-8 lg:px-16">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">

          <!-- Left: gallery images -->
          <div class="flex-shrink-0 w-full lg:w-[380px] flex flex-col gap-6">
            <img
              :src="coach?.photo || coach?.image"
              :alt="coach?.name"
              class="w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              :src="coach?.photo || coach?.image"
              :alt="coach?.name"
              class="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          <!-- Right: expertise, education, experience -->
          <div class="flex-1 space-y-10">

            <!-- ความเชี่ยวชาญ -->
            <div v-if="coach?.expertise">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-brandGold mb-3">ความเชี่ยวชาญ</h2>
              <p class="text-textPrimary text-lg leading-relaxed">
                {{ Array.isArray(coach.expertise) ? coach.expertise.join(' · ') : coach.expertise }}
              </p>
            </div>

            <!-- ประวัติการศึกษา -->
            <div v-if="coach?.education?.length">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-brandGold mb-4">ประวัติการศึกษา</h2>
              <ul class="space-y-2">
                <li
                  v-for="(edu, i) in coach.education"
                  :key="i"
                  class="flex items-start gap-3 text-textPrimary"
                >
                  <span class="mt-2 w-2.5 h-2.5 rounded-full bg-brandGold flex-shrink-0" />
                  {{ edu }}
                </li>
              </ul>
            </div>

            <!-- ประสบการณ์ -->
            <div v-if="coach?.experience?.length">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-brandGold mb-4">ประสบการณ์</h2>
              <div class="space-y-4">
                <template v-for="(exp, i) in coach.experience" :key="i">
                  <!-- New object format -->
                  <div v-if="typeof exp === 'object'">
                    <p class="text-textPrimary font-medium mb-1">{{ exp.title }}</p>
                    <ul v-if="exp.items?.length" class="ml-4 space-y-1">
                      <li
                        v-for="(item, j) in exp.items"
                        :key="j"
                        class="flex items-start gap-2 text-textSecondary text-sm"
                      >
                        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brandGold/60 flex-shrink-0" />
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <!-- Legacy string format -->
                  <div v-else class="flex items-start gap-3 text-textPrimary">
                    <span class="mt-2 w-2.5 h-2.5 rounded-full bg-brandGold flex-shrink-0" />
                    {{ exp }}
                  </div>
                </template>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA Buttons ──────────────────────────────────────────────── -->
    <section class="py-12 md:py-16">
      <div class="max-w-[680px] mx-auto px-8 flex flex-col gap-5">
        <a
          href="#"
          class="block w-full text-center text-[1.3rem] font-bold py-6 rounded-full bg-brandGold text-bgPrimary hover:brightness-110 transition"
        >
          ดาวน์โหลดประวัติ
        </a>
        <NuxtLink
          to="/#contact"
          class="block w-full text-center text-[1.3rem] font-bold py-6 rounded-full bg-brandGold text-bgPrimary hover:brightness-110 transition"
        >
          คลาสรอบถัดไป
        </NuxtLink>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import type { Coach } from '~/types/coaches'
import coachesData from '~/data/coaches.json'

const route = useRoute()
const slug = route.params.slug as string

const coach = computed<Coach | undefined>(() =>
  coachesData.coaches.find((c: any) => c.slug === slug)
)

if (!coach.value) {
  throw showError({ statusCode: 404, message: 'Coach not found.' })
}

useHead({
  title: coach.value
    ? `${coach.value.name || coach.value.nickname} - ${coach.value.career || coach.value.title} | Inner Academy`
    : 'Coach Not Found | Inner Academy',
  meta: [
    { name: 'description', content: coach.value?.bio?.substring(0, 155) ?? '' },
    { property: 'og:title', content: `${coach.value?.name || coach.value?.nickname} | Inner Academy` },
    { property: 'og:description', content: coach.value?.bio?.substring(0, 155) ?? '' },
    { property: 'og:image', content: coach.value?.photo || coach.value?.image || '' },
    { property: 'og:type', content: 'profile' }
  ]
})
</script>
