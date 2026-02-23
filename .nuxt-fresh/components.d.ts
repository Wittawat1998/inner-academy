
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AboutFounder: typeof import("../components/AboutFounder.vue")['default']
export const AboutGallery: typeof import("../components/AboutGallery.vue")['default']
export const AboutMission: typeof import("../components/AboutMission.vue")['default']
export const AboutQuote: typeof import("../components/AboutQuote.vue")['default']
export const AssessmentCTA: typeof import("../components/AssessmentCTA.vue")['default']
export const ClassCard: typeof import("../components/ClassCard.vue")['default']
export const ClassHero: typeof import("../components/ClassHero.vue")['default']
export const ClassMetadata: typeof import("../components/ClassMetadata.vue")['default']
export const ClientLogos: typeof import("../components/ClientLogos.vue")['default']
export const CoachBreadcrumb: typeof import("../components/CoachBreadcrumb.vue")['default']
export const CoachCard: typeof import("../components/CoachCard.vue")['default']
export const CoachesGrid: typeof import("../components/CoachesGrid.vue")['default']
export const ContactBlock: typeof import("../components/ContactBlock.vue")['default']
export const CoursesList: typeof import("../components/CoursesList.vue")['default']
export const CurriculumList: typeof import("../components/CurriculumList.vue")['default']
export const DualCTA: typeof import("../components/DualCTA.vue")['default']
export const EbookOffer: typeof import("../components/EbookOffer.vue")['default']
export const FeaturedClasses: typeof import("../components/FeaturedClasses.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const NextProgramPromo: typeof import("../components/NextProgramPromo.vue")['default']
export const OutcomesList: typeof import("../components/OutcomesList.vue")['default']
export const PageHeader: typeof import("../components/PageHeader.vue")['default']
export const PodcastBlock: typeof import("../components/PodcastBlock.vue")['default']
export const ReviewEmbed: typeof import("../components/ReviewEmbed.vue")['default']
export const ReviewsSection: typeof import("../components/ReviewsSection.vue")['default']
export const TestimonialsCarousel: typeof import("../components/TestimonialsCarousel.vue")['default']
export const TheFooter: typeof import("../components/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/TheHeader.vue")['default']
export const TrustedLogosSlider: typeof import("../components/TrustedLogosSlider.vue")['default']
export const TurnstileWidget: typeof import("../components/TurnstileWidget.vue")['default']
export const ContactForm: typeof import("../components/contact/ContactForm.vue")['default']
export const ContactInfo: typeof import("../components/contact/ContactInfo.vue")['default']
export const ContactMap: typeof import("../components/contact/ContactMap.vue")['default']
export const ContactSocialLinks: typeof import("../components/contact/SocialLinks.vue")['default']
export const IconsIconFacebook: typeof import("../components/icons/IconFacebook.vue")['default']
export const IconsIconInstagram: typeof import("../components/icons/IconInstagram.vue")['default']
export const IconsIconLinkedIn: typeof import("../components/icons/IconLinkedIn.vue")['default']
export const IconsIconTikTok: typeof import("../components/icons/IconTikTok.vue")['default']
export const UiBadge: typeof import("../components/ui/Badge.vue")['default']
export const UiButtonPrimary: typeof import("../components/ui/ButtonPrimary.vue")['default']
export const UiButtonSecondary: typeof import("../components/ui/ButtonSecondary.vue")['default']
export const UiCard: typeof import("../components/ui/Card.vue")['default']
export const UiFormInput: typeof import("../components/ui/FormInput.vue")['default']
export const UiSectionWrapper: typeof import("../components/ui/SectionWrapper.vue")['default']
export const UiSliderRow: typeof import("../components/ui/SliderRow.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutFounder: LazyComponent<typeof import("../components/AboutFounder.vue")['default']>
export const LazyAboutGallery: LazyComponent<typeof import("../components/AboutGallery.vue")['default']>
export const LazyAboutMission: LazyComponent<typeof import("../components/AboutMission.vue")['default']>
export const LazyAboutQuote: LazyComponent<typeof import("../components/AboutQuote.vue")['default']>
export const LazyAssessmentCTA: LazyComponent<typeof import("../components/AssessmentCTA.vue")['default']>
export const LazyClassCard: LazyComponent<typeof import("../components/ClassCard.vue")['default']>
export const LazyClassHero: LazyComponent<typeof import("../components/ClassHero.vue")['default']>
export const LazyClassMetadata: LazyComponent<typeof import("../components/ClassMetadata.vue")['default']>
export const LazyClientLogos: LazyComponent<typeof import("../components/ClientLogos.vue")['default']>
export const LazyCoachBreadcrumb: LazyComponent<typeof import("../components/CoachBreadcrumb.vue")['default']>
export const LazyCoachCard: LazyComponent<typeof import("../components/CoachCard.vue")['default']>
export const LazyCoachesGrid: LazyComponent<typeof import("../components/CoachesGrid.vue")['default']>
export const LazyContactBlock: LazyComponent<typeof import("../components/ContactBlock.vue")['default']>
export const LazyCoursesList: LazyComponent<typeof import("../components/CoursesList.vue")['default']>
export const LazyCurriculumList: LazyComponent<typeof import("../components/CurriculumList.vue")['default']>
export const LazyDualCTA: LazyComponent<typeof import("../components/DualCTA.vue")['default']>
export const LazyEbookOffer: LazyComponent<typeof import("../components/EbookOffer.vue")['default']>
export const LazyFeaturedClasses: LazyComponent<typeof import("../components/FeaturedClasses.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyNextProgramPromo: LazyComponent<typeof import("../components/NextProgramPromo.vue")['default']>
export const LazyOutcomesList: LazyComponent<typeof import("../components/OutcomesList.vue")['default']>
export const LazyPageHeader: LazyComponent<typeof import("../components/PageHeader.vue")['default']>
export const LazyPodcastBlock: LazyComponent<typeof import("../components/PodcastBlock.vue")['default']>
export const LazyReviewEmbed: LazyComponent<typeof import("../components/ReviewEmbed.vue")['default']>
export const LazyReviewsSection: LazyComponent<typeof import("../components/ReviewsSection.vue")['default']>
export const LazyTestimonialsCarousel: LazyComponent<typeof import("../components/TestimonialsCarousel.vue")['default']>
export const LazyTheFooter: LazyComponent<typeof import("../components/TheFooter.vue")['default']>
export const LazyTheHeader: LazyComponent<typeof import("../components/TheHeader.vue")['default']>
export const LazyTrustedLogosSlider: LazyComponent<typeof import("../components/TrustedLogosSlider.vue")['default']>
export const LazyTurnstileWidget: LazyComponent<typeof import("../components/TurnstileWidget.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/contact/ContactForm.vue")['default']>
export const LazyContactInfo: LazyComponent<typeof import("../components/contact/ContactInfo.vue")['default']>
export const LazyContactMap: LazyComponent<typeof import("../components/contact/ContactMap.vue")['default']>
export const LazyContactSocialLinks: LazyComponent<typeof import("../components/contact/SocialLinks.vue")['default']>
export const LazyIconsIconFacebook: LazyComponent<typeof import("../components/icons/IconFacebook.vue")['default']>
export const LazyIconsIconInstagram: LazyComponent<typeof import("../components/icons/IconInstagram.vue")['default']>
export const LazyIconsIconLinkedIn: LazyComponent<typeof import("../components/icons/IconLinkedIn.vue")['default']>
export const LazyIconsIconTikTok: LazyComponent<typeof import("../components/icons/IconTikTok.vue")['default']>
export const LazyUiBadge: LazyComponent<typeof import("../components/ui/Badge.vue")['default']>
export const LazyUiButtonPrimary: LazyComponent<typeof import("../components/ui/ButtonPrimary.vue")['default']>
export const LazyUiButtonSecondary: LazyComponent<typeof import("../components/ui/ButtonSecondary.vue")['default']>
export const LazyUiCard: LazyComponent<typeof import("../components/ui/Card.vue")['default']>
export const LazyUiFormInput: LazyComponent<typeof import("../components/ui/FormInput.vue")['default']>
export const LazyUiSectionWrapper: LazyComponent<typeof import("../components/ui/SectionWrapper.vue")['default']>
export const LazyUiSliderRow: LazyComponent<typeof import("../components/ui/SliderRow.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
