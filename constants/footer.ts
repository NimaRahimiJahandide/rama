export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  platform:
    | "telegram"
    | "whatsapp"
    | "twitter"
    | "linkedin"
    | "youtube"
    | "dribbble"
    | "instagram";
}

export interface FooterLink {
  id: string;
  title: string;
  url: string;
  external?: boolean;
}

export interface FooterSection {
  id: string;
  title: string;
  image?: string;
  links?: FooterLink[];
  social?: SocialLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHours: string;
  address?: string;
}

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "telegram",
    name: "تلگرام",
    url: "https://t.me/academyrama",
    icon: "mingcute:telegram-line",
    platform: "telegram",
  },
  {
    id: "whatsapp",
    name: "واتساپ",
    url: "https://wa.me/07136305007",
    icon: "mingcute:whatsapp-line",
    platform: "whatsapp",
  },
  {
    id: "twitter",
    name: "توییتر",
    url: "https://twitter.com/academyrama",
    icon: "mingcute:twitter-line",
    platform: "twitter",
  },
  {
    id: "linkedin",
    name: "لینکدین",
    url: "https://linkedin.com/company/academyrama",
    icon: "mingcute:linkedin-line",
    platform: "linkedin",
  },
  {
    id: "youtube",
    name: "یوتیوب",
    url: "https://youtube.com/@academyrama",
    icon: "mingcute:youtube-line",
    platform: "youtube",
  },
  {
    id: "dribbble",
    name: "دریبل",
    url: "https://dribbble.com/academyrama",
    icon: "mingcute:dribbble-line",
    platform: "dribbble",
  },
  {
    id: "instagram",
    name: "اینستاگرام",
    url: "https://instagram.com/academyrama",
    icon: "mingcute:instagram-line",
    platform: "instagram",
  },
];

// Footer Sections
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "about",
    title: "درباره ما",
    image: "/images/logo-white.svg",
    links: [
      {
        id: "about-us",
        title: "درباره ما",
        url: "/about",
      },
      {
        id: "our-team",
        title: "تماس با ما",
        url: "/team",
      },
      {
        id: "careers",
        title: "وبلاگ",
        url: "/careers",
      },
      {
        id: "contact",
        title: "لورم ایپسوم ",
        url: "/contact",
      },
    ],
  },
  {
    id: "courses",
    title: "لینک های کاربردی",
    links: [
      {
        id: "all-courses",
        title: "لورم ایپسوم",
        url: "/courses",
      },
      {
        id: "programming",
        title: "لورم ایپسوم",
        url: "/courses/programming",
      },
      {
        id: "design",
        title: "لورم ایپسوم",
        url: "/courses/design",
      },
      {
        id: "marketing",
        title: "لورم ایپسوم",
        url: "/courses/marketing",
      },
    ],
  },
  {
    id: "support",
    title: "راهنما",
    links: [
      {
        id: "faq",
        title: "لورم ایپسوم",
        url: "/faq",
      },
      {
        id: "help-center",
        title: "لورم ایپسوم",
        url: "/help",
      },
      {
        id: "tutorials",
        title: "لورم ایپسوم",
        url: "/tutorials",
      },
      {
        id: "blog",
        title: "لورم ایپسوم ",
        url: "/blog",
      },
    ],
  },
  {
    id: "legal",
    title: "با ما همراه باشید",
    social: [
      {
        id: "telegram",
        name: "تلگرام",
        url: "https://t.me/academyrama",
        icon: "mingcute:telegram-line",
        platform: "telegram",
      },
      {
        id: "whatsapp",
        name: "واتساپ",
        url: "https://wa.me/07136305007",
        icon: "mingcute:whatsapp-line",
        platform: "whatsapp",
      },
      {
        id: "twitter",
        name: "توییتر",
        url: "https://twitter.com/academyrama",
        icon: "mingcute:twitter-line",
        platform: "twitter",
      },
      {
        id: "linkedin",
        name: "لینکدین",
        url: "https://linkedin.com/company/academyrama",
        icon: "mingcute:linkedin-line",
        platform: "linkedin",
      },
      {
        id: "youtube",
        name: "یوتیوب",
        url: "https://youtube.com/@academyrama",
        icon: "mingcute:youtube-line",
        platform: "youtube",
      },
      {
        id: "dribbble",
        name: "دریبل",
        url: "https://dribbble.com/academyrama",
        icon: "mingcute:dribbble-line",
        platform: "dribbble",
      },
      {
        id: "instagram",
        name: "اینستاگرام",
        url: "https://instagram.com/academyrama",
        icon: "mingcute:instagram-line",
        platform: "instagram",
      },
    ],
  },
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  email: "info@Academyrama.com",
  phone: "07136305007-8",
  phoneHours: "پاسخگویی هر روز 9 تا 17",
  address: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
};

// Company Information
export const COMPANY_INFO = {
  name: "آکادمی راما",
  nameEn: "Academy Rama",
  foundedYear: 2022,
  description: "موسسه آموزشی آکادمی راما",
  website: "https://academyrama.com",
};
