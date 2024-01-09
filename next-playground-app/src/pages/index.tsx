import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const articles = [
  {id: 1, title: 'ブログタイトル1つ目', image: 'https://placehold.jp/200x200.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 2, title: 'ブログタイトル2つ目', image: 'https://placehold.jp/150x150.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 3, title: 'ブログタイトル3つ目', image: 'https://placehold.jp/150x200.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 4, title: 'ブログタイトル4つ目', image: 'https://placehold.jp/200x150.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 5, title: 'ブログタイトル5つ目', image: 'https://placehold.jp/300x200.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 6, title: 'ブログタイトル6つ目', image: 'https://placehold.jp/100x100.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
  {id: 7, title: 'ブログタイトル7つ目', image: 'https://placehold.jp/200x300.png', summary:  'ブログ1つ目の要約',date: '2024/01/09'},
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next勉強のページ</title>
        <meta name="description" content="Next.jsを勉強するためのページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>勉強でブログっぽいTOPにしてみる</h1>
        {articles.map(article => (
        <div key={article.id}>
          <div style={{maxWidth: '200px', maxHeight: '200px', position: 'relative'}}>
            <Image src={article.image} alt="ブログ画像" layout='fill' objectFit='contain' style={{objectFit: 'contain'}}/>
          </div>
          <div>
            <p>{article.title}</p>
            <p>{article.summary}</p>
            <p>{article.date}</p>
          </div>
        </div>
        ))}

      </main>
    </>
  )
}
