import { useState } from 'react'
import { useInView } from './useInView'
import styles from './Contact.module.css'

const links = [
  { icon: '✉️', label: 'sayan.podder.1997@gmail.com', href: 'mailto:sayan.podder.1997@gmail.com' },
  { icon: '📞', label: '+44 7774 918531', href: 'tel:+447774918531' },
  { icon: '💼', label: 'linkedin.com/in/sayan-podder', href: 'https://www.linkedin.com/in/sayan-podder' },
]

export default function Contact() {
  const [leftRef,  leftVis]  = useInView()
  const [rightRef, rightVis] = useInView()
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>

        <div ref={leftRef} className={`${styles.info} ${leftVis ? styles.visible : ''}`}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title}>Let's work<br />together</h2>
          <p className={styles.lead}>
            Whether you're looking for a Data Analyst, a fresh perspective on a
            business problem, or just want to connect, I'd love to hear from you.
          </p>

          <div className={styles.links}>
            {links.map(l => (
              <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                <span className={styles.linkIcon}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div ref={rightRef} className={`${styles.form} ${rightVis ? styles.visible : ''}`}>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label}>Your Name</label>
              <input type="text" className={styles.input} placeholder="Jane Smith" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input type="email" className={styles.input} placeholder="jane@company.com" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Subject</label>
              <input type="text" className={styles.input} placeholder="Data Analyst Opportunity" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.input} rows="5" placeholder="Tell me about the role or project..." required />
            </div>
            <button
              type="submit"
              className={`${styles.submit} ${sent ? styles.sent : ''}`}
            >
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
