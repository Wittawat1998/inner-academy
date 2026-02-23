# Spec to Code Mapping

## layout-and-navigation
- layouts/default.vue
- components/MainMenu.vue
- components/MainFooter.vue

## home-page
- pages/index.vue

## class-list-page
~~- pages/classes/index.vue~~ **DEPRECATED** - Feature 003 removed from scope (2026-02-21). Class browsing via home page anchor `#classes` instead.

## class-detail-template
- pages/classes/[slug].vue

## about-page
- pages/about.vue

## coaches-page
~~- pages/coaches.vue~~ **DEPRECATED** - Feature 006 listing page removed from scope (2026-02-21). Coach browsing via home page anchor `#coaches` instead.
- pages/coaches/[slug].vue - Coach detail pages (revised Feature 006 scope)

## contact-page
- pages/contact.vue
- server/api/contact.post.ts
