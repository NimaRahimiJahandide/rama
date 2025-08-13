import { TESTIMONIALS_DATA, DEFAULT_PROFILE_IMAGE, type Testimonial } from '~/constants/home/testimonials'

export const useTestimonialsContent = () => {
  const testimonialsContent = ref({
    title: "نظرات و تجربیات دانشجوها",
    testimonials: TESTIMONIALS_DATA.map(testimonial => ({
      ...testimonial,
      profileImage: testimonial.profileImage || DEFAULT_PROFILE_IMAGE
    }))
  })

  // Function to get testimonials in chunks (for displaying in rows)
  const getTestimonialsInChunks = (chunkSize: number = 3) => {
    const testimonials = testimonialsContent.value.testimonials
    const chunks: Testimonial[][] = []
    
    for (let i = 0; i < testimonials.length; i += chunkSize) {
      chunks.push(testimonials.slice(i, i + chunkSize))
    }
    
    return chunks
  }

  // Function to get limited testimonials for initial display
  const getFeaturedTestimonials = (limit: number = 6) => {
    return testimonialsContent.value.testimonials.slice(0, limit)
  }

  // Function to get testimonial by ID
  const getTestimonialById = (id: number): Testimonial | undefined => {
    return testimonialsContent.value.testimonials.find(testimonial => testimonial.id === id)
  }

  // Function to add new testimonial (for dynamic content)
  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newId = Math.max(...testimonialsContent.value.testimonials.map(t => t.id)) + 1
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: newId,
      profileImage: testimonial.profileImage || DEFAULT_PROFILE_IMAGE
    }
    
    testimonialsContent.value.testimonials.push(newTestimonial)
    return newTestimonial
  }

  // Function to update testimonials content (for CMS integration)
  const updateTestimonialsContent = (newContent: Partial<typeof testimonialsContent.value>) => {
    Object.assign(testimonialsContent.value, newContent)
  }

  // Function to shuffle testimonials (for varied display)
  const shuffleTestimonials = () => {
    const shuffled = [...testimonialsContent.value.testimonials]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    testimonialsContent.value.testimonials = shuffled
  }

  return {
    testimonialsContent: readonly(testimonialsContent),
    getTestimonialsInChunks,
    getFeaturedTestimonials,
    getTestimonialById,
    addTestimonial,
    updateTestimonialsContent,
    shuffleTestimonials
  }
}