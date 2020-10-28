import React from 'react'
import styles from './ProductDetail.module.scss'
import Rating from '../Rating'
import Button from './../Button'
import { RichText } from 'prismic-reactjs'

export default function ProductDetail({ product }) {
  return (
    <div className={styles.productDetail}>
      <div className={styles.image}>
        <img src={product.product.image_url_square} alt={product.name} />
      </div>
      <div className={styles.description}>
        <h1>{product.name}</h1>
        <p>${product.product.price}</p>
        <p>
          <Rating bg1="#000" bg2="#ddd" percent={product.product.rating / 5} />
        </p>
        <RichText render={product.description} />
        <Button text="Buy Now" link="#" />
        <p>
          Question? <a href="#">Send a message!</a>
        </p>
      </div>
    </div>
  )
}
