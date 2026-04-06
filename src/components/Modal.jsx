import { useEffect } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal({ url, title, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={styles.box}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.actions}>
            <a
              className={styles.newTab}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ New Tab
            </a>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close demo"
            >
              ✕ Close
            </button>
          </div>
        </div>

        <iframe
          className={styles.iframe}
          src={url}
          title={title}
          allowFullScreen
        />
      </div>
    </div>
  )
}
