export interface CourseTeacher {
  id: number
  name: string
  avatar?: string
  title?: string
}

export interface CoursePricing {
  originalPrice?: number
  finalPrice: number
  discount: number
  currency: string
}

export interface CourseBadge {
  type: 'free' | 'hot' | 'new' | 'discount'
  text: string
}

export interface Course {
  id: number
  title: string
  slug?: string
  image: string
  teacher: CourseTeacher
  features: string[]
  pricing: CoursePricing
  badge?: CourseBadge
  isFavorite?: boolean
  category?: string
  duration?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  studentsCount?: number
  rating?: number
  description?: string
}

export const useCoursesContent = () => {
  const coursesContent = ref({
    title: "دوره‌های آموزشی فعال در آکادمی راما",
    viewAllText: "مشاهده همه",
    courses: [
      {
        id: 1,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "botox-forehead-training",
        image: "/images/course-1.png",
        teacher: {
          id: 1,
          name: "دکتر سروش باقری",
          title: "متخصص پوست"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          originalPrice: 1199000,
          finalPrice: 719000,
          discount: 50,
          currency: "تومان"
        },
        badge: {
          type: 'discount',
          text: '50%'
        },
        isFavorite: false,
        category: "پزشکی",
        duration: "8 ساعت",
        level: "intermediate",
        studentsCount: 245,
        rating: 4.8
      },
      {
        id: 2,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "botox-advanced-training",
        image: "/images/course-2.png",
        teacher: {
          id: 2,
          name: "دکتر سروش باقری",
          title: "متخصص پوست"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          finalPrice: 719000,
          discount: 0,
          currency: "تومان"
        },
        isFavorite: true,
        category: "پزشکی",
        duration: "12 ساعت",
        level: "advanced",
        studentsCount: 180,
        rating: 4.9
      },
      {
        id: 3,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "tech-trends-2025",
        image: "/images/course-3.png",
        teacher: {
          id: 3,
          name: "دکتر سروش باقری",
          title: "متخصص فناوری"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          finalPrice: 719000,
          discount: 0,
          currency: "تومان"
        },
        badge: {
          type: 'new',
          text: 'جدید'
        },
        isFavorite: false,
        category: "تکنولوژی",
        duration: "6 ساعت",
        level: "beginner",
        studentsCount: 320,
        rating: 4.7
      },
      {
        id: 4,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "ai-machine-learning",
        image: "/images/course-2.png",
        teacher: {
          id: 4,
          name: "دکتر احمد محمدی",
          title: "متخصص هوش مصنوعی"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          originalPrice: 2500000,
          finalPrice: 0,
          discount: 100,
          currency: "تومان"
        },
        badge: {
          type: 'free',
          text: 'رایگان'
        },
        isFavorite: false,
        category: "برنامه‌نویسی",
        duration: "20 ساعت",
        level: "intermediate",
        studentsCount: 450,
        rating: 4.9
      },
      {
        id: 5,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "ui-ux-figma-complete",
        image: "/images/course-1.png",
        teacher: {
          id: 5,
          name: "مریم حسینی",
          title: "طراح رابط کاربری"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          originalPrice: 1800000,
          finalPrice: 1260000,
          discount: 30,
          currency: "تومان"
        },
        badge: {
          type: 'hot',
          text: 'پرفروش'
        },
        isFavorite: true,
        category: "طراحی",
        duration: "15 ساعت",
        level: "beginner",
        studentsCount: 380,
        rating: 4.8
      },
      {
        id: 6,
        title: "آموزش نحوه تزریق بوتاکس ناحیه پیشانی و خط لبخند",
        slug: "react-nextjs-complete",
        image: "/images/course-3.png", 
        teacher: {
          id: 6,
          name: "علی رضایی",
          title: "توسعه‌دهنده فرانت‌اند"
        },
        features: [
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم",
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم", 
          "لورم ایپسوم متن ساختگی تا تولید سادگی نامفهوم"
        ],
        pricing: {
          finalPrice: 1650000,
          discount: 0,
          currency: "تومان"
        },
        isFavorite: false,
        category: "برنامه‌نویسی",
        duration: "25 ساعت", 
        level: "advanced",
        studentsCount: 290,
        rating: 4.9
      }
    ] as Course[]
  })

  // Function to update courses content
  const updateCoursesContent = (newContent: Partial<typeof coursesContent.value>) => {
    Object.assign(coursesContent.value, newContent)
  }

  // Function to add new course
  const addCourse = (course: Omit<Course, 'id'>) => {
    const newId = Math.max(...coursesContent.value.courses.map(c => c.id)) + 1
    coursesContent.value.courses.push({
      ...course,
      id: newId
    })
  }

  // Function to update course
  const updateCourse = (courseId: number, updates: Partial<Course>) => {
    const courseIndex = coursesContent.value.courses.findIndex(c => c.id === courseId)
    if (courseIndex !== -1) {
      Object.assign(coursesContent.value.courses[courseIndex], updates)
    }
  }

  // Function to remove course
  const removeCourse = (courseId: number) => {
    const courseIndex = coursesContent.value.courses.findIndex(c => c.id === courseId)
    if (courseIndex !== -1) {
      coursesContent.value.courses.splice(courseIndex, 1)
    }
  }

  // Function to toggle favorite
  const toggleCourseFavorite = (courseId: number) => {
    const course = coursesContent.value.courses.find(c => c.id === courseId)
    if (course) {
      course.isFavorite = !course.isFavorite
    }
  }

  // Function to get courses by category
  const getCoursesByCategory = (category: string) => {
    return coursesContent.value.courses.filter(c => c.category === category)
  }

  // Function to get featured courses
  const getFeaturedCourses = () => {
    return coursesContent.value.courses.filter(c => c.badge || c.rating && c.rating >= 4.8)
  }

  return {
    coursesContent: readonly(coursesContent),
    updateCoursesContent,
    addCourse,
    updateCourse,
    removeCourse,
    toggleCourseFavorite,
    getCoursesByCategory,
    getFeaturedCourses
  }
}