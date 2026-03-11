<template>
  <main class="min-h-screen bg-bgPrimary text-textPrimary py-24">
    <div class="max-w-3xl mx-auto px-6 lg:px-8">
      <h1 class="text-5xl font-semibold mb-8 header-fade">นโยบายความเป็นส่วนตัว</h1>
      <p class="text-textSecondary text-lg leading-relaxed mb-6">
        ข้อมูลส่วนบุคคลที่ท่านให้ไว้กับ Inner Academy จะถูกใช้เพื่อวัตถุประสงค์ในการให้บริการและติดต่อกลับเท่านั้น
        เราจะไม่เปิดเผยข้อมูลดังกล่าวต่อบุคคลที่สาม โดยไม่ได้รับความยินยอมจากท่าน
      </p>
      <p class="text-textSecondary text-lg leading-relaxed mb-6">
        หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวของเรา กรุณาติดต่อได้ที่ช่องทางที่ระบุในหน้าติดต่อ
      </p>
      <NuxtLink to="/" class="inline-block mt-8 text-brandGold hover:underline">← กลับหน้าแรก</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'นโยบายความเป็นส่วนตัว | Inner Academy',
  description: 'นโยบายความเป็นส่วนตัวของ Inner Academy'
})
</script>
