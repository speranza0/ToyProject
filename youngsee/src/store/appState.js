import { atom } from 'recoil';

export const indexState = atom({
  key: 'indexState',
  default: 1,
})

export const receiptListState = atom({
  key: 'receiptListState',
  default: [],
})