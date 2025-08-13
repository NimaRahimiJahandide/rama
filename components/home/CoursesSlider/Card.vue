<template>
  <div
    class="group bg-white rounded-3xl shadow-[0px_2px_16px_0px_#01010126] px-[15px] py-2.5 overflow-hidden transition-all duration-300">
    <!-- Course Image Container -->
    <div class="relative aspect-video overflow-hidden">
      <img :src="course.image" :alt="course.title"
        class="w-full h-full object-cover rounded-[22px] transition-transform duration-300">

      <!-- Favorite Button -->
      <button @click="toggleFavorite" :class="[
        'absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer',
      ]" :title="isFavorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'">
        <Icon :name="isFavorite ? 'mingcute:heart-fill' : 'mingcute:heart-line'" size="26" />
      </button>

    </div>

    <!-- Card Content -->
    <div class="py-2.5">
      <!-- Course Title -->
      <h3 class="font-medium mb-1 text-right leading-6">
        {{ course.title }}
      </h3>

      <!-- Teacher Info -->
      <div class="flex items-center justify-start gap-2 mb-4 text-sm text-gray-600">
        <img src="/icons/user.svg" alt="user">
        <span class="font-medium">مدرس:</span>
        <span>{{ course.teacher.name }}</span>
      </div>

      <!-- Features List -->
      <div class="space-y-2 mb-6">
        <div v-for="feature in course.features" :key="feature"
          class="flex items-center justify-start gap-2 text-sm text-gray-700">
          <Icon name="mdi:tick" size="16" class="text-[#414653] flex-shrink-0" />
          <span class="text-right">{{ feature }}</span>
        </div>
      </div>

      <!-- Price Section -->
      <div class="flex items-center justify-between mb-6 bg-[#EFF2F5] rounded-lg p-2">
        <div class="text-right flex items-center justify-between w-full">
          <!-- Discount Badge -->
          <div v-if="course.pricing.discount > 0"
            class="inline-block bg-[#DB2B2B] text-white text-sm px-2 py-1 rounded-lg">
            {{ course.pricing.discount }}%
          </div>
          <!-- Price Display -->
          <div class="flex items-center gap-2 justify-end">
            <!-- Original Price (if discounted) -->
            <span v-if="course.pricing.originalPrice && course.pricing.originalPrice > course.pricing.finalPrice"
              class="text-xs text-[#5F6367] line-through ml-2">
              {{ formatPrice(course.pricing.originalPrice) }}
            </span>
            <!-- Final Price -->
            <span class="font-semibold">
              {{ formatPrice(course.pricing.finalPrice) }}
            </span>
            <span class="text-xs text-[#5F6367]">تومان</span>

          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="border-t border-[#E3E3E3]">
        <button @click="handleCourseClick"
          class="w-full text-orange rounded-full pt-[18px] font-semibold flex items-center justify-start gap-2">
          <Icon name="mingcute:right-line" size="20" />
          <span>اطلاعات بیشتر و خرید</span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Course } from '~/composables/courses/useCoursesContent'

// Props
interface Props {
  course: Course
}

const props = defineProps<Props>()

// Local state
const isFavorite = ref(props.course.isFavorite || false)

// Methods
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value

  // Here you could emit an event or call an API to persist the favorite status
  console.log(`Course ${props.course.id} favorite status:`, isFavorite.value)

  // Optional: Emit event to parent
  // emit('favorite-toggled', { courseId: props.course.id, isFavorite: isFavorite.value })
}

const getBadgeClasses = (type: string): string => {
  switch (type) {
    case 'free':
      return 'bg-green-500 text-white'
    case 'hot':
      return 'bg-red-500 text-white'
    case 'new':
      return 'bg-blue-500 text-white'
    case 'discount':
      return 'bg-orange text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

const formatPrice = (price: number): string => {
  if (price === 0) return 'رایگان'
  return price.toLocaleString('fa-IR')
}

const handleCourseClick = () => {
  // Navigate to course detail page
  navigateTo(`/courses/${props.course.slug || props.course.id}`)
}

// Optional: Watch for prop changes
watch(() => props.course.isFavorite, (newValue) => {
  if (newValue !== undefined) {
    isFavorite.value = newValue
  }
})
</script>