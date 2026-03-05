import testimonialsData from '../../data/reviews.json'

export default defineEventHandler(() => {
  return testimonialsData.reviews
})
