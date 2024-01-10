import { articles } from "@/const/articles";

interface Article {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
};

interface Params {
  id: string;
};

const Article = ({ article }: {article: Article}) => {
  return (
    // TASK: ここのスタイルいい感じにすする
    <div>
      <div>{article.date}</div>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

function ArticlePage({ article }: {article: Article}) {
  return (
    <Article article={article} />
  );
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: {params: Params}) {
  const article = articles.find((article) => article.id === parseInt(params.id, 10));

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
      title: '詳細',
      h1: article.title,
    },
  };
}

export default ArticlePage;
