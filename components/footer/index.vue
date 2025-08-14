<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <footer
      class="bg-[linear-gradient(70.99deg,_#030E4C_-38.13%,_#00127F_66.09%)] rounded-[40px] px-4 lg:px-[50px] pt-10 mx-auto relative overflow-hidden">
      <!-- Main Footer Content -->
      <div class="relative mx-auto">

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <!-- Footer Sections -->
          <FooterLinksSection v-for="section in footerSections" :key="section.id" :section="section"
            @link-click="handleFooterLinkClick" />
        </div>
      </div>

      <!-- Contact Information Bar -->
      <FooterContactInfo />
    </footer>
    <!-- Copyright -->
    <div class="text-[#797979] lg:flex items-center justify-center hidden text-xs py-5">
      copyright 2022 publisher representatives limited. all rights reserved
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFooter } from '~/composables/useFooter'

const {
  footerSections,
  companyInfo,
  getMainSocialLinks,
  getSecondarySocialLinks,
  handleSocialLinkClick,
  handleFooterLinkClick
} = useFooter()

// SEO: Add structured data for organization
// useJsonld({
//   '@context': 'https://schema.org',
//   '@type': 'EducationalOrganization',
//   name: 'آکادمی راما',
//   alternateName: 'Academy Rama',
//   url: 'https://academyrama.com',
//   logo: 'https://academyrama.com/images/logo.png',
//   contactPoint: {
//     '@type': 'ContactPoint',
//     telephone: '+98-713-630-5007',
//     contactType: 'customer service',
//     availableLanguage: ['Persian', 'English']
//   },
//   sameAs: [
//     'https://t.me/academyrama',
//     'https://wa.me/07136305007',
//     'https://twitter.com/academyrama',
//     'https://linkedin.com/company/academyrama',
//     'https://youtube.com/@academyrama',
//     'https://instagram.com/academyrama'
//   ]
// })
</script>