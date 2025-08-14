import { NEWS_DATA, type NewsArticle } from '~/constants/home/news'

export const useNewsContent = () => {
  const newsContent = ref({
    title: "اخبار و مقالات آموزشی",
    viewAllText: "مشاهده همه",
    icon: "/icons/news.svg", // Add your orange icon here
    articles: NEWS_DATA
  })

  // Function to get featured articles (for homepage display)
  const getFeaturedArticles = (limit: number = 6) => {
    return newsContent.value.articles.slice(0, limit)
  }

  // Function to get articles by category
  const getArticlesByCategory = (category: string) => {
    return newsContent.value.articles.filter(article => article.category === category)
  }

  // Function to get article by ID
  const getArticleById = (id: number): NewsArticle | undefined => {
    return newsContent.value.articles.find(article => article.id === id)
  }

  // Function to get article by slug
  const getArticleBySlug = (slug: string): NewsArticle | undefined => {
    return newsContent.value.articles.find(article => article.slug === slug)
  }

  // Function to toggle favorite status
  const toggleArticleFavorite = (articleId: number) => {
    const article = newsContent.value.articles.find(a => a.id === articleId)
    if (article) {
      article.isFavorite = !article.isFavorite
    }
  }

  // Function to add new article (for dynamic content)
  const addArticle = (article: Omit<NewsArticle, 'id'>) => {
    const newId = Math.max(...newsContent.value.articles.map(a => a.id)) + 1
    const newArticle: NewsArticle = {
      ...article,
      id: newId
    }
    
    newsContent.value.articles.unshift(newArticle) // Add to beginning
    return newArticle
  }

  // Function to update article
  const updateArticle = (articleId: number, updates: Partial<NewsArticle>) => {
    const articleIndex = newsContent.value.articles.findIndex(a => a.id === articleId)
    if (articleIndex !== -1) {
      Object.assign(newsContent.value.articles[articleIndex], updates)
    }
  }

  // Function to remove article
  const removeArticle = (articleId: number) => {
    const articleIndex = newsContent.value.articles.findIndex(a => a.id === articleId)
    if (articleIndex !== -1) {
      newsContent.value.articles.splice(articleIndex, 1)
    }
  }

  // Function to get recent articles
  const getRecentArticles = (limit: number = 5) => {
    return newsContent.value.articles
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, limit)
  }

  // Function to search articles
  const searchArticles = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    return newsContent.value.articles.filter(article => 
      article.title.toLowerCase().includes(lowercaseQuery) ||
      (article.excerpt && article.excerpt.toLowerCase().includes(lowercaseQuery)) ||
      (article.category && article.category.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Function to update news content (for CMS integration)
  const updateNewsContent = (newContent: Partial<typeof newsContent.value>) => {
    Object.assign(newsContent.value, newContent)
  }

  return {
    newsContent: readonly(newsContent),
    getFeaturedArticles,
    getArticlesByCategory,
    getArticleById,
    getArticleBySlug,
    toggleArticleFavorite,
    addArticle,
    updateArticle,
    removeArticle,
    getRecentArticles,
    searchArticles,
    updateNewsContent
  }
}