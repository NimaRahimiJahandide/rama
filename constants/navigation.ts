export const NAVIGATION_MENU = [
  { 
    id: 1, 
    title: "دسته بندی دوره ها", 
    href: "/courses",
    hasDropdown: true,
    dropdownItems: [
      { id: 11, title: "دپارتمان", href: "/courses/design" },
      { id: 12, title: "دپارتمان", href: "/courses/travel" },
      { id: 13, title: "دپارتمان", href: "/courses/design-2" },
      { id: 14, title: "آموزش در سفر", href: "/courses/design-3" },
      { id: 15, title: "دپارتمان", href: "/courses/design-4" },
      { id: 16, title: "دپارتمان", href: "/courses/design-5" },
      { id: 17, title: "دپارتمان", href: "/courses/design-6" },
    ]
  },
  { id: 2, title: "صفحه اصلی", href: "/", active: true },
  { id: 3, title: "فروشگاه", href: "/shop" },
  {
    id: 4,
    title: "درباره ما",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { id: 41, title: "مجوزها", href: "/about/licenses" },
      { id: 42, title: "تفاهم نامه و قراردادها", href: "/about/contracts" },
      { id: 43, title: "سوالات متداول", href: "/about/faq" },
      { id: 44, title: "تماس با ما", href: "/contact" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { id: 1, name: "whatsapp", href: "https://whatsapp.com", icon: "whatsapp" },
  {
    id: 2,
    name: "instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  { id: 3, name: "telegram", href: "https://telegram.org", icon: "telegram" },
] as const;

export const CONTACT_INFO = {
  phone: "+9817 324 7362",
  email: "Username@gmail.com",
} as const;