import React from "react";
import logo from "../assets/image/logo.png";
import List from "./List";

function Main({ isList }) {
  const initialTodos = [
    {
      id: 1,
      price: 10000,
      comment: "우유",
      date: "2023.06.24",
    },
    {
      id: 2,
      price: 20000,
      comment: "빵",
      date: "2023.06.24",
    },
    {
      id: 3,
      price: 30000,
      comment: "달걀",
      date: "2023.06.24",
    },
    {
      id: 4,
      price: 40000,
      comment: "밥",
      date: "2023.06.24",
    },
    {
      id: 5,
      price: 50000,
      comment: "치즈",
      date: "2023.06.24",
    },
  ];

  return (
    <main>
      {isList ? (
        <div className="receipt-list">
          <List initialTodos={initialTodos} />
        </div>
      ) : (
        <div className="img-section">
          <img className="back-img" src={logo} alt="로고 이미지 오류" />
          <p className="back-text">영수증 써봐</p>
        </div>
      )}
    </main>
  );
}

export default Main;
