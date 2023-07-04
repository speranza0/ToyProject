import { css } from '@emotion/react';

export const block = css``;

export const calculate = css`
  .title {
    font-family: SBAggroB;
    font-size: 24px;
  }

  .title-color {
    color: #5914d6;
  }

  .select-box {
    margin-top: 20px;
  }

  select option {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: medium;
    color: #4d4d4d;
  }

  .year-select {
    width: 144px;
    height: 36px;
    padding: 8px 10px;
    color: #000000;
    background-color: #fff;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
  }

  .month-select {
    width: 96px;
    height: 36px;
    padding: 8px 10px;
    color: #000000;
    background-color: #fff;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
  }

  .result {
    margin-top: 40px;
    border-bottom: 1px solid #b9b9b9;
  }

  .result div:first-child {
    font-family: SBAggroM;
    font-size: 18px;
  }

  .result div:last-child {
    margin-top: 16px;
    padding-bottom: 6.5px;
    font-family: SBAggroM;
    font-size: 24px;
    color: #5914d6;
  }
`;
