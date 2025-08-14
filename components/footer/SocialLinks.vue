<template>
  <div class="flex items-center justify-center gap-3 lg:gap-4">
    <a
      v-for="socialLink in socialLinks"
      :key="socialLink.id"
      :href="socialLink.url"
      :title="socialLink.name"
      :aria-label="`رفتن به ${socialLink.name}`"
      target="_blank"
      rel="noopener noreferrer"
      class="group w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
      @click="handleClick(socialLink)"
    >
      <Icon 
        :name="socialLink.icon" 
        :size="size" 
        class="text-white group-hover:text-white transition-colors duration-300"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { SocialLink } from '~/constants/footer'

interface Props {
  socialLinks: SocialLink[]
  size?: string | number
  variant?: 'default' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  size: '20',
  variant: 'default'
})

const emit = defineEmits<{
  socialLinkClick: [socialLink: SocialLink]
}>()

const handleClick = (socialLink: SocialLink) => {
  emit('socialLinkClick', socialLink)
}
</script>