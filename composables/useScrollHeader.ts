export const useScrollHeader = (threshold = 50) => {
  const isScrolled = ref(false)
  
  const handleScroll = () => {
    if (process.client) {
      isScrolled.value = window.scrollY > threshold
    }
  }
  
  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial check
    }
  })
  
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return { isScrolled }
}
