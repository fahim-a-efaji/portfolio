import useFadeUp from '../hooks/useFadeUp'
import { EXPERIENCE, EDUCATION } from '../data/portfolio'
import styles from '../styles/Experience.module.css'

export default function Experience() {
  const ref = useFadeUp()

  return (
    <section id="experience">
      <div className="container">

        <div className={`sec-head fu`} ref={ref(0)}>
          <p className="sec-tag">// career</p>
          <h2>Work Experience</h2>
          <p>
            Building data infrastructure and AI-driven analytics solutions
            at enterprise scale.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {EXPERIENCE.map((job, i) => (
            <div
              key={job.role}
              className={`${styles.item} fu d${i}`}
              ref={ref(i + 1)}
            >
              <div className={styles.dot} aria-hidden="true" />

              <div className={styles.meta}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.period}>{job.period}</span>
              </div>

              <h3 className={styles.role}>{job.role}</h3>

              <ul className={styles.bullets}>
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={`${styles.eduCard} fu`} ref={ref(EXPERIENCE.length + 1)}>
          <div className={styles.eduIcon} aria-hidden="true">🎓</div>
          <div>
            <div className={styles.eduDeg}>{EDUCATION.degree}</div>
            <div className={styles.eduSchool}>{EDUCATION.school}</div>
            <div className={styles.eduPeriod}>{EDUCATION.period}</div>
          </div>
        </div>

      </div>
    </section>
  )
}
