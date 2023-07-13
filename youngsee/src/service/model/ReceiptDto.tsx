import { AuthRequest } from "./AuthRequest";

export interface ReceiptDto {
  id: number;
  comment: string;
  price: number;
  day: string;
  createdAt: string;
  updatedAt: string;
  user: AuthRequest;
}
