<template>
  <div class="min-h-screen flex flex-col" style="background: linear-gradient(to top, #121d33 0%, #000000 75%)">
    <!-- Header -->
    <TheHeader />

    <!-- Main Content -->
    <main class="flex-1">
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
