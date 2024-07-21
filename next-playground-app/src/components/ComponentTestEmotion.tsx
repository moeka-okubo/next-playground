/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { css } from "@emotion/react";

const ComponentTestEmotion = (props) => {
  const { title = "デフォルトタイトル", color = "#aff", width } = props;

  const containerStyle = css`
    background-color: ${color};
    ${width !== undefined ? `margin-top: ${width}px;` : ""}
  `;

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

export default memo(ComponentTestEmotion);
