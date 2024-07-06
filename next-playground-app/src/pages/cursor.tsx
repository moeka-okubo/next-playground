const Cursor = () => {
  return (
    <>
      <h1>カーソル遷移順テスト</h1>
      <p>Tabキーを押して、フォーカスの移動順序を確認してください。</p>

      <form>
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="name">名前:</label>
          <input type="text" id="name" name="name" tabIndex={2} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label htmlFor="email">メールアドレス:</label>
          <input type="email" id="email" name="email" tabIndex={1} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label htmlFor="message">メッセージ:</label>
          <textarea id="message" name="message" tabIndex={3}></textarea>
        </div>

        <div style={{ marginBottom: 24 }}>
          <button type="submit" tabIndex={4}>
            送信
          </button>
        </div>

        <div style={{ marginBottom: 24 }}>
          <a href="#" tabIndex={0}>
            ヘルプ
          </a>
        </div>
      </form>
    </>
  );
};

export default Cursor;
