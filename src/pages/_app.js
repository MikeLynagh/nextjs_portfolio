import '@/styles/globals.css'
import { Inter } from "next/font/google"
import Head from "next/head"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
    <div className={`${inter.variable} min-h-screen bg-canvas text-ink`}>
      <a href="#main-content" className="sr-only z-50 bg-surface px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  )
}
