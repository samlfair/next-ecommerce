import React from 'react'
import { array, shape } from 'prop-types'
import { RichText } from 'prismic-reactjs'
import styles from './TextBlock.module.scss'

const TextBlock = ({ slice }) => (
  <div className={`slice ${styles.richText}`}>
    {slice.primary.text ? <RichText render={slice.primary.text} /> : <p></p>}
  </div>
)

TextBlock.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired
    }).isRequired
  }).isRequired
}

export default TextBlock
