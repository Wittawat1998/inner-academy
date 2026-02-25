import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(() => {
  const filePath = resolve('data/coaches.json')
  const raw = readFileSync(filePath, 'utf-8')
  const data = JSON.parse(raw)
  // Return only the coaches array — CoachesGrid expects Coach[] not CoachesData
  return data.coaches ?? data
})
