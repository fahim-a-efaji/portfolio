import styles from '../styles/Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>Fahim Al Efaji · Analytics Engineer · Budapest, Hungary · © {year}</span>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/fahim-al-efaji" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/fahim-a-efaji" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
