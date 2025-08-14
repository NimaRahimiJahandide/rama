<template>
  <section class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-8 lg:mb-12">
      <!-- Title with Icon -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 flex-shrink-0">
          <Icon name="jam:document-f" size="32" class="text-orange" />
        </div>
        <h2 class="text-[36px] lg:text-4xl font-bold leading-[58px] text-right">
          {{ newsContent.title }}
        </h2>
      </div>
      
      <!-- View All Button -->
      <NuxtLink
        to="/news"
        class="inline-flex items-center gap-2 bg-orange text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2"
      >
        <span>{{ newsContent.viewAllText }}</span>
        <Icon name="mingcute:left-line" size="16" />
      </NuxtLink>
    </div>

    <!-- Articles Container -->
    <div class="relative">
      <!-- Desktop and Mobile: Horizontal Scroll -->
      <div 
        ref="articlesContainerRef"
        class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        <HomeNewsCard
          v-for="article in displayedArticles"
          :key="article.id"
          :article="article"
          @click="handleArticleClick"
          @favorite-toggle="handleFavoriteToggle"
        />
      </div>
      
      <!-- Fade overlays for scroll indication -->
      <div 
        v-if="showScrollIndicators"
        class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"
      ></div>
      <div 
        v-if="showScrollIndicators"
        class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"
      ></div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNewsContent } from '~/composables/home/useNewsContent'

const { newsContent, getFeaturedArticles, toggleArticleFavorite } = useNewsContent()

// Refs
const articlesContainerRef = ref<HTMLElement | null>(null)

// State
const scrollPosition = ref(0)
const containerWidth = ref(0)
const scrollWidth = ref(0)

// Computed
const displayedArticles = computed(() => {
  return getFeaturedArticles(8) // Show 8 articles in the slider
})

const showScrollIndicators = computed(() => {
  return scrollWidth.value > containerWidth.value
})

const showScrollButtons = computed(() => {
  return showScrollIndicators.value && process.client
})

const isAtStart = computed(() => {
  return scrollPosition.value <= 10
})

const isAtEnd = computed(() => {
  return scrollPosition.value >= (scrollWidth.value - containerWidth.value - 10)
})

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
      updateScrollPosition()
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
      updateScrollPosition()
    }
  }
}

// Scroll navigation
const scrollLeft = () => {
  if (articlesContainerRef.value) {
    const scrollAmount = 300 // Adjust as needed
    articlesContainerRef.value.scrollLeft -= scrollAmount
    updateScrollPosition()
  }
}

const scrollRight = () => {
  if (articlesContainerRef.value) {
    const scrollAmount = 300 // Adjust as needed
    articlesContainerRef.value.scrollLeft += scrollAmount
    updateScrollPosition()
  }
}

// Update scroll position and dimensions
const updateScrollPosition = () => {
  if (articlesContainerRef.value) {
    scrollPosition.value = articlesContainerRef.value.scrollLeft
    containerWidth.value = articlesContainerRef.value.clientWidth
    scrollWidth.value = articlesContainerRef.value.scrollWidth
  }
}

// Event handlers
const handleArticleClick = (article: any) => {
  // Navigate to article detail page
  navigateTo(`/news/${article.slug || article.id}`)
}

const handleFavoriteToggle = (article: any) => {
  toggleArticleFavorite(article.id)
}

// Lifecycle
onMounted(() => {
  updateScrollPosition()
  
  // Add scroll event listener
  if (articlesContainerRef.value) {
    articlesContainerRef.value.addEventListener('scroll', updateScrollPosition)
  }
  
  // Add resize event listener
  window.addEventListener('resize', updateScrollPosition)
})

onUnmounted(() => {
  if (articlesContainerRef.value) {
    articlesContainerRef.value.removeEventListener('scroll', updateScrollPosition)
  }
  window.removeEventListener('resize', updateScrollPosition)
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

/* Custom scrollbar for the container (optional - remove .scrollbar-hide if you want visible scrollbar) */
.scrollbar-custom::-webkit-scrollbar {
  height: 4px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #FF6B24;
  border-radius: 2px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #e55a1f;
}
</style>