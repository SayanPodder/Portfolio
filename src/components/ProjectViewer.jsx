import { useEffect, useRef, useState } from 'react'
import styles from './ProjectViewer.module.css'

export default function ProjectViewer({ project, onClose }) {
  const frameRef = useRef(null)
  const blobRef  = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!project) return

    setLoading(true)

    // Revoke previous blob
    if (blobRef.current) URL.revokeObjectURL(blobRef.current)

    const blob = new Blob([project.html], { type: 'text/html' })
    blobRef.current = URL.createObjectURL(blob)

    const frame = frameRef.current
    frame.src = blobRef.current
    frame.style.opacity = '0'

    const onLoad = () => {
      setLoading(false)
      frame.style.opacity = '1'
    }
    frame.addEventListener('load', onLoad)
    return () => frame.removeEventListener('load', onLoad)
  }, [project])

  // Cleanup blob on unmount
  useEffect(() => {
    return () => {
      if (blobRef.current) URL.revokeObjectURL(blobRef.current)
    }
  }, [])

  // Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!project) return null

  return (
    <div className={`${styles.overlay} ${project ? styles.open : ''}`}>
      <div className={styles.topbar}>
        <span className={styles.viewerTitle}>{project.title}</span>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          Close
        </button>
      </div>

      <div className={styles.frameWrap}>
        {loading && (
          <div className={styles.loader}>
            <div className={styles.ring} />
            <p>Loading project...</p>
          </div>
        )}
        <iframe
          ref={frameRef}
          className={styles.frame}
          title={project.title}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  )
}
