import useFadeUp from '../hooks/useFadeUp'
import { PROJECTS } from '../data/portfolio'
import styles from '../styles/Projects.module.css'

export default function Projects({ onDemo }) {
  const ref = useFadeUp()

  return (
    <section id="projects">
      <div className="container">

        <div className={`sec-head fu`} ref={ref(0)}>
          <p className="sec-tag">// portfolio</p>
          <h2>Featured Projects</h2>
          <p>
            Six fully working demos — each maps directly to real work
            done at ExxonMobil.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`${styles.card} fu d${i % 5}`}
              ref={ref(i + 1)}
            >
              <div className={styles.header}>
                <span className={styles.icon} aria-hidden="true">
                  {project.icon}
                </span>
                <div className={styles.actions}>
                  <button
                    className={`${styles.projBtn} ${styles.primary}`}
                    onClick={() => onDemo(project.file, project.title)}
                  >
                    ▶ Live Demo
                  </button>
                  <a
                    className={styles.projBtn}
                    href={project.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} in new tab`}
                  >
                    ↗
                  </a>
                </div>
              </div>

              <div className={styles.body}>
                <h3>{project.title}</h3>
                <p className={styles.metric}>📈 {project.metric}</p>
                <p className={styles.desc}>{project.desc}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`tag tag-${project.color}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
