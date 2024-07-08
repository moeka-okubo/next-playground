import { useState } from "react";
import ComponentTestTailWind from "@/components/ComponentTestTailwind";

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="header">
        <input
          type="text"
          placeholder="画面コール番号"
          className="apply-number-form"
        />
      </header>
      <div className="container">
        <h1 className="">Tailwindを用いてヘッダーのデザイン作成</h1>
        <h2 className="text">共通スタイルテスト</h2>
        <ComponentTestTailWind className="test-page" />
        <p className="my-4">{value}</p>
        <form>
          <button
            type="button"
            className={`button ${value % 2 === 1 ? "active" : ""}`}
            onClick={increaseValue}
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
