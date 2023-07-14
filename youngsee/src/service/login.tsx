import instance from "src/library/axios";

export interface LoginProps {
  username: string;
  password: string;
}

export const session = async () => {
  const result = await instance.get("/user/session");
  console.log(result.data);
  return result.data;
};

export const login = async ({ username, password }: LoginProps) => {
  const result = await instance.post("/user/login", { username, password });
  return result.data;
};
