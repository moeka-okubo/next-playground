import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  const { title, h1 } = pageProps;

  return (
    <>
      <Head>
        <title>{title} | Next勉強のページ</title>
        <meta name="description" content="Next.jsを勉強するためのページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>{h1}</h1>
        <Component {...pageProps} />
      </main>
    </>
  );
}
