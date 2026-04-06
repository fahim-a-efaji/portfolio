import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * Returns the current display string.
 */
export default function useTyped(words, { typeSpeed = 88, deleteSpeed = 48, pauseMs = 1800 } = {}) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, charIdx + 1))
        if (charIdx + 1 === word.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), pauseMs)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setDisplay(word.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [wordIdx, charIdx, deleting, words, typeSpeed, deleteSpeed, pauseMs])

  return display
}
