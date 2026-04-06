import { useState, useEffect } from 'react'

/**
 * Returns true once the user has scrolled past `threshold` px.
 * Used to add a "scrolled" class to the navbar.
 */
export default function useNavScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
