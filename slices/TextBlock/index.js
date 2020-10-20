import React from 'react'
import { array, shape } from 'prop-types'
import { RichText } from 'prismic-reactjs'

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center'
}

const h2 = {
  color: '#8592e0'
}

const MySlice = ({ slice }) => (
  <section style={section}>
    <h2 style={h2}>Template slice, update me!</h2>
    {slice.primary.text ? <RichText render={slice.primary.text} /> : <p></p>}
  </section>
)

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired
    }).isRequired
  }).isRequired
}

export default MySlice
