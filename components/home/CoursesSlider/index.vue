<template>
  <section class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <!-- Section Header -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12">
      <!-- Section Title -->
      <h2 class="text-2xl lg:text-4xl font-bold mb-4 lg:mb-0 text-right flex items-center gap-4">
        <Icon name="fluent:fire-20-filled" size="32"  style="color: #FF6B24" />
        {{ coursesContent.title }}
      </h2>
      
      <!-- View All Button -->
      <button 
        @click="handleViewAll"
        class="self-start cursor-pointer lg:self-auto bg-orange text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2 flex items-center gap-2"
      >
        <span>{{ coursesContent.viewAllText }}</span>
      </button>
    </div>

    <!-- Desktop Slider -->
    <div class="hidden lg:block">
      <div class="relative">
        <!-- Swiper Container -->
        <div ref="swiperContainer" class="swiper overflow-hidden">
          <div class="swiper-wrapper">
            <div 
              v-for="course in coursesContent.courses" 
              :key="course.id"
              class="swiper-slide"
            >
              <HomeCoursesSliderCard :course="course" />
            </div>
          </div>
        </div>
        
        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 gap-2">
          <button 
            v-for="(slide, index) in totalSlides" 
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-5 h-3 rounded-full transition-all duration-200 cursor-pointer',
              currentSlide === index 
                ? 'bg-surmeh' 
                : 'bg-[#D9D9D9]'
            ]"
          >
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <!-- Course Cards Grid -->
      <div class="space-y-6 mb-8">
        <HomeCoursesSliderCard 
          v-for="course in paginatedCourses" 
          :key="course.id"
          :course="course" 
        />
      </div>
      
      <!-- Mobile Pagination -->
      <div class="flex justify-center gap-2">
        <button 
          v-for="(page, index) in totalMobilePages" 
          :key="index"
          @click="currentMobilePage = index"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-200',
            currentMobilePage === index 
              ? 'bg-orange w-8' 
              : 'bg-gray-300 hover:bg-gray-400'
          ]"
        >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCoursesContent } from '~/composables/home/useCoursesContent'

const { coursesContent } = useCoursesContent()

// Swiper instance
let swiper: any = null
const swiperContainer = ref<HTMLElement | null>(null)

// Slider state
const currentSlide = ref(0)
const currentMobilePage = ref(0)
const coursesPerSlide = 3
const coursesPerMobilePage = 3

// Computed properties
const totalSlides = computed(() => {
  return Math.ceil(coursesContent.value.courses.length / coursesPerSlide)
})

const totalMobilePages = computed(() => {
  return Math.ceil(coursesContent.value.courses.length / coursesPerMobilePage)
})

const paginatedCourses = computed(() => {
  const start = currentMobilePage.value * coursesPerMobilePage
  const end = start + coursesPerMobilePage
  return coursesContent.value.courses.slice(start, end)
})

// Methods
const initSwiper = async () => {
  if (process.client && swiperContainer.value) {
    // Dynamically import Swiper
    const { Swiper, Navigation, Pagination } = await import('swiper')
    const { default: SwiperCore } = await import('swiper')
    
    // Import Swiper styles
    await import('swiper/css')
    await import('swiper/css/navigation')
    await import('swiper/css/pagination')

    swiper = new Swiper(swiperContainer.value, {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false,
      grabCursor: true,
      centeredSlides: false,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      },
      on: {
        slideChange: () => {
          if (swiper) {
            currentSlide.value = Math.floor(swiper.activeIndex / coursesPerSlide)
          }
        }
      }
    })
  }
}

const goToSlide = (index: number) => {
  if (swiper) {
    const slideIndex = index * coursesPerSlide
    swiper.slideTo(slideIndex)
    currentSlide.value = index
  }
}

const handleViewAll = () => {
  navigateTo('/courses')
}

// Lifecycle
onMounted(() => {
  initSwiper()
})

onUnmounted(() => {
  if (swiper) {
    swiper.destroy(true, true)
  }
})

// Watch for mobile page changes
watch(currentMobilePage, () => {
  // You can add smooth scroll animations here if needed
})
</script>