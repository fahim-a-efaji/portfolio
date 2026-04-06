import useTyped from '../hooks/useTyped'
import { ROLES, STATS } from '../data/portfolio'
import styles from '../styles/Hero.module.css'

export default function Hero({ onNav }) {
  const typed = useTyped(ROLES)

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.bg}   aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>

        {/* Badge */}
        <div className={`${styles.badge} fu vis`}>
          <span className={styles.dot} aria-hidden="true" />
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className={`${styles.title} fu vis`}>
          <span className={styles.line}>Md Fahim</span>
          <span className={`${styles.line} ${styles.highlight}`}>Al Efaji</span>
        </h1>

        {/* Sub-heading with typed role */}
        <p className={`${styles.sub} fu vis`}>
          <span className={styles.typed} aria-live="polite">{typed}</span>
          <span className={styles.cursor} aria-hidden="true" />
          <br />
          Building intelligent data pipelines, AI-powered audit solutions, and
          enterprise dashboards that turn raw data into decisions.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} fu vis`}>
          <button
            className="btn btn-primary"
            onClick={() => onNav('projects')}
          >
            ↓ View Projects
          </button>
          <button
            className="btn btn-outline"
            onClick={() => onNav('contact')}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} fu vis`}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
