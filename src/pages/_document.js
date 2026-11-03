import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const themeScript = `(function(){try{var stored=localStorage.getItem('theme');var dark=stored==='dark'||(!stored&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark)}catch(e){}})()`

  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
