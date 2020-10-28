import React from 'react'
import styles from './Button.module.scss'

export default function index({ link, text }) {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  )
}
