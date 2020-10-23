import React from 'react'
import styles from './Header.module.scss'

export default function Header({ config }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <img
          className={styles.logo__image}
          src={config.site_logo.url}
          alt={config.site_logo.alt}
        />
      </div>
      <h1>{config.site_title}</h1>
    </header>
  )
}
