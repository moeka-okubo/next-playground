import { useState } from "react";
import useSWR, { mutate } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const [shouldRevalidate, setShouldRevalidate] = useState(false);
  const API_URL = "https://7e1d5d4b-c8e7-4e1f-b7ab-f28b94542e4d.mock.pstmn.io";
  const { data: user, error } = useSWR(`${API_URL}/api/user`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
    shouldRetryOnError: false,
  });

  const updateProfile = async () => {
    // プロフィール更新のロジック
    await fetch(`${API_URL}/api/update-profile`, { method: "POST" });
    setShouldRevalidate(true);
  };

  if (shouldRevalidate) {
    // 手動で再フェッチを行う
    mutate(`${API_URL}/api/user`);
    setShouldRevalidate(false);
  }

  if (error) return <div>Failed to load</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
}
