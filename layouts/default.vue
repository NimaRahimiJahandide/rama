<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main>
      <slot />
    </main>
    <!-- Footer -->
    <Footer />
    
    <!-- Support Widget - Always visible on all pages -->
    <SupportWidget />
  </div>
</template>

<script setup lang="ts">
// Optional: Configure support widget globally
// import { useSupportWidget } from '~/composables/useSupportWidget'
// 
// const { updateConfig } = useSupportWidget()
// 
// onMounted(() => {
//   // You can customize the widget configuration here
//   updateConfig({
//     position: 'bottom-right', // or 'bottom-left'
//     enabled: true
//   })
// })
</script>