import coachesData from '../../data/coaches.json'

export default defineEventHandler(() => {
  // Return only the coaches array — CoachesGrid expects Coach[] not CoachesData
  return coachesData.coaches
})
