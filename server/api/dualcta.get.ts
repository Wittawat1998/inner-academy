import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(() => {
  const filePath = resolve('data/dualCTA.json')
  const raw = readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
})
