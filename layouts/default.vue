<template>
  <div class="min-h-screen flex flex-col bg-gradient-header">
    <!-- Header -->
    <TheHeader />

    <!-- Main Content -->
    <main class="flex-1 max-w-[1440px] mx-auto w-full">
      <slot />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Layout automatically wraps all pages
// No additional logic needed here
</script>
