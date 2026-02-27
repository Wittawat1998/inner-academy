<template>
  <main class="min-h-screen bg-bgPrimary text-textPrimary py-24">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <h1 class="text-5xl font-semibold mb-8 header-fade">ข้อกำหนดและเงื่อนไข</h1>
      <p class="text-textSecondary text-lg leading-relaxed mb-6">
        การเข้าใช้งานเว็บไซต์และบริการของ Inner Academy ถือว่าท่านได้ยอมรับข้อกำหนดและเงื่อนไขการใช้งานนี้
      </p>
      <p class="text-textSecondary text-lg leading-relaxed mb-6">
        เนื้อหาทั้งหมดบนเว็บไซต์นี้เป็นทรัพย์สินทางปัญญาของ Inner Academy ห้ามนำไปใช้หรือเผยแพร่โดยไม่ได้รับอนุญาต
      </p>
      <p class="text-textSecondary text-lg leading-relaxed mb-6">
        หากท่านมีข้อสงสัยเกี่ยวกับข้อกำหนดเหล่านี้ กรุณาติดต่อได้ที่ช่องทางที่ระบุในหน้าติดต่อ
      </p>
      <NuxtLink to="/" class="inline-block mt-8 text-brandGold hover:underline">← กลับหน้าแรก</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'ข้อกำหนดและเงื่อนไข | Inner Academy',
  description: 'ข้อกำหนดและเงื่อนไขการใช้งาน Inner Academy'
})
</script>
