import { useInView } from './useInView'
import styles from './About.module.css'

const highlights = [
  { icon: '🎓', title: 'Education',       desc: 'Business Analytics, BSc / MSc level studies' },
  { icon: '📊', title: 'BI Dashboards',   desc: 'Power BI, Tableau, Plotly — reports people actually read' },
  { icon: '🗄️', title: 'SQL & Data',      desc: 'Complex queries, CTEs, aggregations, data modelling' },
  { icon: '🤖', title: 'AI & Automation', desc: 'Using AI tools daily to automate reports and speed up analysis' },
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
            I'm a <strong>Business Analytics graduate</strong> who gets genuinely excited when data answers
            a question that's been keeping someone up at night. Whether it's tracking where NHS patients
            wait longest, figuring out why VW is losing EV market share, or spotting referee patterns in
            football data, I like problems where the answer actually matters.
          </p>
          <p>
            I work across the full stack of business analytics: SQL queries, Power BI and Tableau dashboards,
            Python for the heavy lifting, and clear written reports that non-technical stakeholders can act on.
            I've also started building this portfolio with AI assistance, and I use AI tools daily to
            automate repetitive tasks and get to insights faster.
          </p>
          <p>
            Right now I'm looking for <strong>Data Analyst, Business Intelligence, and Business Analyst</strong> roles
            where I can help teams make better decisions with the data they already have.
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
