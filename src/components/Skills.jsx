import useFadeUp from '../hooks/useFadeUp'
import { SKILLS } from '../data/portfolio'
import styles from '../styles/Skills.module.css'

export default function Skills() {
  const ref = useFadeUp()

  return (
    <section id="skills" className={styles.section}>
      <div className="container">

        <div className={`sec-head fu`} ref={ref(0)}>
          <p className="sec-tag">// what i work with</p>
          <h2>Technical Skills</h2>
          <p>
            A full-stack analytics toolkit spanning data engineering, BI,
            cloud infrastructure, and AI integration.
          </p>
        </div>

        <div className={styles.grid}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.title}
              className={`${styles.card} fu d${i % 5}`}
              ref={ref(i + 1)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon} aria-hidden="true">{skill.icon}</div>
                {skill.proficiency && (
                  <span className={`${styles.profBadge} ${styles[`prof${skill.proficiency}`]}`}>
                    {skill.proficiency}
                  </span>
                )}
              </div>
              <h3>{skill.title}</h3>
              <div className="tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className={`tag tag-${skill.color}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
