import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://7e1d5d4b-c8e7-4e1f-b7ab-f28b94542e4d.mock.pstmn.io";

const fetchUser = async () => {
  const response = await fetch(`${API_URL}/api/user`);
  return response.json();
};

const updateProfile = async () => {
  const response = await fetch(`${API_URL}/api/update-profile`, {
    method: "POST",
  });
  return response.json();
};

export default function Profile() {
  const queryClient = useQueryClient();

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      // プロフィール更新成功後、自動的にユーザーデータを再フェッチ
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  if (error) return <div>Failed to load</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => mutation.mutate()}>Update Profile</button>
    </div>
  );
}
