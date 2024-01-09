import Head from 'next/head'
import Image from "next/legacy/image"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const articles = [
  {
    id: 1,
    title: 'ブログタイトル1つ目',
    image: 'https://placehold.jp/200x200.png',
    summary: 'ブログ1つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 2,
    title: 'ブログタイトル2つ目',
    image: 'https://placehold.jp/150x150.png',
    summary: 'ブログ2つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 3,
    title: 'ブログタイトル3つ目',
    image: 'https://placehold.jp/150x200.png',
    summary: 'ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約ブログ3つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 4,
    title: 'ブログタイトル4つ目',
    image: 'https://placehold.jp/200x150.png',
    summary: 'ブログ1つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 5,
    title: 'ブログタイトル5つ目',
    image: 'https://placehold.jp/300x200.png',
    summary: 'ブログ1つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 6,
    title: 'ブログタイトル6つ目',
    image: 'https://placehold.jp/100x100.png',
    summary: 'ブログ1つ目の要約',
    date: '2024/01/09'
  },
  {
    id: 7,
    title: 'ブログタイトル7つ目',
    image: 'https://placehold.jp/200x300.png',
    summary: 'ブログ1つ目の要約',
    date: '2024/01/09'
  },
];

export default function Home() {
  const articleStyle = {
    list: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      padding: '16px',
      border: '1px solid',
      borderRadius: '10px',
    },
    detail: {
      display: 'flex',
      flexDirection: 'column' as const,
      marginLeft: '16px',
      height: '150px',
      width: '100%',
      title: {
        fontSize: '20px',
        fontWeight: '700',
      }, 
      summery: {
        marginTop: '8px',
      }, 
      date: {
        marginTop: 'auto',
        textAlign: 'right',
        color: 'gray',
        fontSize: '14px',
      } as React.CSSProperties
    }
  };

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
          <div key={article.id} style={articleStyle.list}>
            
            <div>
              <Image
                src={article.image} 
                alt="ブログ画像"
                layout="intrinsic"
                width={150} 
                height={150}
                objectFit="contain"
              />
            </div>
            <div style={articleStyle.detail}>
              <p style={articleStyle.detail.title}>{article.title}</p>
              <p style={articleStyle.detail.summery}>{article.summary}</p>
              <p style={articleStyle.detail.date}>{article.date}</p>
            </div>
        </div>
        ))}

      </main>
    </>
  )
}
