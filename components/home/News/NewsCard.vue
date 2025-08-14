<template>
  <div 
    class="relative bg-white rounded-xl overflow-hidden shadow-sm group cursor-pointer transition-all duration-300"
    :class="cardClasses"
    @click="handleCardClick"
  >
    <!-- Background Image -->
    <div class="relative w-full h-48 overflow-hidden">
      <img 
        :src="displayImage" 
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-300"
        @error="handleImageError"
      />
      
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <!-- Favorite Button -->
      <button
        @click.stop="handleFavoriteToggle"
        class="absolute top-3 right-3 w-8 h-8 text-white rounded-full flex items-center justify-center transition-all duration-200"
        
      >
        <Icon 
          :name="article.isFavorite ? 'mingcute:heart-fill' : 'mingcute:heart-line'" 
          size="38" 
        />
      </button>
    </div>
    
    <!-- Content Overlay -->
    <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
      <!-- Article Title -->
      <h3 class="font-medium text-2xl mb-2 line-clamp-2 text-right">
        {{ article.title }}
      </h3>
      
      <!-- Meta Information -->
      <div class="flex items-center justify-between text-sm text-white">
        <!-- Reading Time -->
        <div class="flex items-center gap-1">
          زمان مطالعه: 
          <span>{{ article.readingTime }} دقیقه</span>
        </div>
        
        <!-- Publish Date -->
        <div class="flex items-center gap-1">
          <span>تاریخ نشر: {{ article.publishDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsArticle } from '~/constants/home/news'

interface Props {
  article: NewsArticle
  variant?: 'default' | 'compact' | 'featured'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const emit = defineEmits<{
  click: [article: NewsArticle]
  favoriteToggle: [article: NewsArticle]
}>()

// State for image error handling
const imageError = ref(false)

// Computed properties
const displayImage = computed(() => {
  return imageError.value ? '/images/placeholder-news.jpg' : props.article.image
})

const cardClasses = computed(() => {
  const base = 'flex-shrink-0'
  
  switch (props.variant) {
    case 'compact':
      return `${base} w-64 min-w-64`
    case 'featured':
      return `${base} w-80 min-w-80 ring-2 ring-orange/20`
    default:
      return `${base} w-72 min-w-72`
  }
})

// Event handlers
const handleCardClick = () => {
  emit('click', props.article)
}

const handleFavoriteToggle = () => {
  emit('favoriteToggle', props.article)
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
/* Line clamp for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #FF6B24;
  border-radius: 2px;
}


/* Focus styles for accessibility */
button:focus {
  outline: 2px solid #FF6B24;
  outline-offset: 2px;
}
</style>