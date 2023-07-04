import { css } from '@emotion/react';

export const block = css``;

export const logo = css`
  .logo-icon {
    display: block;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-family: 'SBAggroB';
    color: #ffffff;
    margin-top: 28px;
    font-size: 32px;
    line-height: 44px;
  }
`;

export const form = css`
  margin-top: 50px;

  .form-item + .form-item {
    margin-top: 36px;
  }

  .form-item input {
    color: #ffffff;
    font-size: 16px;
    width: 100%;
    border-bottom: 2px solid #ffffff;
    padding: 6px 0;
  }

  .form-item input::placeholder {
    color: #ffffff;
  }

  .form-item button {
    width: 100%;
    height: 44px;
    color: #ffffff;
    font-size: 18px;
    border: 2px solid #ffffff;
    font-family: initial;
  }

  .form-item.form-action {
    margin-top: 80px;
  }
`;

export const copyright = css`
  text-align: center;
  color: #ffffff;
  margin-top: 182px;
`;
