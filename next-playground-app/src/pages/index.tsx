import Image from "next/legacy/image"
import { articles } from "../const/articles"

function Home() {
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
    image: {
      minWidth: '150px',
    },
    detail: {
      display: 'flex',
      flexDirection: 'column' as const,
      marginLeft: '16px',
      height: '150px',
      width: '100%',
      overflow: 'hidden',
      flex: 1,
      title: {
        fontSize: '20px',
        fontWeight: '700',
      },
      summary: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: 'calc(1.5em * 3)',
        lineHeight: '1.5',
        marginTop: '8px',
      } as React.CSSProperties,
      date: {
        marginTop: 'auto',
        textAlign: 'right',
        color: 'gray',
        fontSize: '14px',
      } as React.CSSProperties
    },
  };

  return (
    <>
      {articles.map(article => (
        <a key={article.id} href={`/article/${article.id}`} style={{width: '100%'}}>
          <div style={articleStyle.list}>
            <div>
              <Image
                src={article.image}
                alt="ブログ画像"
                layout="intrinsic"
                width={150}
                height={150}
                objectFit="contain"
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
    </>
  )
}

Home.getInitialProps = () => {
  return {
    title: 'Top',
    h1: '勉強でブログっぽいのを作ってみる',
  };
};

export default Home;
