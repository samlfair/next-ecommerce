import React from 'react'
import styles from './Nav.module.scss'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <span>Fashion</span>
      <span>Housewares</span>
      <span>Kids</span>
      <span>Sales</span>
      <span>More</span>
    </div>
  )
}
