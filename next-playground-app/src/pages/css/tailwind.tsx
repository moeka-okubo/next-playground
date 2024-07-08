import { useState } from "react";
import ComponentTestTailWind from "@/components/ComponentTestTailwind";

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full h-16 bg-orange-600 flex items-center px-4">
        <input
          type="text"
          placeholder="画面コール番号"
          className="border-none rounded w-48 py-3 px-2"
        />
      </header>
      <div className="container mx-auto pt-20 px-4">
        <h1 className="text-2xl font-bold mb-4">
          Tailwindを用いてヘッダーのデザイン作成
        </h1>
        <h2 className="text text-xl underline mb-4">共通スタイルテスト</h2>
        <ComponentTestTailWind className="test-page" />
        <p className="my-4">{value}</p>
        <form>
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              value % 2 === 1 ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
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
