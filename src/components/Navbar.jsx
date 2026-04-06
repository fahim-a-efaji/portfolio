import { useEffect } from 'react'
import useNavScroll from '../hooks/useNavScroll'
import styles from '../styles/Navbar.module.css'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar({ onNav, mobileOpen, setMobileOpen }) {
  const scrolled = useNavScroll(50)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setMobileOpen])

  const handleNav = (id) => {
    setMobileOpen(false)
    // Small delay so the menu animation completes before scrolling
    setTimeout(() => onNav(id), 80)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.logo} onClick={() => onNav('about')}>
          Fahim.
        </button>

        <ul className={styles.links}>
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleNav(label.toLowerCase()) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuBtn}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); handleNav(label.toLowerCase()) }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
