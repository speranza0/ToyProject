import instance from 'src/library/axios';

export const login = async ({ username, password }) => {
  const result = await instance.post("/user/login", { username, password });
  return result.data;
};
