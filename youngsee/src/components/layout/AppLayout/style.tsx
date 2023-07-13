import { css } from '@emotion/react';

export const block = css``;

export const container = css`
  max-width: 460px;
  margin: auto;
  padding: 28px;
`;

export const header = css`
  display: flex;
  justify-content: space-between;

  .header-btn {
    font-family: 'SBAggroB';
    width: 45%;
    height: 36px;
    text-align: center;
    padding: 9px 16px;
    border: 1px solid #b9b9b9;
    font-size: 16px;
    color: #b9b9b9;
  }

  .header-btn + .header-btn {
    margin-left: 10px;
  }

  .header-btn img {
    width: 21px;
  }

  .header-btn.active {
    color: #5914d6;
    border-color: #5914d6;
  }

  .header-btn:hover {
    color: #5914d6;
    border-color: #5914d6;
  }

  .header-btn.header-btn-small {
    width: 10%;
    padding: 9px 18px 9px 20px;
    margin-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const main = css`
  margin-top: 38px;
`;
