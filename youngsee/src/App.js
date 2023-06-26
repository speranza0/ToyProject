import React, { useState, useRef } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Layout from "./views/Layout";
import List from "./views/List";
import Regist from "./views/Regist";
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

  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/list" element={<List receiptList={receiptList} />} />
        <Route
          path="/regist"
          element={
            <Regist index={index} createReceiptList={createReceiptList} />
          }
        />
        <Route path="/calculate" element={<Calculate />} />
      </Route>
      <Route path="*" element={<>페이지를 찾을수 없습니다.</>} />
    </Routes>
  );
}

export default App;
