import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
