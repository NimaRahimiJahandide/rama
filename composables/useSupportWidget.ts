export interface SupportOption {
  id: string
  title: string
  phone?: string
  url?: string
  icon: string
  iconColor: string
  description?: string
}

export interface SupportWidgetConfig {
  enabled: boolean
  position: 'bottom-right' | 'bottom-left'
  options: SupportOption[]
}

export const useSupportWidget = () => {
  // Default configuration
  const defaultConfig: SupportWidgetConfig = {
    enabled: true,
    position: 'bottom-right',
    options: [
      {
        id: 'call-center',
        title: 'مرکز تماس',
        phone: '+98-17-324-7362',
        icon: 'mage:phone-call-fill',
        iconColor: 'text-[#FF6B24]',
        description: 'تماس مستقیم'
      },
      {
        id: 'technical-support',
        title: 'تماس با کارشناس فنی',
        phone: '+98-17-324-7362',
        icon: 'mage:phone-call-fill',
        iconColor: 'text-[#061CA2]',
        description: 'پشتیبانی فنی'
      },
      {
        id: 'whatsapp',
        title: 'پیام در واتساپ',
        url: 'https://wa.me/98713247362?text=سلام، نیاز به راهنمایی دارم',
        icon: 'ri:whatsapp-fill',
        iconColor: 'text-[#00AA58]',
        description: 'ارسال پیام فوری'
      }
    ]
  }

  // Reactive configuration
  const config = ref<SupportWidgetConfig>(defaultConfig)

  // Format phone number for tel: link
  const formatPhoneForTel = (phone: string): string => {
    return `tel:${phone.replace(/\D/g, '')}`
  }

  // Format phone number for display
  const formatPhoneForDisplay = (phone: string): string => {
    return phone.replace(/(\+\d{2})(\d{2})(\d{3})(\d{4})/, '$1-$2-$3-$4')
  }

  // Handle option click with analytics
  const handleOptionClick = (option: SupportOption): void => {
    // Track user interaction
    console.log(`Support widget: ${option.id} clicked`)
    
    // You can add analytics tracking here
    // Example: gtag('event', 'support_widget_click', { option_id: option.id })
  }

  // Update configuration
  const updateConfig = (newConfig: Partial<SupportWidgetConfig>): void => {
    config.value = { ...config.value, ...newConfig }
  }

  // Add new support option
  const addSupportOption = (option: SupportOption): void => {
    config.value.options.push(option)
  }

  // Remove support option
  const removeSupportOption = (optionId: string): void => {
    config.value.options = config.value.options.filter(opt => opt.id !== optionId)
  }

  // Get WhatsApp URL with custom message
  const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
    const defaultMessage = 'سلام، نیاز به راهنمایی دارم'
    const finalMessage = message || defaultMessage
    return `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(finalMessage)}`
  }

  return {
    // State
    config: readonly(config),
    
    // Utility functions
    formatPhoneForTel,
    formatPhoneForDisplay,
    getWhatsAppUrl,
    
    // Event handlers
    handleOptionClick,
    
    // Configuration methods
    updateConfig,
    addSupportOption,
    removeSupportOption
  }
}