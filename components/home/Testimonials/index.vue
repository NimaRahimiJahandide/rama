<template>
  <section class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <!-- Section Title -->
    <div class="text-center flex items-center justify-center mb-8 lg:mb-12">
      <h2 class="text-[36px] lg:text-4xl font-bold leading-[58px] px-5 border-x-4 rounded-[4px] border-orange">
        {{ testimonialsContent.title }}
      </h2>
    </div>

    <!-- Desktop Layout: 2 rows with horizontal scroll -->
    <div class="hidden lg:block">
      <!-- First Row -->
      <div class="mb-6 relative">
        <div 
          ref="firstRowRef"
          class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          @wheel="handleWheel"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <HomeTestimonialsTestimonialCard
            v-for="testimonial in firstRowTestimonials"
            :key="`first-${testimonial.id}`"
            :testimonial="testimonial"
            class="flex-shrink-0"
          />
        </div>
        
        <!-- Fade overlay for scroll indication -->
        <div class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      <!-- Second Row -->
      <div class="relative">
        <div 
          ref="secondRowRef"
          class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          @wheel="handleWheel"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <HomeTestimonialsTestimonialCard
            v-for="testimonial in secondRowTestimonials"
            :key="`second-${testimonial.id}`"
            :testimonial="testimonial"
            class="flex-shrink-0"
          />
        </div>
        
        <!-- Fade overlay for scroll indication -->
        <div class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>

    <!-- Mobile Layout: Single column with vertical scroll -->
    <div class="lg:hidden">
      <div class="space-y-4">
        <HomeTestimonialsTestimonialCard
          v-for="testimonial in mobileTestimonials"
          :key="`mobile-${testimonial.id}`"
          :testimonial="testimonial"
          class="w-full"
        />
      </div>
      
      <!-- Load More Button for Mobile -->
      <div v-if="canLoadMore" class="text-center mt-8">
        <button
          @click="loadMoreTestimonials"
          class="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2"
        >
          <span>مشاهده بیشتر</span>
          <Icon name="mingcute:down-line" size="18" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTestimonialsContent } from '~/composables/home/useTestimonialsContent'

const { testimonialsContent, getFeaturedTestimonials } = useTestimonialsContent()

// Refs for scroll containers
const firstRowRef = ref<HTMLElement | null>(null)
const secondRowRef = ref<HTMLElement | null>(null)

// Split testimonials into two rows for desktop
const firstRowTestimonials = computed(() => {
  const testimonials = testimonialsContent.value.testimonials
  return testimonials.filter((_, index) => index % 2 === 0)
})

const secondRowTestimonials = computed(() => {
  const testimonials = testimonialsContent.value.testimonials
  return testimonials.filter((_, index) => index % 2 === 1)
})

// Mobile testimonials with pagination
const mobileDisplayCount = ref(4)
const mobileTestimonials = computed(() => {
  return testimonialsContent.value.testimonials.slice(0, mobileDisplayCount.value)
})

const canLoadMore = computed(() => {
  return mobileDisplayCount.value < testimonialsContent.value.testimonials.length
})

const loadMoreTestimonials = () => {
  mobileDisplayCount.value += 4
}

// Touch handling for mobile swipe
let touchStartX = 0
let touchStartY = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

const handleTouchMove = (e: TouchEvent) => {
  if (!touchStartX || !touchStartY) return

  const touchEndX = e.touches[0].clientX
  const touchEndY = e.touches[0].clientY
  
  const deltaX = touchStartX - touchEndX
  const deltaY = touchStartY - touchEndY
  
  // Only handle horizontal swipes (ignore vertical scrolling)
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    e.preventDefault()
    
    const target = e.currentTarget as HTMLElement
    if (target) {
      target.scrollLeft += deltaX * 0.8
    }
  }
}

const handleTouchEnd = () => {
  touchStartX = 0
  touchStartY = 0
}

// Mouse wheel handling for horizontal scroll
const handleWheel = (e: WheelEvent) => {
  // Only handle horizontal scrolling when shift is pressed or when it's a horizontal wheel
  if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault()
    
    const target = e.currentTarget as HTMLElement
    if (target) {
      const scrollAmount = e.deltaY || e.deltaX
      target.scrollLeft += scrollAmount
    }
  }
}

// Auto-scroll functionality (optional)
const startAutoScroll = () => {
  const scrollSpeed = 0.5 // pixels per frame
  
  const scroll = () => {
    if (firstRowRef.value) {
      firstRowRef.value.scrollLeft += scrollSpeed
      
      // Reset to beginning if reached end
      if (firstRowRef.value.scrollLeft >= firstRowRef.value.scrollWidth - firstRowRef.value.clientWidth) {
        firstRowRef.value.scrollLeft = 0
      }
    }
    
    if (secondRowRef.value) {
      secondRowRef.value.scrollLeft -= scrollSpeed
      
      // Reset to end if reached beginning
      if (secondRowRef.value.scrollLeft <= 0) {
        secondRowRef.value.scrollLeft = secondRowRef.value.scrollWidth - secondRowRef.value.clientWidth
      }
    }
    
    requestAnimationFrame(scroll)
  }
  
  // Uncomment to enable auto-scroll
  // requestAnimationFrame(scroll)
}

onMounted(() => {
  startAutoScroll()
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

/* Smooth scrolling */
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>