import React from 'react'
import styles from './Rating.module.scss'

export default function Rating({ percent, bg1, bg2 }) {
  const style = {
    backgroundImage: `linear-gradient(to right, ${bg1}, ${bg1} ${
      percent * 100
    }%, ${bg2} ${percent * 100}%, ${bg2})`
  }
  return (
    <span className={styles.rating} style={style}>
      ★★★★★
    </span>
  )
}
