import React, { useState, useRef } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./views/Login";
import Layout from "./views/Layout";
import List from "./views/List";
import Regist from "./views/Regist";
import Modify from "./views/Modify";
import Calculate from "./views/Calculate";
import "./assets/css/page.css";
import "./assets/css/layout.css";
import "./assets/css/common.css";
import "./assets/css/reset.css";

function App() {
  const index = useRef(1);
  const [receiptList, setReceiptList] = useState([]);

  const createReceiptList = (receiptItem) => {
    const newReceiptList = [...receiptList, receiptItem];

    setReceiptList(newReceiptList);
    index.current += 1;
  };

  const findReceiptItem = (receiptItemId) => {
    return receiptList.find((receiptItem) => receiptItem.id === receiptItemId);
  };

  const modifyReceiptItem = (item) => {
    const newReceiptList = receiptList.map((receiptItem) => {
      if (receiptItem.id !== item.id) {
        return receiptItem;
      }
      return item;
    });
    setReceiptList(newReceiptList);
  };

  const navigate = useNavigate();

  const onRemove = (receiptItemId) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      return;
    }
    setReceiptList(
      receiptList.filter((receiptItem) => receiptItem.id !== receiptItemId)
    );
    navigate("/list");
  };

  const calculatefliterList = (year, month) => {
    let filterDate = `${year}.${month}`;

    const newReceiptList = receiptList.filter((receiptItem) =>
      receiptItem.date.substring(0, 7).includes(filterDate)
    );

    return newReceiptList;
  };

  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/list"
          element={<List receiptList={receiptList} onRemove={onRemove} />}
        />
        <Route
          path="/regist"
          element={
            <Regist
              type="등록"
              index={index}
              createReceiptList={createReceiptList}
            />
          }
        />
        <Route path="/modify">
          <Route
            path=":receiptItemId"
            element={
              <Modify
                type="수정"
                findReceiptItem={findReceiptItem}
                modifyReceiptItem={modifyReceiptItem}
              />
            }
          />
        </Route>
        <Route
          path="/calculate"
          element={<Calculate calculatefliterList={calculatefliterList} />}
        />
      </Route>
      <Route path="*" element={<>페이지를 찾을수 없습니다.</>} />
    </Routes>
  );
}

export default App;
