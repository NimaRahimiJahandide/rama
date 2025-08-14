export interface NewsArticle {
  id: number
  title: string
  slug?: string
  image: string
  readingTime: number
  publishDate: string
  category?: string
  author?: string
  excerpt?: string
  isFavorite?: boolean
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    title: "عنوان وبلاگ",
    slug: "sample-blog-post-1",
    image: "/images/news-1.webp",
    readingTime: 2,
    publishDate: "1404/01/04",
    category: "آموزشی",
    author: "نویسنده مقاله",
    excerpt: "خلاصه‌ای از محتوای مقاله که در کارت نمایش داده می‌شود",
    isFavorite: false
  },
  {
    id: 2,
    title: "عنوان وبلاگ",
    slug: "sample-blog-post-2",
    image: "/images/news-2.webp",
    readingTime: 4,
    publishDate: "1404/01/04",
    category: "اخبار",
    author: "نویسنده مقاله",
    excerpt: "خلاصه‌ای از محتوای مقاله که در کارت نمایش داده می‌شود",
    isFavorite: true
  },
  {
    id: 3,
    title: "عنوان وبلاگ",
    slug: "sample-blog-post-3",
    image: "/images/news-3.webp",
    readingTime: 3,
    publishDate: "1404/01/04",
    category: "آموزشی",
    author: "نویسنده مقاله",
    excerpt: "خلاصه‌ای از محتوای مقاله که در کارت نمایش داده می‌شود",
    isFavorite: false
  }
]