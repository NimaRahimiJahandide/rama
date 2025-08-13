<!-- pages/index.vue -->
<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="px-4 sm:px-6 lg:px-8">
      <HomeHero />
    </div>
    
    <!-- About Section -->
    <HomeAbout />
    
    <!-- Departments Section -->
    <HomeDepartments />
    
    <!-- Courses Slider Section -->
    <HomeCoursesSlider />

    <!-- banner -->
     <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-[120px]">
       <img src="/images/banner-home.webp" alt="banner-home">
     </section>
    
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

// Optional: Handle department selection from child component
const handleDepartmentSelected = (department: any) => {
  console.log('Selected department on homepage:', department)
  // You can handle this event as needed
}

// Optional: Handle course interactions
const handleCourseInteraction = (data: any) => {
  console.log('Course interaction:', data)
  // Handle course clicks, favorites, etc.
}
</script>