import instance from 'src/library/axios';

export const findOneQueryKey = (idx) => ['receipt', idx];
export const findAllQueryKey = ['receipts'];

export const findAll = async () => {
  const result = await instance.get('/receipt');
  return result.data.data;
};

export const findOne = async (idx) => {
  const result = await instance.get(`/receipt/${idx}`);
  return result.data.data;
};

export const create = async ({ day, price, comment }) => {
  const result = await instance.post("/receipt", { day, price, comment });
  console.log(result);
  return result.data.data;
};

export const update = async (idx, { day, price, comment }) => {
  const result = await instance.patch(`/receipt/${idx}`, {
    day,
    price,
    comment,
  });
  return result.data.data;
};

export const remove = async (idx) => {
  const result = await instance.delete(`/receipt/${idx}`);
  return result.data.data;
};

export const calculate = async ({ year, month }) => {
  const result = await instance.get('/receipt/calculate', {
    params: {
      year,
      month,
    },
  });
  return result.data.data;
};
