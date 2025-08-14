<template>
  <section v-if="scrollingContent.isVisible" class="relative max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden py-4"
    :style="{ backgroundColor: scrollingContent.config.backgroundColor }">
    <h2 class="text-[36px] font-bold leading-[58px] flex justify-center items-center pb-10">لینک های کاربردی</h2>
    <!-- Scrolling Container -->
    <div class="flex items-center whitespace-nowrap" :class="[
      scrollingContent.config.containerHeight,
      { 'animate-scroll-rtl': !scrollingContent.isPaused }
    ]" :style="animationStyle" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <!-- Repeated Text Items -->
      <div v-for="item in repeatedItems" :key="`${item.id}-${item.text}`" class="flex items-center flex-shrink-0"
        :class="scrollingContent.config.itemSpacing">
        <!-- Text -->
        <span class="font-medium" :class="[
          scrollingContent.config.textSize,
          scrollingContent.config.textColor
        ]">
          {{ item.text }}
        </span>
        <!-- Icon (if provided) -->
        <div v-if="item.icon" class="flex-shrink-0 w-8 h-8 ml-3">
          <img :src="item.icon" :alt="item.text" class="w-full h-full object-contain">
        </div>


      </div>
    </div>

    <!-- Gradient Overlays for smooth fade effect -->
    <div class="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent pointer-events-none"
      :style="{ to: scrollingContent.config.backgroundColor }">
    </div>
    <div class="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent pointer-events-none"
      :style="{ to: scrollingContent.config.backgroundColor }">
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollingText } from '~/composables/home/useScrollingText'

interface Props {
  repeatCount?: number
  pauseOnHover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  repeatCount: 4,
  pauseOnHover: true
})

const {
  scrollingContent,
  getRepeatedItems,
  setPaused,
  animationStyle
} = useScrollingText()

// Get repeated items for continuous scrolling
const repeatedItems = computed(() => {
  return getRepeatedItems(props.repeatCount)
})

// Mouse interaction handlers
const handleMouseEnter = () => {
  if (props.pauseOnHover && scrollingContent.value.config.pauseOnHover) {
    setPaused(true)
  }
}

const handleMouseLeave = () => {
  if (props.pauseOnHover && scrollingContent.value.config.pauseOnHover) {
    setPaused(false)
  }
}

// Intersection Observer for performance (optional)
const sectionRef = ref<HTMLElement | null>(null)
const isInView = ref(false)

onMounted(() => {
  if (!process.client) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isInView.value = entry.isIntersecting
        // Pause animation when not in view to save resources
        if (!entry.isIntersecting) {
          setPaused(true)
        } else {
          setPaused(false)
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
@keyframes scroll-rtl {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-rtl {
  animation: scroll-rtl var(--animation-duration, 30s) linear infinite;
}

/* Ensure smooth animation */
.animate-scroll-rtl * {
  will-change: transform;
}

/* Custom gradient overlays */
.absolute.inset-y-0.left-0 {
  background: linear-gradient(to left, transparent, v-bind('scrollingContent.config.backgroundColor'));
}

.absolute.inset-y-0.right-0 {
  background: linear-gradient(to right, transparent, v-bind('scrollingContent.config.backgroundColor'));
}
</style>