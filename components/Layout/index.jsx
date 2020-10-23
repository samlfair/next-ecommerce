import React from 'react'
import styles from './Layout.module.scss'
import Header from '../Header'
import Footer from '../Footer'

export const Layout = ({ children, config }) => {
  const { site_title, site_logo, footer } = config
  return (
    <div className={styles.siteWrapper}>
      <Header config={{ site_title, site_logo }} />
      <main>{children}</main>
      <div className={styles.footer}>
        <Footer config={{ footer }} />
      </div>
    </div>
  )
}
