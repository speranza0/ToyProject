import instance from 'src/library/axios';

export const login = async ({ id, password }) => {
  const result = await instance.post('/user/login', { id, password });
  return result.data.data;
};
