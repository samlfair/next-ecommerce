import React from 'react'
import styles from './Footer.module.scss'

export default function Footer({ config }) {
  return (
    <footer className={styles.footer}>
      <p>{config.footer[0].text}</p>
    </footer>
  )
}
