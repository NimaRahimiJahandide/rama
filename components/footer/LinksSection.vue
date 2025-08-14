<template>
  <div class="space-y-4">
    <!-- Section Title -->
    <h3 class="text-white font-bold text-base lg:text-lg">
      <img v-if="section.image" :src="section.image" :alt="section.title">
      <span v-if="!section.image">{{ section.title }}</span>
    </h3>

    <!-- Links List -->
    <ul class="space-y-2 lg:space-y-3">
      <li v-for="link in section.links" :key="link.id">
        <NuxtLink v-if="!link.external && !link.url.startsWith('http')" :to="link.url"
          class="text-white text-sm lg:text-base font-normal transition-colors duration-200 hover:underline decoration-1 underline-offset-2 inline-block"
          @click="handleLinkClick(link.title, link.url)">
          {{ link.title }}
        </NuxtLink>
        
        <a v-else :href="link.url" :title="link.title" target="_blank" rel="noopener noreferrer"
          class="text-white text-sm lg:text-base font-normal transition-colors duration-200 hover:underline decoration-1 underline-offset-2 inline-block"
          @click="handleLinkClick(link.title, link.url)">
          {{ link.title }}
          <Icon name="mingcute:external-link-line" size="14" class="inline mr-1" />
          
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { FooterSection } from '~/constants/footer'
import { useFooter } from '~/composables/useFooter'

const {
  footerSections,
  companyInfo,
  getMainSocialLinks,
  getSecondarySocialLinks,
  handleSocialLinkClick,
  handleFooterLinkClick
} = useFooter()

interface Props {
  section: FooterSection
}

defineProps<Props>()

const emit = defineEmits<{
  linkClick: [linkTitle: string, url: string]
}>()

const handleLinkClick = (linkTitle: string, url: string) => {
  emit('linkClick', linkTitle, url)
}</script>