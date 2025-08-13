<template>
  <div class="bg-[#F2F3F7] border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-12 text-sm">
        <!-- Contact Info -->
        <div class="flex items-center justify-between max-lg:w-full gap-6">
          <div class="flex items-center gap-1.5">
            <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
            <Icon name="ic:baseline-email" size="18" style="color: #1E2329" />
          </div>
          <div class="flex items-center gap-1.5">
            <a :href="`tel:${contactInfo.phone}`" dir="ltr">{{ contactInfo.phone }}</a>
            <Icon name="bxs:phone-call" size="18" style="color: #1E2329" />
          </div>
        </div>

        <!-- Social Media Icons -->
        <div class="hidden lg:flex items-center gap-3">
          <template v-for="social in socialLinks" :key="social.id">
            <a :href="social.href" target="_blank">
              <Icon :name="getSocialIcon(social.icon)" size="20" style="color: #1E2329" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { socialLinks, contactInfo } = useNavigation()

// Social media icons mapping
const getSocialIcon = (iconName: string) => {
  const iconMap: Record<string, any> = {
    telegram: 'ic:baseline-telegram',
    instagram: 'ri:instagram-fill',
    whatsapp: 'ri:whatsapp-fill',
  }
  
  return iconMap[iconName] || 'div'
}
</script>