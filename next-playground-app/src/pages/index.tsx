import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { fetcher, url } from "@/features/api/user";
import useSWR, { mutate, useSWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const articleStyle = {
    list: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      marginTop: "8px",
      padding: "16px",
      border: "1px solid",
      borderRadius: "10px",
    },
    image: {
      minWidth: "150px",
    },
    detail: {
      display: "flex",
      flexDirection: "column" as const,
      marginLeft: "16px",
      height: "150px",
      width: "100%",
      overflow: "hidden",
      flex: 1,
      title: {
        fontSize: "20px",
        fontWeight: "700",
      },
      summary: {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "calc(1.5em * 3)",
        lineHeight: "1.5",
        marginTop: "8px",
      } as React.CSSProperties,
      date: {
        marginTop: "auto",
        textAlign: "right",
        color: "gray",
        fontSize: "14px",
      } as React.CSSProperties,
    },
  };

  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  // 手動キャッシュ更新
  const updateCache = () => {
    mutate(
      url,
      fetcher(url).then((data) => {
        console.log("Cache updated!");
        return data;
      })
    );
  };

  const { cache } = useSWRConfig();

  // キャッシュクリア
  const clearCache = () => {
    cache.delete(url);
    console.log("Cache cleared!");
  };

  return (
    <>
      <Head>
        <title>Next勉強のページ</title>
        <meta name="description" content="Next.jsを勉強するためのページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles?.main || ""} ${inter.className}`}>
        <h1>SWR使った取得</h1>
        <div>
          <button onClick={updateCache}>キャッシュ更新</button>
          <button onClick={clearCache}>キャッシュクリア</button>
        </div>
        {data &&
          data.articles.map((article) => (
            <a
              key={article.id}
              href={`/article/${article.id}`}
              style={{ width: "100%" }}
            >
              <div style={articleStyle.list}>
                <div>
                  <Image
                    src={article.image}
                    width={150}
                    height={150}
                    alt="ブログ画像"
                    style={articleStyle.image}
                  />
                </div>
                <div style={articleStyle.detail}>
                  <p style={articleStyle.detail.title}>{article.title}</p>
                  <p style={articleStyle.detail.summary}>{article.summary}</p>
                  <p style={articleStyle.detail.date}>{article.date}</p>
                </div>
              </div>
            </a>
          ))}
      </main>
    </>
  );
}
