import { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #aff;
`;

const ComponentTest = ({ title = "デフォルトタイトル" }) => {
  return (
    <>
      <h2>↓は `Container`というStyled Componentを適用している</h2>
      <Container>
        <h2>{title}</h2>
        コンポーネントのテスト
      </Container>
    </>
  );
};

export default memo(ComponentTest);
