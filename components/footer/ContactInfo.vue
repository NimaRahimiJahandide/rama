<template>
  <div class="py-4 lg:py-6 border-t border-[#001595]">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Desktop Layout -->
      <div class="hidden lg:flex items-center justify-between">
        <!-- Contact Details -->
        <div class="flex w-full justify-between">
          <div class="flex gap-8">
            <!-- Phone -->
            <div class="flex items-center gap-2">
              <span class="text-white text-sm">تلفن:</span>
              <a :href="formatPhoneForTel(contactInfo.phone)"
                class="text-white font-medium text-sm transition-colors duration-200 font-mono" dir="ltr">
                {{ formatPhoneForDisplay(contactInfo.phone) }}
              </a>
              <span class="text-white text-xs">
                ({{ contactInfo.phoneHours }})
              </span>
            </div>
            <!-- Email -->
            <div class="flex items-center gap-2">
              <span class="text-white text-sm">ایمیل:</span>
              <a :href="formatEmailForMailto(contactInfo.email, 'استعلام از آکادمی راما')"
                class="text-white font-medium text-sm transition-colors duration-200">
                {{ contactInfo.email }}
              </a>
            </div>
          </div>
          <div class="flex gap-[15px]">
            <button class="flex items-center gap-2 cursor-pointer bg-[#F2F2F2] px-[12px] py-2 rounded-[10px]">
              <Icon name="ic:baseline-whatsapp" size="22" style="color: #00AA58" />
              پیام در واتساپ
            </button>
            <button class="flex items-center gap-2 cursor-pointer bg-[#F2F2F2] px-[12px] py-2 rounded-[10px]">
              <Icon name="ic:baseline-telegram" size="22" style="color: #22B5F4" />
              پیام در تلگرام
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="lg:hidden space-y-4">
        <!-- Contact Details -->
        <div class="space-y-3">
          <!-- Email -->
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">ایمیل:</span>
            <a :href="formatEmailForMailto(contactInfo.email, 'استعلام از آکادمی راما')"
              class="text-white font-medium text-sm transition-colors duration-200">
              {{ contactInfo.email }}
            </a>
          </div>

          <!-- Phone -->
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">تلفن:</span>
            <a :href="formatPhoneForTel(contactInfo.phone)"
              class="text-white font-medium text-sm transition-colors duration-200 font-mono" dir="ltr">
              {{ formatPhoneForDisplay(contactInfo.phone) }}
            </a>
            <div class="text-center text-white text-xs">
              {{ contactInfo.phoneHours }}
            </div>
          </div>

             <div class="flex gap-[15px]">
            <button class="flex items-center gap-2 cursor-pointer bg-[#F2F2F2] px-[12px] py-2 rounded-[10px]">
              <Icon name="ic:baseline-whatsapp" size="22" style="color: #00AA58" />
              پیام در واتساپ
            </button>
            <button class="flex items-center gap-2 cursor-pointer bg-[#F2F2F2] px-[12px] py-2 rounded-[10px]">
              <Icon name="ic:baseline-telegram" size="22" style="color: #22B5F4" />
              پیام در تلگرام
            </button>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center text-white text-xs pt-2">
          {{ copyrightText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFooter } from '~/composables/useFooter'

const {
  contactInfo,
  copyrightText,
  formatEmailForMailto,
  formatPhoneForTel,
  formatPhoneForDisplay
} = useFooter()
</script>