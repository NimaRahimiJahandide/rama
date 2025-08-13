<template>
  <div>
    <section
      class="relative mx-auto max-w-6xl lg:h-[616px] max-lg:bg-[#001595] lg:bg-[url(/images/Mask.svg)] rounded-3xl bg-cover bg-no-repeat flex items-center overflow-hidden py-2.5 max-lg:py-[65px]">
      <div class="px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left Side - slider -->
          <section class="order-2 lg:order-2 hidden lg:flex justify-center lg:justify-start">
            <div class="relative w-full max-w-md mx-auto">
              <!-- Slider Container -->
              <div class="relative rounded-2xl p-6">
                <!-- Slide Content -->
                <div v-for="(slide, index) in heroContent.sliders" :key="slide.id" v-show="currentSlide === index"
                  class="text-center">

                  <!-- Slide Image -->
                  <div class="mb-6">
                    <img :src="slide.image" :alt="slide.title" class="w-full mx-auto object-contain rounded-xl">
                  </div>

                  <div class="border border-white rounded-3xl p-4">
                    <!-- Slide Title -->
                    <h3 class="text-white text-right text-xl font-semibold mb-4">
                      {{ slide.title }}
                    </h3>

                    <!-- Slide Description -->
                    <p class="text-white/80 text-justify text-sm leading-relaxed mb-6">
                      {{ slide.description }}
                    </p>

                    <div class="flex justify-between">
                      <!-- CTA Button -->
                      <button class="text-orange px-6 py-2.5 rounded-lg font-medium transition-colors duration-200">
                        <Icon name="mingcute:right-line" size="22" style="color: #FF6B24" />
                        اطلاعات بیشتر و خرید
                      </button>
                      <!-- Dots Indicator -->
                      <div v-if="heroContent.sliders.length > 1" class="flex justify-center mt-6 gap-2">
                        <button v-for="(slide, index) in heroContent.sliders" :key="`dot-${slide.id}`"
                          @click="currentSlide = index" :class="[
                            'w-2 h-2 rounded-full transition-all duration-200',
                            currentSlide === index
                              ? 'bg-orange w-6'
                              : 'bg-white/40 hover:bg-white/60 w-2.5'
                          ]">
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Right Side - Content -->
          <section class="order-1 lg:order-1 text-white flex flex-col justify-between h-full">
            <div class="flex flex-col gap-[5px]">
              <button
                class="flex gap-2.5 p-2.5 items-center justify-center bg-[#FFFFFF1F] backdrop-blur-sm w-[131px] rounded-[10px]">
                <img :src="heroContent.badge" :alt="heroContent.badge">
                <img :src="heroContent.badgeIcon" :alt="heroContent.badge">
              </button>
              <h2 class="text-orange lg:text-[50px] text-[40px] leading-[58px] font-semibold">
                {{ heroContent.title.normal }}
              </h2>
              <h3 class="text-white lg:text-[50px] text-[40px] leading-[58px] font-semibold mb-[10px]">
                {{ heroContent.title.highlighted }}
              </h3>
              <img class="w-[210px] text-left self-end" :src="heroContent.title.subtitle" alt="آکادمی راما">
            </div>

            <!-- contact -->
            <section class="hidden lg:flex justify-between gap-5 items-center mt-auto">
              <div class="text-[#1E2329] flex gap-[15px]">
                <img class="border-l border-[#E3E3E3] pl-[15px]" src="/icons/Calling.svg" alt="Calling">
                <span class="flex flex-col">
                  <h3 class="lg:text-[18px] text-base font-semibold">میخوای راهنماییت کنم؟</h3>
                  <p class="lg:text-[14px] text-[10px]">با مشاورین راما به همه جواب سوال هایتان میرسید.</p>
                </span>
              </div>
              <button class="bg-orange rounded-3xl ml-auto px-6 py-3">تماس</button>
            </section>
          </section>

        </div>
      </div>

    </section>

    <!-- mobile -->
    <div class="lg:hidden flex flex-col pt-8">
      <!-- contact -->
      <section class="flex justify-between w-full gap-5 items-center mt-auto">
        <div class="text-[#1E2329] flex gap-[15px]">
          <img class="border-l border-[#E3E3E3] pl-[15px]" src="/icons/Calling.svg" alt="Calling">
          <span class="flex flex-col">
            <h3 class="lg:text-[18px] text-base font-semibold">میخوای راهنماییت کنم؟</h3>
            <p class="lg:text-[14px] text-[10px]">با مشاورین راما به همه جواب سوال هایتان میرسید.</p>
          </span>
        </div>
        <button class="bg-orange rounded-3xl text-white px-6 py-3">تماس</button>
      </section>

      <!-- slider -->
      <div class="relative w-full  mx-auto">
        <!-- Slider Container -->
        <div class="relative rounded-2xl p-6">
          <!-- Slide Content -->
          <div v-for="(slide, index) in heroContent.sliders" :key="slide.id" v-show="currentSlide === index"
            class="text-center">

            <!-- Slide Image -->
            <div class="mb-6">
              <img :src="slide.image" :alt="slide.title" class="w-full mx-auto object-contain rounded-xl">
            </div>

            <div class="border border-[#BEBDC5] rounded-3xl p-4">
              <!-- Slide Title -->
              <h3 class="text-[#1E2329] text-right text-xl font-semibold mb-4">
                {{ slide.title }}
              </h3>

              <!-- Slide Description -->
              <p class="text-[#1E2329] text-justify text-sm leading-relaxed mb-6">
                {{ slide.description }}
              </p>

              <div class="flex justify-between">
                <!-- CTA Button -->
                <button class="text-orange px-6 py-2.5 rounded-lg font-medium transition-colors duration-200">
                  <Icon name="mingcute:right-line" size="22" style="color: #FF6B24" />
                  اطلاعات بیشتر و خرید
                </button>
                <!-- Dots Indicator -->
                <div v-if="heroContent.sliders.length > 1" class="flex justify-center mt-6 gap-2">
                  <button v-for="(slide, index) in heroContent.sliders" :key="`dot-${slide.id}`"
                    @click="currentSlide = index" :class="[
                      'w-2 h-2 rounded-full transition-all duration-200',
                      currentSlide === index
                        ? 'bg-orange w-6'
                        : 'bg-[#1E23295E] w-2.5'
                    ]">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeroContent } from '~/composables/home/useHeroContent'

const { heroContent } = useHeroContent()
// Add this script section to your Hero component
const currentSlide = ref(0)

// Auto-slide functionality
const autoSlideInterval = ref(null)

const startAutoSlide = () => {
  if (heroContent.value.sliders.length > 1) {
    autoSlideInterval.value = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds
  }
}

const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value)
    autoSlideInterval.value = null
  }
}

const nextSlide = () => {
  if (heroContent.value.sliders.length > 0) {
    currentSlide.value = (currentSlide.value + 1) % heroContent.value.sliders.length
  }
}

// const previousSlide = () => {
//   if (heroContent.value.sliders.length > 0) {
//     currentSlide.value = currentSlide.value === 0
//       ? heroContent.value.sliders.length - 1
//       : currentSlide.value - 1
//   }
// }

// Start auto-slide when component mounts
onMounted(() => {
  startAutoSlide()
})

// Clean up interval when component unmounts
onUnmounted(() => {
  stopAutoSlide()
})

// Pause auto-slide on hover
const handleMouseEnter = () => stopAutoSlide()
const handleMouseLeave = () => startAutoSlide()

</script>
