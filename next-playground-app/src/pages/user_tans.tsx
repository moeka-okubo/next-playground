import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const API_URL = "https://7e1d5d4b-c8e7-4e1f-b7ab-f28b94542e4d.mock.pstmn.io";

const fetchUser = async () => {
  const response = await fetch(`${API_URL}/api/user`);
  return response.json();
};

// 意図的に失敗するAPI呼び出し
const updateProfile = async (newName: string) => {
  // 遅延を追加して非同期処理をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // サーバーエラーをシミュレート
  throw new Error("Server error");
};

export default function Profile() {
  const queryClient = useQueryClient();
  const [inputName, setInputName] = useState("");

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: updateProfile,
    onMutate: async (newName) => {
      // 既存のクエリをキャンセル
      await queryClient.cancelQueries({ queryKey: ["user"] });

      // 以前のユーザー情報を保存
      const previousUser = queryClient.getQueryData(["user"]);

      // オプティミスティックに更新
      queryClient.setQueryData(["user"], (old: any) => ({
        ...old,
        name: newName,
      }));

      // コンテキストオブジェクトを返す
      return { previousUser };
    },
    onError: (err, newName, context: any) => {
      // エラーが発生した場合、以前の状態にロールバック
      queryClient.setQueryData(["user"], context.previousUser);
      toast.error("プロフィールの更新に失敗しました。");
    },
    onSettled: () => {
      // 成功・失敗にかかわらず、最新のデータを再取得
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  if (error) return <div>Failed to load</div>;
  if (!user) return <div>Loading...</div>;

  const handleUpdateProfile = () => {
    if (inputName) {
      mutation.mutate(inputName);
    }
  };

  return (
    <div>
      <h1>Current name: {user.name}</h1>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="New name"
      />
      <button onClick={handleUpdateProfile} disabled={mutation.isPending}>
        {mutation.isPending ? "Updating..." : "Update Profile"}
      </button>
      {mutation.isError && (
        <div style={{ color: "red" }}>
          An error occurred: {mutation.error.message}
        </div>
      )}
    </div>
  );
}
