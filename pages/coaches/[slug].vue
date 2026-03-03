<template>
  <main class="coach-detail-page bg-gradient-header min-h-screen" style="background-image: url('/images/bg/hero-bg.webp'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;">

    <!-- ─── Hero ────────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pt-20 md:pt-24 lg:pt-28 items-center flex flex-col">
        <div class="max-w-[960px] flex flex-col md:flex-row items-center gap-0">

          <!-- Left: name, title, social -->
          <div class="flex-1 min-w-0 z-10 pb-10 lg:pb-0">
            <h1 class="text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[1.05] text-goldText mb-3">
              {{ coach?.name || coach?.nickname }}
            </h1>
            <p class="text-[clamp(1.2rem,2.5vw,1.8rem)] text-goldTextDark font-medium mb-1">
              {{ coach?.nameTh }}
            </p>
            <p class="text-[clamp(1rem,1.8vw,1.3rem)] text-textSecondary italic mb-8">
              {{ coach?.career || coach?.title }}
            </p>

            <!-- Social icons -->
            <SocialIconsList
              v-if="coach?.socialMedia?.length"
              :links="coach.socialMedia.map(s => ({ icon: s.channel, url: s.link }))"
            />
            <SocialIconsList
              v-else-if="coach?.socialLinks"
              :links="(Object.entries(coach.socialLinks).filter(([, v]) => !!v) as [string, string][]).map(([k, v]) => ({ icon: k, url: v }))"
            />
          </div>

          <!-- Right: coach photo with left-fade gradient -->
          <div class="relative flex-shrink-0 w-full md:w-[360px] lg:w-[480px]">
            <!-- gradient fade blending into background on the left -->
            <div class="absolute inset-y-0 left-0 w-32 z-10 bg-transparent pointer-events-none" />
            <img
              :src="coach?.photo || coach?.image"
              :alt="coach?.name"
              class="w-full object-cover object-top"
            />
          </div>

        </div>
      </div>

      <!-- Divider line -->
      <div class="mx-4 md:mx-20 px-4 md:px-10 lg:px-16 xl:px-40" style="height: 2px; background: linear-gradient(90deg, rgba(247,198,109,0) 0%, rgba(247,198,109,0.2) 10%, rgba(247,198,109,0.4) 30%, rgba(247,198,109,0.5) 50%, rgba(247,198,109,0.4) 70%, rgba(247,198,109,0.2) 90%, rgba(247,198,109,0) 100%);">
        <div style="height: 2px; background: linear-gradient(90deg, rgba(247,198,109,0) 0%, rgba(247,198,109,0.2) 10%, rgba(247,198,109,0.4) 30%, rgba(247,198,109,0.5) 50%, rgba(247,198,109,0.4) 70%, rgba(247,198,109,0.2) 90%, rgba(247,198,109,0) 100%);"></div>
      </div>
    </section>

    <!-- ─── Details ─────────────────────────────────────────────────── -->
    <section class="py-16">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="max-w-[1024px] flex flex-col lg:flex-row gap-12 lg:gap-20">

          <!-- Left: gallery images -->
          <div class="flex-shrink-0 w-full lg:w-[380px] flex flex-col gap-6">
            <img
              v-for="(img, i) in coach?.gallery"
              :key="i"
              :src="img"
              :alt="`${coach?.name} gallery ${i + 1}`"
              class="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          <!-- Right: expertise, education, experience -->
          <div class="flex-1 space-y-10">

            <!-- ความเชี่ยวชาญ -->
            <div v-if="coach?.expertise">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-medium text-goldText mb-3">ความเชี่ยวชาญ</h2>
              <p class="text-textPrimary text-lg leading-relaxed">
                {{ Array.isArray(coach.expertise) ? coach.expertise.join(' · ') : coach.expertise }}
              </p>
            </div>

            <!-- ประวัติการศึกษา -->
            <div v-if="coach?.education?.length">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-medium text-goldText mb-4">ประวัติการศึกษา</h2>
              <ul class="space-y-2">
                <li
                  v-for="(edu, i) in coach.education"
                  :key="i"
                  class="flex items-start gap-3 text-textPrimary"
                >
                  <span class="mt-2 w-2.5 h-2.5 rounded-full bg-goldTextDark flex-shrink-0" />
                  {{ edu }}
                </li>
              </ul>
            </div>

            <!-- ประสบการณ์ -->
            <div v-if="coach?.experience?.length">
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-medium text-goldText mb-4">ประสบการณ์</h2>
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
                        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-goldTextDark flex-shrink-0" />
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <!-- Legacy string format -->
                  <div v-else class="flex items-start gap-3 text-textPrimary">
                    <span class="mt-2 w-2.5 h-2.5 rounded-full bg-goldTextDark flex-shrink-0" />
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
    <section class="py-16">
      <div class="max-w-[680px] mx-auto px-8 flex flex-col gap-5">
        <a
          href="#"
          class="block w-full text-center text-4xl font-semibold py-6 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
        >
          ดาวน์โหลดประวัติ
        </a>
        <NuxtLink
          to="/#contact"
          class="block w-full text-center text-4xl font-semibold py-6 rounded-full bg-fade text-bgPrimary hover:brightness-110 transition"
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
