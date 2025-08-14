import { FAQ_DATA, type FaqItem } from '~/constants/home/faq'

export const useFaqContent = () => {
  const faqContent = ref({
    title: "سوالات متداول",
    viewAllText: "مشاهده همه",
    icon: "mingcute:question-fill",
    items: FAQ_DATA
  })

  // Function to get featured FAQ items (for homepage display)
  const getFeaturedFaqItems = (limit: number = 6) => {
    return faqContent.value.items.slice(0, limit)
  }

  // Function to get FAQ items by category
  const getFaqItemsByCategory = (category: string) => {
    return faqContent.value.items.filter(item => item.category === category)
  }

  // Function to get FAQ item by ID
  const getFaqItemById = (id: number): FaqItem | undefined => {
    return faqContent.value.items.find(item => item.id === id)
  }

  // Function to search FAQ items
  const searchFaqItems = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return faqContent.value.items.filter(item => 
      item.question.toLowerCase().includes(lowercaseQuery) ||
      item.answer.toLowerCase().includes(lowercaseQuery) ||
      (item.category && item.category.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Function to get unique categories
  const getFaqCategories = () => {
    const categories = faqContent.value.items
      .map(item => item.category)
      .filter((category, index, array) => 
        category && array.indexOf(category) === index
      )
    return categories as string[]
  }

  // Function to add new FAQ item (for dynamic content)
  const addFaqItem = (item: Omit<FaqItem, 'id'>) => {
    const newId = Math.max(...faqContent.value.items.map(i => i.id)) + 1
    const newItem: FaqItem = {
      ...item,
      id: newId
    }
    
    faqContent.value.items.unshift(newItem) // Add to beginning
    return newItem
  }

  // Function to update FAQ item
  const updateFaqItem = (itemId: number, updates: Partial<FaqItem>) => {
    const itemIndex = faqContent.value.items.findIndex(i => i.id === itemId)
    if (itemIndex !== -1) {
      Object.assign(faqContent.value.items[itemIndex], updates)
    }
  }

  // Function to remove FAQ item
  const removeFaqItem = (itemId: number) => {
    const itemIndex = faqContent.value.items.findIndex(i => i.id === itemId)
    if (itemIndex !== -1) {
      faqContent.value.items.splice(itemIndex, 1)
    }
  }

  // Function to update FAQ content (for CMS integration)
  const updateFaqContent = (newContent: Partial<typeof faqContent.value>) => {
    Object.assign(faqContent.value, newContent)
  }

  return {
    faqContent: readonly(faqContent),
    getFeaturedFaqItems,
    getFaqItemsByCategory,
    getFaqItemById,
    searchFaqItems,
    getFaqCategories,
    addFaqItem,
    updateFaqItem,
    removeFaqItem,
    updateFaqContent
  }
}