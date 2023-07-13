import instance from "src/library/axios";

export interface LoginProps {
  username: string;
  password: string;
}

export const login = async ({ username, password }: LoginProps) => {
  const result = await instance.post("/user/login", { username, password });
  return result.data;
};
