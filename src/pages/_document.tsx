import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="w-screen h-screen absolute background-city" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
