import { css } from '@emotion/react';

export const block = css``;

export const title = css`
  font-family: 'SBAggroB';
  font-size: 24px;
  span {
    color: #5914d6;
  }
`;

export const form = css`
  margin-top: 20px;

  .form-item + .form-item {
    margin-top: 16px;
  }

  .form-item .input {
    display: block;
    color: #4d4d4d;
    width: 100%;
    height: 36px;
    padding: 8px 10px 8px 10px;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
  }

  .form-item .input-date {
  }

  .form-item .input-text {
  }

  .form-item .input-textarea {
    height: 120px;
    resize: none;
  }
`;

export const action = css`
  display: flex;
  margin-top: 38px;

  & > button {
    width: 50%;
  }

  & > button + button {
    margin-left: 8px;
  }
`;
