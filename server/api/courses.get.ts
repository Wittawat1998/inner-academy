import classesData from '../../data/classes.json'

export default defineEventHandler(() => {
  return {
    ...classesData,
    classes: [...classesData.classes].sort((a, b) => ((a as any).order ?? 999) - ((b as any).order ?? 999))
  }
})
