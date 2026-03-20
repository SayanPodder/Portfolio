import { useInView } from './useInView'
import styles from './About.module.css'

const highlights = [
  { icon: '🎓', title: 'Education',    desc: 'Business Analytics, BSc / MSc level studies' },
  { icon: '🐍', title: 'Python & ML',  desc: 'EDA, feature engineering, XGBoost, Scikit-learn' },
  { icon: '🗄️', title: 'SQL & Data',   desc: 'Complex queries, CTEs, aggregations, reporting' },
  { icon: '📊', title: 'Dashboards',   desc: 'Power BI, Plotly, interactive web reports' },
]

export default function About() {
  const [leftRef,  leftVis]  = useInView()
  const [rightRef, rightVis] = useInView()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        <div ref={leftRef} className={`${styles.text} ${leftVis ? styles.visible : ''}`}>
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.title}>A story told<br />in data</h2>
          <p>
            I'm a <strong>Business Analytics graduate</strong> with a passion for uncovering
            the "why" behind the numbers. Whether it's predicting customer behaviour,
            analysing football performance, or building SQL pipelines, I love turning
            messy data into clean, compelling stories.
          </p>
          <p>
            My work sits at the intersection of <strong>technical rigour and business impact</strong>.
            I don't just build models. I frame problems, communicate findings, and deliver
            tools that teams can actually use.
          </p>
          <p>
            Currently seeking <strong>Data Analyst and Business Intelligence</strong> roles
            where I can grow, contribute, and make a measurable difference.
          </p>
        </div>

        <div ref={rightRef} className={`${styles.cards} ${rightVis ? styles.visible : ''}`}>
          {highlights.map(h => (
            <div key={h.title} className={styles.card}>
              <span className={styles.cardIcon}>{h.icon}</span>
              <strong>{h.title}</strong>
              <span>{h.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
