import { 
  FOOTER_SECTIONS, 
  SOCIAL_LINKS, 
  CONTACT_INFO, 
  COMPANY_INFO,
  type FooterSection,
  type SocialLink,
  type ContactInfo
} from '~/constants/footer'

export const useFooter = () => {
  const footerSections = ref<FooterSection[]>(FOOTER_SECTIONS)
  const socialLinks = ref<SocialLink[]>(SOCIAL_LINKS)
  const contactInfo = ref<ContactInfo>(CONTACT_INFO)
  const companyInfo = ref(COMPANY_INFO)

  // Get current year for copyright
  const currentYear = computed(() => {
    return new Date().getFullYear()
  })

  // Get copyright text
  const copyrightText = computed(() => {
    return `Copyright ${currentYear.value} publisher representatives limited. All rights reserved`
  })

  // Get social links for specific platforms
  const getSocialLinksByPlatforms = (platforms: string[]) => {
    return socialLinks.value.filter(link => 
      platforms.includes(link.platform)
    )
  }

  // Get footer section by ID
  const getFooterSectionById = (sectionId: string) => {
    return footerSections.value.find(section => section.id === sectionId)
  }

  // Format phone number for display
  const formatPhoneForDisplay = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
  }

  // Format phone number for tel: link
  const formatPhoneForTel = (phone: string) => {
    return `tel:+98${phone.replace(/\D/g, '')}`
  }

  // Format email for mailto: link
  const formatEmailForMailto = (email: string, subject?: string) => {
    const mailtoLink = `mailto:${email}`
    return subject ? `${mailtoLink}?subject=${encodeURIComponent(subject)}` : mailtoLink
  }

  // Handle social link click (for analytics)
  const handleSocialLinkClick = (socialLink: SocialLink) => {
    // You can add analytics tracking here
    console.log(`Social link clicked: ${socialLink.platform}`)
    
    // Open in new tab
    window.open(socialLink.url, '_blank', 'noopener,noreferrer')
  }

  // Handle footer link click (for analytics)
  const handleFooterLinkClick = (linkTitle: string, url: string) => {
    // You can add analytics tracking here
    console.log(`Footer link clicked: ${linkTitle}`)
    
    // If external link, open in new tab
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Get main social links (Telegram and WhatsApp)
  const getMainSocialLinks = () => {
    return getSocialLinksByPlatforms(['telegram', 'whatsapp'])
  }

  // Get secondary social links
  const getSecondarySocialLinks = () => {
    return getSocialLinksByPlatforms(['twitter', 'linkedin', 'youtube', 'dribbble', 'instagram'])
  }

  // Update footer content (for CMS integration)
  const updateFooterContent = (updates: {
    sections?: FooterSection[]
    socialLinks?: SocialLink[]
    contactInfo?: ContactInfo
    companyInfo?: typeof COMPANY_INFO
  }) => {
    if (updates.sections) {
      footerSections.value = updates.sections
    }
    if (updates.socialLinks) {
      socialLinks.value = updates.socialLinks
    }
    if (updates.contactInfo) {
      contactInfo.value = { ...contactInfo.value, ...updates.contactInfo }
    }
    if (updates.companyInfo) {
      companyInfo.value = { ...companyInfo.value, ...updates.companyInfo }
    }
  }

  return {
    // Reactive data
    footerSections: readonly(footerSections),
    socialLinks: readonly(socialLinks),
    contactInfo: readonly(contactInfo),
    companyInfo: readonly(companyInfo),
    
    // Computed properties
    currentYear,
    copyrightText,
    
    // Utility functions
    getSocialLinksByPlatforms,
    getFooterSectionById,
    formatPhoneForDisplay,
    formatPhoneForTel,
    formatEmailForMailto,
    getMainSocialLinks,
    getSecondarySocialLinks,
    
    // Event handlers
    handleSocialLinkClick,
    handleFooterLinkClick,
    
    // Management functions
    updateFooterContent
  }
}