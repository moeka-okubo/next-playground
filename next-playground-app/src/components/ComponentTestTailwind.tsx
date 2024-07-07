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
      <div className={`bg-blue-300 ${className}`}>
        <h2>{title}</h2>
        コンポーネントのテスト
      </div>
    </>
  );
};

export default memo(ComponentTestModule);
