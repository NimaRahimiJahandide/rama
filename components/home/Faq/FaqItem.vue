<template>
  <div class="bg-[#F5F5F5] rounded-xl overflow-hidden transition-all duration-300">
    <!-- Question Header -->
    <button
      @click="toggleOpen"
      class="w-full px-4 py-4 lg:px-6 lg:py-5 text-right focus:outline-none  transition-colors duration-200 cursor-pointer"
      type="button"
      :aria-expanded="isOpen"
      :aria-controls="`faq-answer-${item.id}`"
    >
      <div class="flex items-center justify-between gap-4">
        <!-- Question Text -->
        <h3 class="text-base lg:text-lg font-medium text-gray-900 text-right leading-relaxed">
          {{ item.question }}
        </h3>
        
        <!-- Toggle Icon -->
        <div 
          class="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': isOpen }"
        >
          <Icon 
            name="mingcute:down-line" 
            size="20" 
            class="text-gray-600"
          />
        </div>
      </div>
    </button>
    
    <!-- Answer Content -->
    <div
      :id="`faq-answer-${item.id}`"
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="contentStyle"
      :aria-hidden="!isOpen"
    >
      <div 
        ref="contentRef"
        class="px-4 pb-4 lg:px-6 lg:pb-5"
      >
        <div class="pt-2 border-t border-[#E3E3E3]">
          <p class="text-sm lg:text-base text-[#2E2E2E] text-justify leading-relaxed">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/constants/home/faq'

interface Props {
  item: FaqItem
  isOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false
})

const emit = defineEmits<{
  toggle: [itemId: number]
}>()

// Template refs
const contentRef = ref<HTMLElement | null>(null)

// Computed properties
const contentStyle = computed(() => {
  if (!process.client) return {}
  
  if (props.isOpen && contentRef.value) {
    const height = contentRef.value.scrollHeight
    return {
      maxHeight: `${height}px`,
      opacity: '1'
    }
  }
  
  return {
    maxHeight: '0px',
    opacity: '0'
  }
})

// Methods
const toggleOpen = () => {
  emit('toggle', props.item.id)
}

// Watch for open state changes to ensure proper height calculation
watch(() => props.isOpen, (newVal) => {
  if (newVal && contentRef.value) {
    // Small delay to ensure DOM is updated
    nextTick(() => {
      if (contentRef.value) {
        contentRef.value.scrollHeight
      }
    })
  }
})
</script>