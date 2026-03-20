import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        S<span>.</span>Podder
      </div>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="#about"    onClick={close}>About</a></li>
        <li><a href="#skills"   onClick={close}>Skills</a></li>
        <li><a href="#projects" onClick={close}>Projects</a></li>
        <li><a href="#contact"  onClick={close}>Contact</a></li>
        <li><a href="#contact"  onClick={close} className={styles.cta}>Hire Me</a></li>
      </ul>

      <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={open ? styles.line1open : ''} />
        <span className={open ? styles.line2open : ''} />
        <span className={open ? styles.line3open : ''} />
      </button>
    </nav>
  )
}
