/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { commonTextStyle } from "../../styles/commonStyleEmotion";
import { useState } from "react";
import ComponentTestEmotion from "@/components/ComponentTestEmotion";

const orange = "#ef6100";

const headerStyle = css`
  height: 64px;
  background-color: ${orange};
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`.styles;

// Styled Componentの形で書くこともできる
const ApplyNumberForm = styled.input`
  border: none;
  border-radius: 4px;
  width: 195px;
  padding: 14px 8px;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  padding: 80px 16px 0;
`;

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <header css={headerStyle}>
        <ApplyNumberForm type="text" placeholder="画面コール番号" />
      </header>
      <Container>
        <h1>Emotion を用いてヘッダーのデザイン作成</h1>
        <h2 css={[commonTextStyle.styles, `text-decoration: underline;`]}>
          共通スタイルテスト
        </h2>
        <ComponentTestEmotion color="blue" width={80} />
        <p>{value}</p>
        <form>
          <button
            type="button"
            onClick={increaseValue}
            css={css`
              background-color: ${value % 2 === 1 ? `${orange}` : "initial"};
              &:hover {
                background-color: red;
              }
            `}
          >
            送信
          </button>
        </form>
      </Container>
    </>
  );
};
export default TestPage;
