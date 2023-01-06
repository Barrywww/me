import '../styles/globals.css'
import Head from "next/head"

// @ts-ignore
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yuchen Wang | 王雨宸</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
