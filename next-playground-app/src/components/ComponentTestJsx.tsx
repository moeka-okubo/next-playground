import { FC, memo } from "react";

type Props = {
  title?: string;
  className?: string;
};

const ComponentTestModule: FC<Props> = ({
  title = "デフォルトタイトル",
  className,
}) => {
  return (
    <>
      <h2>↓は `container`というクラス名をつけている</h2>
      <div className={`component ${className}`}>
        <h2>{title}</h2>
        コンポーネントのテスト
      </div>

      <style jsx lang="sass">{`
        .component {
          background-color: #aff;
        }
      `}</style>
    </>
  );
};

export default memo(ComponentTestModule);
