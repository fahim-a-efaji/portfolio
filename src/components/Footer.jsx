import styles from '../styles/Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <span>Fahim Al Efaji</span>
        {' '}·{' '}
        Analytics Engineer
        {' '}·{' '}
        Budapest, Hungary
        {' '}·{' '}
        © {year}
      </div>
    </footer>
  )
}
