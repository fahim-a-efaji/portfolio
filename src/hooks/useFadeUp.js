import { useEffect, useRef, useCallback } from 'react'

/**
 * Returns a ref-setter function.
 * Usage:
 *   const ref = useFadeUp()
 *   <div ref={ref(0)} className="fu">…</div>
 *   <div ref={ref(1)} className="fu d1">…</div>
 *
 * Add class "fu" in CSS with opacity:0, transform:translateY(28px).
 * This hook adds class "vis" when the element enters the viewport.
 */
export default function useFadeUp() {
  const els = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    els.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Returns a stable ref callback for index i
  const ref = useCallback(
    (i) => (el) => {
      els.current[i] = el
    },
    []
  )

  return ref
}
