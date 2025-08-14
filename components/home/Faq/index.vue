<template>
  <section class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-8 lg:mb-12">
      <!-- Title with Icon -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 flex-shrink-0">
          <img src="/icons/question.svg" alt="question">
        </div>
        <h2 class="text-[36px] lg:text-4xl font-bold leading-[58px] text-right">
          {{ faqContent.title }}
        </h2>
      </div>
      
      <!-- View All Button -->
      <NuxtLink
        to="/faq"
        class="inline-flex items-center gap-2 bg-orange text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2"
      >
        <span>{{ faqContent.viewAllText }}</span>
        <Icon name="mingcute:left-line" size="16" />
      </NuxtLink>
    </div>

    <!-- FAQ Accordion List -->
    <div class="space-y-3 lg:space-y-4">
      <HomeFaqItem
        v-for="item in displayedFaqItems"
        :key="item.id"
        :item="item"
        :is-open="openItemId === item.id"
        @toggle="handleToggle"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFaqContent } from '~/composables/home/useFaqContent'

const { faqContent, getFeaturedFaqItems } = useFaqContent()

// State for accordion management
const openItemId = ref<number | null>(null)

// Computed
const displayedFaqItems = computed(() => {
  return getFeaturedFaqItems(6) // Show 6 FAQ items on homepage
})

// Event handlers
const handleToggle = (itemId: number) => {
  // Close if same item is clicked, otherwise open the new one
  openItemId.value = openItemId.value === itemId ? null : itemId
}

// Optional: Auto-close when clicking outside
const handleClickOutside = () => {
  openItemId.value = null
}

// Accessibility: Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && openItemId.value) {
    openItemId.value = null
  }
}

// Mount/unmount event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>