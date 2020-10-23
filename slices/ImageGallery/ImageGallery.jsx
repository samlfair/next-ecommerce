import React from 'react'
import { array, shape } from 'prop-types'
import { RichText } from 'prismic-reactjs'
import styles from './ImageGallery.module.scss'

const ImageGallery = ({ slice }) => (
  <div className={`slice ${styles.imageGallery}`}>
    <div className={styles.description}>
      {slice.primary.title ? <h2>{slice.primary.title}</h2> : <h2>No Title</h2>}
      {slice.primary.text[0].text ? (
        <RichText render={slice.primary.text} />
      ) : (
        <p>No description.</p>
      )}
      {slice.primary.button_text && slice.primary.button_link__optional_ && (
        <a
          href={slice.primary.button_link__optional_}
          className={styles.button}
        >
          {slice.primary.button_text}
        </a>
      )}
    </div>
    <div className={styles.images}>
      {slice.items.map(({ image }) => {
        return <img src={image.url} />
      })}
    </div>
  </div>
)

ImageGallery.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired
    }).isRequired
  }).isRequired
}

export default ImageGallery
