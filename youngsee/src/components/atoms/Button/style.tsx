import { css } from '@emotion/react';

export const block = css`
  height: 36px;
  padding: 8px 16px;
  border: 1px solid #b9b9b9;
  font-size: 16px;
  color: #b9b9b9;
  font-family: 'SBAggroB';

  &.btn-primary {
    border: 1px solid #5914d6;
    color: #5914d6;
  }

  &:hover {
    color: #ffff;
    background-color: #5914d6;
    border-color: #5914d6;
  }
`;
