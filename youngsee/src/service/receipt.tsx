import instance from "src/library/axios";
import { EditRequest } from "./model/EditRequest";
import { CalculateRequest } from "./model/CalculateRequest";
import { ReceiptDto } from "./model/ReceiptDto";

export const findOneQueryKey = (idx: string | number | undefined) => [
  "receipt",
  idx,
];
export const findAllQueryKey = ["receipts"];

export const findAll = async (): Promise<ReceiptDto[]> => {
  const result = await instance.get("/receipt");
  return result.data;
};

export const findOne = async (idx: string | number | undefined) => {
  const result = await instance.get(`/receipt/${idx}`);
  return result.data;
};

export const create = async ({ day, price, comment }: EditRequest) => {
  const result = await instance.post("/receipt", { day, price, comment });
  return result.data;
};

export const update = async (
  idx: string | number,
  { day, price, comment }: EditRequest
) => {
  const result = await instance.patch(`/receipt/${idx}`, {
    day,
    price,
    comment,
  });
  return result.data;
};

export const remove = async (idx: number) => {
  const result = await instance.delete(`/receipt/${idx}`);
  return result.data;
};

export const calculate = async ({ year, month }: CalculateRequest) => {
  const result = await instance.get("/receipt/calculate", {
    params: {
      year,
      month,
    },
  });
  return result.data;
};
