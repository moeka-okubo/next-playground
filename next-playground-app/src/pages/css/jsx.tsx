import { useState } from "react";
import { Form } from "@/styles/Styled";
import ComponentTestJsx from "@/components/ComponentTestJsx";

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <header>
        <input
          type="text"
          placeholder="画面コール番号"
          className="apply-number-form"
        />
      </header>
      <div className="container">
        <h1>Styled Componentを用いてヘッダーのデザイン作成</h1>
        <h2 className="common-style-test">共通スタイルテスト</h2>
        <ComponentTestJsx className="test" />
        <p>{value}</p>
        <Form>
          <button
            type="button"
            className={value % 2 === 1 ? "button odd" : "button"}
            onClick={increaseValue}
          >
            送信
          </button>
        </Form>
      </div>

      <style jsx lang="sass">{`
        .header {
          height: 64px;
          background-color: #ef6100;
          position: fixed;
          top: 0;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 16px;
          box-sizing: border-box;
        }

        .apply-number-form {
          border: none;
          border-radius: 4px;
          width: 195px;
          padding: 14px 8px;
        }

        .common-style-test {
          text-decoration: underline;
        }

        .container {
          background-color: white;
          height: 100vh;
          padding: 80px 16px 0;
        }

        .button {
          background-color: ${value % 2 === 1 ? "#ef6100" : "initial"};
        }

        :global(.test.component) {
          background-color: yellow;
        }
      `}</style>
    </>
  );
};

export default TestPage;
