import { SCROLLING_TEXT_DATA, SCROLLING_CONFIG, type ScrollingTextItem } from '~/constants/home/scrollingText'

export const useScrollingText = () => {
  const scrollingContent = ref({
    items: SCROLLING_TEXT_DATA,
    config: SCROLLING_CONFIG,
    isVisible: true,
    isPaused: false
  })

  // Function to get repeated items for continuous scrolling
  const getRepeatedItems = (repeatCount: number = 3) => {
    const items = scrollingContent.value.items
    const repeated = []
    
    for (let i = 0; i < repeatCount; i++) {
      repeated.push(...items.map(item => ({
        ...item,
        id: item.id + (i * 1000) // Unique IDs for repeated items
      })))
    }
    
    return repeated
  }

  // Function to pause/resume animation
  const togglePause = () => {
    scrollingContent.value.isPaused = !scrollingContent.value.isPaused
  }

  // Function to set pause state
  const setPaused = (paused: boolean) => {
    scrollingContent.value.isPaused = paused
  }

  // Function to show/hide component
  const setVisible = (visible: boolean) => {
    scrollingContent.value.isVisible = visible
  }

  // Function to update animation duration
  const setAnimationDuration = (duration: string) => {
    scrollingContent.value.config.animationDuration = duration
  }

  // Function to add new text item
  const addTextItem = (item: Omit<ScrollingTextItem, 'id'>) => {
    const newId = Math.max(...scrollingContent.value.items.map(i => i.id)) + 1
    const newItem: ScrollingTextItem = {
      ...item,
      id: newId
    }
    
    scrollingContent.value.items.push(newItem)
    return newItem
  }

  // Function to update text item
  const updateTextItem = (itemId: number, updates: Partial<ScrollingTextItem>) => {
    const itemIndex = scrollingContent.value.items.findIndex(i => i.id === itemId)
    if (itemIndex !== -1) {
      Object.assign(scrollingContent.value.items[itemIndex], updates)
    }
  }

  // Function to remove text item
  const removeTextItem = (itemId: number) => {
    const itemIndex = scrollingContent.value.items.findIndex(i => i.id === itemId)
    if (itemIndex !== -1) {
      scrollingContent.value.items.splice(itemIndex, 1)
    }
  }

  // Function to update configuration
  const updateConfig = (newConfig: Partial<typeof SCROLLING_CONFIG>) => {
    Object.assign(scrollingContent.value.config, newConfig)
  }

  // Computed property for animation styles
  const animationStyle = computed(() => ({
    animationDuration: scrollingContent.value.config.animationDuration,
    animationPlayState: scrollingContent.value.isPaused ? 'paused' : 'running'
  }))

  return {
    scrollingContent: readonly(scrollingContent),
    getRepeatedItems,
    togglePause,
    setPaused,
    setVisible,
    setAnimationDuration,
    addTextItem,
    updateTextItem,
    removeTextItem,
    updateConfig,
    animationStyle
  }
}