import React from "react";
import ListItem from "./ListItem";
import logo from "../assets/image/logo.png";

function List({ receiptList }) {
  return (
    <main>
      {receiptList.length !== 0 ? (
        <div className="receipt-list">
          {receiptList.map((receiptItem) => (
            <ListItem key={receiptItem.id} receiptItem={receiptItem} />
          ))}
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

export default List;
