// pages/_app.js
import React from 'react'
import NextApp from 'next/app'
import { Client } from '../prismic'

import '../styles/reset.css'
import '../styles/style.scss'
import '../styles/typography.scss'

export default class App extends NextApp {
  render() {
    const { Component, pageProps, data } = this.props
    return <Component {...pageProps} config={data} />
  }
}

App.getInitialProps = async (appContext) => {
  const appProps = await Client().getSingle('config')
  return { ...appProps }
}
