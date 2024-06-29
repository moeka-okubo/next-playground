import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const channel = new BroadcastChannel("resource_lock_channel");

// パスをロックする
function lockPath(path: string) {
  channel.postMessage({ type: "lock", path });
}

// パスのロックを解除する
function unlockPath(path: string) {
  channel.postMessage({ type: "unlock", path });
}

const TestPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    const handleRouteChange = () => {
      unlockPath(currentPath); // 現在のパスに基づいて適切に変更
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // クリーンアップ
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      unlockPath(currentPath); // 最終的にパスのロックを解除
    };
  }, [router, currentPath]);

  useEffect(() => {
    // 初期ロック
    lockPath(currentPath);

    // 他のタブでリソースがロックされたかを監視
    channel.onmessage = (event) => {
      if (event.data.type === "lock" && event.data.path === currentPath) {
        alert("このパスは別のタブで操作中です。");
      }
    };

    // コンポーネントのアンマウント時にロックを解除
    return () => {
      unlockPath(currentPath);
    };
  }, [router, currentPath]);

  return (
    <div style={{ background: "white", height: "100vh" }}>
      <h1>TestPage</h1>
      <Link href="/">戻る</Link>
    </div>
  );
};

export default TestPage;
