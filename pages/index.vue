<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="px-4 sm:px-6 lg:px-8">
      <HomeHero />
    </div>
    
    <!-- About Section -->
    <HomeAbout />
    
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'آکادمی راما - صفحه اصلی',
  meta: [
    { name: 'description', content: 'آکادمی راما - مسیری هموار برای رسیدن به اهداف شما' }
  ]
})
</script>