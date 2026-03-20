import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.eyebrow}>Data Analyst &amp; Business Intelligence</p>

      <h1 className={styles.title}>
        Hi, I'm <em>Sayan</em><br />I turn data into<br />decisions
      </h1>

      <p className={styles.sub}>
        I build end-to-end analytics solutions, from raw data to actionable insight.
        Specialising in Python, SQL, and interactive dashboards that help businesses move with confidence.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>View My Work</a>
        <a href="#contact"  className={styles.btnOutline}>Get In Touch</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statVal}>4<em>+</em></span>
          <span className={styles.statLabel}>Projects Completed</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statVal}>5<em>+</em></span>
          <span className={styles.statLabel}>Tools &amp; Languages</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statVal}>7K<em>+</em></span>
          <span className={styles.statLabel}>Rows Analysed</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statVal}>ML<em> Ready</em></span>
          <span className={styles.statLabel}>Predictive Modelling</span>
        </div>
      </div>
    </section>
  )
}
