import { FC, memo } from "react";
import * as style from "../styles/component.module.css";

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
      <div className={`${style.component} ${className}`}>
        <h2>{title}</h2>
        コンポーネントのテスト
      </div>
    </>
  );
};

export default memo(ComponentTestModule);
