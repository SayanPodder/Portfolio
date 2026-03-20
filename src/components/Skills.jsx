import { useInView } from './useInView'
import { skills } from '../data/content'
import styles from './Skills.module.css'

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className={styles.skills}>
      <p className={styles.eyebrow}>Skills</p>
      <h2 className={styles.title}>What I work with</h2>
      <p className={styles.desc}>A toolkit built through real projects, not just courses.</p>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {skills.map(cat => (
          <div key={cat.title} className={styles.card}>
            <p className={styles.catTitle}>{cat.title}</p>
            <div className={styles.tags}>
              {cat.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
