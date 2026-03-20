import { useState, useEffect } from 'react'
import { projects } from '../data/content'
import { useInView } from './useInView'
import ProjectViewer from './ProjectViewer'
import styles from './Projects.module.css'

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

function ProjectTile({ project, onView, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.tile} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${styles.banner} ${styles[project.bannerClass]}`}>
        <div className={styles.bannerBg} />
        <span className={styles.bannerIcon}>{project.emoji}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags.map(t => (
            <span key={t.label} className={`${styles.ptag} ${styles[t.cls]}`}>{t.label}</span>
          ))}
        </div>

        <h3 className={styles.tileTitle}>{project.title}</h3>
        <p className={styles.tileDesc}>{project.desc}</p>

        <div className={styles.footer}>
          <span className={styles.meta}>{project.meta}</span>
          <button className={styles.eyeBtn} onClick={() => onView(project)}>
            <EyeIcon />
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  // Lock body scroll when viewer is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  return (
    <>
      <section id="projects" className={styles.projects}>
        <p className={styles.eyebrow}>Projects</p>
        <h2 className={styles.title}>Work I'm proud of</h2>
        <p className={styles.desc}>
          Each project is a complete analytics case. Click View Project to open the full interactive report.
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectTile
              key={p.key}
              project={p}
              onView={setActiveProject}
              delay={i * 80}
            />
          ))}
        </div>
      </section>

      <ProjectViewer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}
