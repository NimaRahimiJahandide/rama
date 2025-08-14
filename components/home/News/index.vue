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

    <!-- Articles Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <HomeNewsCard
        v-for="article in displayedArticles"
        :key="article.id"
        :article="article"
        variant="grid"
        @click="handleArticleClick"
        @favorite-toggle="handleFavoriteToggle"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNewsContent } from '~/composables/home/useNewsContent'

const { newsContent, getFeaturedArticles, toggleArticleFavorite } = useNewsContent()

// Computed
const displayedArticles = computed(() => {
  return getFeaturedArticles(6) // Show 6 articles in grid (2 rows × 3 cols on desktop)
})

// Event handlers
const handleArticleClick = (article: any) => {
  // Navigate to article detail page
  navigateTo(`/news/${article.slug || article.id}`)
}

const handleFavoriteToggle = (article: any) => {
  toggleArticleFavorite(article.id)
}
</script>