import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}