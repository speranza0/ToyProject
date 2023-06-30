import React from "react";
import { NavLink } from "react-router-dom";
import iconWrite from "../assets/image/icon-write.png";
import styles from '../assets/css/Header.module.css'

function Header() {
  return (
    <header id="header" className={styles['list-section']}>
       <NavLink to="/list" className={({isActive})=> isActive ? `${styles['list-btn']} ${styles['list-btn-active']} font-aggro` : `${styles['list-btn']} font-aggro`}>
        영수증 목록
       </NavLink>
      <NavLink to="/calculate" className={({isActive})=> isActive ? `${styles['calculate-btn']} ${styles['calculate-btn-active']} font-aggro`: `${styles['calculate-btn']} font-aggro`}>
        정산하기
      </NavLink>
      <NavLink to="/regist" className={({isActive})=> isActive ? `${styles['write-btn']} ${styles['write-btn-active']}`: `${styles['write-btn']} font-aggro`}>
      <img src={iconWrite} alt="등록 이미지 오류" />
      </NavLink>
    </header>
  );
}

export default Header;
