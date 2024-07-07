import { useState } from "react";
import common from "../../styles/common.module.css";
import ComponentTestModule from "@/components/ComponentTestModule";
import style from "../../styles/modules.module.css";

const TestPage = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <header className={style.header}>
        <input
          className={style.applyNumberForm}
          type="text"
          placeholder="画面コール番号"
        />
      </header>
      <div className={style.container}>
        <h1>Styled Componentを用いてヘッダーのデザイン作成</h1>
        <h2 className={`${common.text} ${style.text}`}>共通スタイルテスト</h2>
        <ComponentTestModule className={style.testPageYellowBackground} />
        <p>{value}</p>
        <form className={style.form}>
          <button
            className={`${style.button} ${value % 2 !== 0 ? style.active : ""}`}
            type="button"
            onClick={increaseValue}
          >
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default TestPage;
