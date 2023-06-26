import React from "react";
import { Link } from "react-router-dom";
import iconWrite from "../assets/image/icon-write.png";

function Header() {
  return (
    <header id="header" className="list-section">
      <Link to="/list" className="list-btn font-aggro active">
        영수증 목록
      </Link>
      <Link to="/calculate" className="calculate-btn font-aggro">
        정산하기
      </Link>
      <Link to="/regist" className="write-btn font-aggro">
        <img src={iconWrite} alt="등록 이미지 오류" />
      </Link>
    </header>
  );
}

export default Header;
