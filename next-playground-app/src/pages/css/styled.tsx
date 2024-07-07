import ComponentTest from "@/components/ComponentTest";
import styled from "styled-components";
import { commonTextStyle } from "../../styles/commonStyle";
import { useState } from "react";
import { Form } from "@/styles/Styled";

type ButtonProps = {
  $isOdd: boolean;
};

const Header = styled.header`
  height: 64px;
  background-color: #ef6100;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

const ApplyNumberForm = styled.input`
  border: none;
  border-radius: 4px;
  width: 195px;
  padding: 14px 8px;
`;

export const CommonStyleTest = styled.h2`
  ${commonTextStyle}
  text-decoration: underline;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  padding: 80px 16px 0;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$isOdd ? "#ef6100" : "initial")};
`;

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <Header>
        <ApplyNumberForm type="text" placeholder="画面コール番号" />
      </Header>
      <Container>
        <h1>Styled Componentを用いてヘッダーのデザイン作成</h1>
        <CommonStyleTest>共通スタイルテスト</CommonStyleTest>
        <ComponentTest />
        <p>{value}</p>
        <Form>
          <Button
            type="button"
            $isOdd={value % 2 === 1}
            onClick={increaseValue}
          >
            送信
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TestPage;
