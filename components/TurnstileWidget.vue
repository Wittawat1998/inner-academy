<script setup lang="ts">
/**
 * Cloudflare Turnstile Widget Component
 * Feature: 007-contact
 * 
 * Renders Cloudflare Turnstile bot protection widget
 * Emits token when verification is successful
 */

const config = useRuntimeConfig();
const emit = defineEmits<{
  verified: [token: string];
  error: [];
}>();

const turnstileLoaded = ref(false);
const turnstileId = ref<string | null>(null);
const widgetContainer = ref<HTMLElement | null>(null);

// Load Turnstile script
onMounted(() => {
  if (typeof window === 'undefined') return;
  
  // Check if script already loaded
  if ((window as any).turnstile) {
    turnstileLoaded.value = true;
    renderWidget();
    return;
  }
  
  // Load Turnstile script
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  script.async = true;
  script.defer = true;
  
  script.onload = () => {
    turnstileLoaded.value = true;
    renderWidget();
  };
  
  script.onerror = () => {
    console.error('Failed to load Turnstile script');
    emit('error');
  };
  
  document.head.appendChild(script);
});

function renderWidget() {
  if (!widgetContainer.value || !turnstileLoaded.value) return;
  
  const turnstile = (window as any).turnstile;
  if (!turnstile) return;
  
  try {
    turnstileId.value = turnstile.render(widgetContainer.value, {
      sitekey: config.public.turnstileSiteKey,
      theme: 'light',
      size: 'normal',
      callback: (token: string) => {
        emit('verified', token);
      },
      'error-callback': () => {
        emit('error');
      },
      'expired-callback': () => {
        emit('error');
      }
    });
  } catch (error) {
    console.error('Failed to render Turnstile widget:', error);
    emit('error');
  }
}

// Reset widget (useful for form resets)
function reset() {
  if (!turnstileLoaded.value || !turnstileId.value) return;
  
  const turnstile = (window as any).turnstile;
  if (turnstile && turnstile.reset) {
    turnstile.reset(turnstileId.value);
  }
}

// Expose reset method to parent
defineExpose({
  reset
});
</script>

<template>
  <div class="turnstile-widget">
    <div ref="widgetContainer" class="cf-turnstile"></div>
  </div>
</template>

<style scoped>
.turnstile-widget {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
</style>
