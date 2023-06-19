import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={'bg-gray-5 dark:bg-gray-700'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
