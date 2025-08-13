import { NAVIGATION_MENU, SOCIAL_LINKS, CONTACT_INFO } from '~/constants/navigation'

export const useNavigation = () => {
  const navigationMenu = readonly(ref(NAVIGATION_MENU))
  const socialLinks = readonly(ref(SOCIAL_LINKS))
  const contactInfo = readonly(ref(CONTACT_INFO))

  const getActiveMenuItem = () => {
    return navigationMenu.value.find(item => item.active)
  }

  const setActiveMenuItem = (id: number) => {
    console.log('Setting active menu item:', id)
  }

  return {
    navigationMenu,
    socialLinks,
    contactInfo,
    getActiveMenuItem,
    setActiveMenuItem
  }
}