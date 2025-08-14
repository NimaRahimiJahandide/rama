export interface ScrollingTextItem {
  id: number
  text: string
  icon?: string
}

export const SCROLLING_TEXT_DATA: ScrollingTextItem[] = [
  {
    id: 1,
    text: "سازمان نظام پزشکی ایران",
    icon: "/icons/medical-icon.png"
  },
  {
    id: 2,
    text: "سازمان نظام پزشکی ایران",
    icon: "/icons/medical-icon.png"
  },
  {
    id: 3,
    text: "سازمان نظام پزشکی ایران", 
    icon: "/icons/medical-icon.png"
  },
  {
    id: 4,
    text: "سازمان نظام پزشکی ایران",
    icon: "/icons/medical-icon.png"
  },
  {
    id: 5,
    text: "سازمان نظام پزشکی ایران",
    icon: "/icons/medical-icon.png"
  }
]

export const SCROLLING_CONFIG = {
  animationDuration: '30s', // Duration for one complete cycle
  itemSpacing: 'gap-8', // Spacing between items
  containerHeight: 'h-16', // Container height
  textSize: 'text-base lg:text-lg',
  backgroundColor: '#FDF2E9', // Light orange background like in image
  textColor: 'text-gray-700',
  pauseOnHover: true
}