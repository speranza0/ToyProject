import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container main-color">
      <div className="logo-section">
        <Link to="/">
          <a className="logo" href="/">
            <img className="receipt" src={logo} alt="로고 이미지 오류" />
          </a>
        </Link>
        <p className="title font-aggro">
          영수증 써봐 <br />
          대신 관리해드림
        </p>
      </div>
      <div className="login-section">
        <form id="loginForm">
          <input
            className="id"
            type="text"
            name="id"
            autocomplete="off"
            placeholder="아이디 입력"
          />
          <div className="line"></div>
          <input
            className="password"
            type="password"
            name="password"
            placeholder="비밀번호 입력"
          />
          <div className="line"></div>
          <Link to="/list">
            <button className="log-btn" type="submit">
              로그인
            </button>
          </Link>
        </form>
      </div>
      <div className="copyright">
        <p>Copyright All rights reserved</p>
      </div>
    </div>
  );
}

export default Login;
