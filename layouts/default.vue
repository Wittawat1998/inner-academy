<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#000000] to-[#0a1628]">
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
