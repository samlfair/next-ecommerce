// pages/_app.js
import React from 'react'
import NextApp from 'next/app'

import '../styles/reset.css'
import '../styles/style.scss'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
