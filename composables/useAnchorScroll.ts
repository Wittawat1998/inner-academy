export const useAnchorScroll = (offset = 80) => {
  const router = useRouter()
  const route = useRoute()
  
  const scrollToAnchor = (hash: string) => {
    if (!hash || !process.client) return
    
    const targetId = hash.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }
  
  const handleAnchorClick = (link: string) => {
    const isAnchor = link.startsWith('#')
    const isHomePage = route.path === '/'
    
    if (isAnchor && isHomePage) {
      // Same page: smooth scroll with offset
      scrollToAnchor(link)
    } else if (isAnchor && !isHomePage) {
      // Different page: navigate to /#anchor then scroll
      router.push(`/${link}`).then(() => {
        nextTick(() => scrollToAnchor(link))
      })
    } else {
      // Regular page link: standard navigation
      router.push(link)
    }
  }
  
  // Auto-scroll on mount if hash in URL
  onMounted(() => {
    if (route.hash) {
      nextTick(() => scrollToAnchor(route.hash))
    }
  })
  
  return { handleAnchorClick, scrollToAnchor }
}
