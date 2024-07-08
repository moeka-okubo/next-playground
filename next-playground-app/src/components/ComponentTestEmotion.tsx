/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { css } from "@emotion/react";

const containerStyle = css`
  background-color: #aff;
`;

const ComponentTest = ({ title = "デフォルトタイトル" }) => {
  return (
    <>
      <h2>↓は `Container`というStyled Componentを適用している</h2>
      <div css={containerStyle.styles}>
        <h2>{title}</h2>
        コンポーネントのテスト
      </div>
    </>
  );
};

export default memo(ComponentTest);
