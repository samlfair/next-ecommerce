import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Nav from './../Nav'

export default function Header({ config }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo__container}>
            <img
              className={styles.logo__image}
              src={config.site_logo.url}
              alt={config.site_logo.alt}
            />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h1>{config.site_title}</h1>
        </a>
      </Link>
      <Nav />
    </header>
  )
}
