import '@/styles/font-awesome.min.css'
import '@/styles/bootstrap.css'
import '@/styles/magnific-popup.css'
import '@/styles/globals.css'
import '@/styles/custom.css'

import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
