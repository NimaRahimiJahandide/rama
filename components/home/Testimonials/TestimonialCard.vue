<template>
  <div 
    class="bg-[#F5F5F5] rounded-lg p-8 min-w-[420px] transition-all duration-300 group"
    :class="cardClasses"
  >
    <!-- Header with Profile -->
    <div class="flex items-start gap-4 mb-4">
      <!-- Profile Image -->
      <div class="flex-shrink-0">
        <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <img 
            :src="displayProfileImage" 
            :alt="testimonial.name"
            class="w-full h-full object-cover transition-transform duration-300"
            @error="handleImageError"
          />
        </div>
      </div>
      
      <!-- User Info -->
      <div class="flex-1 text-right">
        <h3 class="font-semibold text-base mb-1">
          {{ testimonial.name }}
        </h3>
        <p class="text-sm">
          {{ testimonial.email }}
        </p>
      </div>
    </div>
    
    <!-- Testimonial Text -->
    <div class="text-right">
      <p class="text-sm leading-relaxed">
        {{ testimonial.testimonial }}
      </p>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/constants/home/testimonials'

interface Props {
  testimonial: Testimonial
  maxLength?: number
  showRating?: boolean
  variant?: 'default' | 'compact' | 'featured'
}

const props = withDefaults(defineProps<Props>(), {
  maxLength: 120,
  showRating: false,
  variant: 'default'
})

// State for text expansion
const isExpanded = ref(false)
const imageError = ref(false)

// Computed properties
const displayProfileImage = computed(() => {
  return imageError.value ? '/images/default-avatar.webp' : props.testimonial.profileImage
})

const shouldShowReadMore = computed(() => {
  return props.testimonial.testimonial.length > props.maxLength
})

const cardClasses = computed(() => {
  const base = 'w-full'
  
  switch (props.variant) {
    case 'compact':
      return `${base} lg:w-64 min-w-64`
    case 'featured':
      return `${base} lg:w-80 min-w-80 border-2 border-orange/20`
    default:
      return `${base} lg:w-72 min-w-72`
  }
})

const handleImageError = () => {
  imageError.value = true
}

</script>

<style scoped>
/* Custom hover effects */
.group:hover .transition-transform {
  transform: scale(1.05);
}

/* Text selection styling */
::selection {
  background-color: #FF6B24;
  color: white;
}

/* Focus styles for accessibility */
button:focus {
  outline: 2px solid #FF6B24;
  outline-offset: 2px;
}
</style>