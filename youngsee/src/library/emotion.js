import { css } from '@emotion/react';

export const reset = css`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SBAggroM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    appearance: none;
    box-shadow: none;
    font-family: inherit;
  }

  input {
    outline: none;
    background: none;
    appearance: none;
    border: none;
    font-family: inherit;
  }

  textarea {
    outline: none;
    font-family: inherit;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
