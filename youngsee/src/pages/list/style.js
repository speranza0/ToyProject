import { css } from '@emotion/react';

export const block = css``;

export const receiptList = css`
  border: 2px solid #b9b9b9;

  & > div + div {
    border-top: 1px solid #b9b9b9;
  }
`;

export const receiptItem = css`
  padding: 15px 16px;
  position: relative;

  .receipt-idx {
    font-size: 10px;
    font-weight: 500;
    color: #b9b9b9;
    padding-bottom: 8px;
  }

  .receipt-price {
    font-family: 'SBAggroB';
    font-size: 18px;
    color: #5914d6;
    padding-bottom: 12px;
  }

  .receipt-comment {
    font-size: 14px;
    font-family: 'SBAggroM';
    padding-bottom: 10px;
    line-height: 20px;
  }

  .receipt-day {
    font-size: 10px;
    font-weight: 500;
    padding-bottom: 1.5px;
    display: flex;
  }

  .receipt-action {
    position: absolute;
    bottom: 15px;
    right: 16px;
    display: flex;
    align-items: center;
  }

  .receipt-edit {
    color: #5914d6;
  }

  .receipt-remove {
    cursor: pointer;
    margin-left: 6px;
    color: #ff6e6e;
  }
`;

export const blank = css`
  padding: 60px 0;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
  }

  p {
    font-family: 'SBAggroM';
    font-size: 24px;
    color: #4d4d4d;
    text-align: center;
  }
`;
