<template>
  <section class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      
      <!-- Left Side - Video Player -->
      <div class="order-1 lg:order-2">
        <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
          <!-- Video Element -->
          <video 
            ref="videoRef"
            :poster="aboutContent.video.thumbnail"
            class="w-full h-full object-cover"
            :muted="isMuted"
            controls
            preload="metadata"
          >
            <source :src="aboutContent.video.url" type="video/mp4">
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
          
          <!-- Video Overlay -->
          <div class="absolute inset-0 pointer-events-none">
            <!-- Top Overlay Text -->
            <div class="absolute top-4 right-4">
              <p class="text-white text-sm font-medium  px-3 py-1.5 rounded-lg inline-block">
                {{ aboutContent.video.overlayText }}
              </p>
            </div>
            
            <!-- Top Right Icons -->
            <div class="absolute top-4 left-4 flex gap-2 pointer-events-auto">
              <!-- Share Button -->
              <button 
                @click="handleShare"
                class="w-[30px] h-[30px] bg-[#0000004D] backdrop-blur-xs rounded-lg flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
                :title="'اشتراک گذاری'"
              >
                <Icon name="mingcute:share-2-line" size="16" />
              </button>
              
              <!-- Mute/Unmute Button -->
              <button 
                @click="toggleMute"
                class="w-[30px] h-[30px] bg-[#0000004D] backdrop-blur-xs rounded-lg flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
                :title="isMuted ? 'صدا روشن' : 'صدا خاموش'"
              >
                <Icon :name="isMuted ? 'mingcute:volume-off-line' : 'mingcute:volume-line'" size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Content -->
      <div class="order-2 lg:order-1 text-right">
        <div class="space-y-[15px]">
          <!-- Section Title -->
          <h2 class="text-2xl lg:text-4xl font-bold leading-[58px]">
            {{ aboutContent.title }}
          </h2>
          
          <!-- Description -->
          <div class="space-y-4">
            <p 
              v-for="(paragraph, index) in aboutContent.description" 
              :key="index"
              class="text-base leading-8 text-justify"
            >
              {{ paragraph }}
            </p>
          </div>
          
          <!-- CTA Button -->
          <div class="pt-2">
            <button 
              @click="handleReadMore"
              class="inline-flex cursor-pointer items-center gap-2 bg-orange text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2"
            >
              <span>{{ aboutContent.buttonText }}</span>
              <Icon name="mingcute:right-line" size="20" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAboutContent } from '~/composables/home/useAboutContent'

const { aboutContent } = useAboutContent()

// Video functionality
const videoRef = ref<HTMLVideoElement | null>(null)
const isMuted = ref(true)

// Toggle mute/unmute
const toggleMute = () => {
  if (videoRef.value) {
    isMuted.value = !isMuted.value
    videoRef.value.muted = isMuted.value
  }
}

// Handle share functionality
const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: aboutContent.value.title,
        text: aboutContent.value.description[0],
        url: window.location.href
      })
    } catch (error) {
      console.log('Share cancelled or failed:', error)
    }
  } else {
    // Fallback - copy to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
      console.log('Link copied to clipboard')
    } catch (error) {
      console.log('Failed to copy link:', error)
    }
  }
}

// Handle read more button click
const handleReadMore = () => {
  // Navigate to about page or scroll to more content
  navigateTo('/about')
}

// Initialize video settings
onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value
  }
})
</script>