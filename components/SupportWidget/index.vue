<template>
  <div v-if="config.enabled" :class="positionClasses">
    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform translate-y-4 scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-4 scale-95"
    >
      <div class="px-[18px]"
        v-if="isOpen"
        :class="dropdownClasses"
      >
        <!-- Support Options -->
        <template v-for="(option, index) in config.options" :key="option.id">
          <component
            :is="option.phone ? 'a' : 'a'"
            :href="option.phone ? formatPhoneForTel(option.phone) : option.url"
            :target="option.url ? '_blank' : undefined"
            :rel="option.url ? 'noopener noreferrer' : undefined"
            class="flex items-center gap-3 py-3 transition-colors duration-200 border-b border-[#E3E3E3] last:border-b-0 justify-between"
            @click="() => handleSupportOptionClick(option)"
          >
          <div class="flex items-center gap-2.5">
            <div :class="`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`">
              <Icon :name="option.icon" size="20" :class="option.iconColor" />
            </div>
            <div class="text-base font-medium">{{ option.title }}</div>
          </div>
            <div class="flex-1 flex justify-end">
              <div v-if="option.phone" class="text-base font-mono" dir="ltr">
                {{ formatPhoneForDisplay(option.phone) }}
              </div>
            </div>
          </component>
        </template>
      </div>
    </Transition>

    <!-- Main Support Button -->
    <div data-support-widget class="relative">
      <button
        @click="toggleWidget"
        class="w-[70px] h-[58px] lg:w-[96px] lg:h-[80px] flex items-center justify-center transition-all duration-300  group z-10 cursor-pointer"
        aria-label="پشتیبانی"
      >
        <img src="/icons/SupportWidget.webp" alt="SupportWidget">
      </button>
   
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupportWidget, type SupportOption } from '~/composables/useSupportWidget'

// Use the support widget composable
const {
  config,
  formatPhoneForTel,
  formatPhoneForDisplay,
  handleOptionClick
} = useSupportWidget()

// Reactive state
const isOpen = ref(false)

// Computed classes for positioning
const positionClasses = computed(() => {
  const baseClasses = 'fixed z-50'
  return config.value.position === 'bottom-left' 
    ? `${baseClasses} bottom-6 left-6`
    : `${baseClasses} bottom-6 right-[27px]`
})

const dropdownClasses = computed(() => {
  const baseClasses = 'absolute bottom-20 bg-white shadow-[var(--shadow-custom-blue)] rounded-[25px] overflow-hidden w-[360px] mb-2'
  return config.value.position === 'bottom-left'
    ? `${baseClasses} left-0`
    : `${baseClasses} right-0`
})

// Methods
const toggleWidget = (): void => {
  isOpen.value = !isOpen.value
}

const handleSupportOptionClick = (option: SupportOption): void => {
  // Close widget after clicking an option
  isOpen.value = false
  
  // Handle analytics and tracking
  handleOptionClick(option)
}

// Close widget when clicking outside
const closeOnClickOutside = (event: Event): void => {
  const target = event.target as Element
  if (!target.closest('[data-support-widget]')) {
    isOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})

</script>