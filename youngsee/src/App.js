import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import List from "./components/List";
import Regist from "./components/Regist";
import Modify from "./components/Modify";
import Calculate from "./components/Calculate";
import "./assets/css/page.css";
import "./assets/css/reset.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/list"
          element={<List />}
        />
        <Route
          path="/regist"
          element={<Regist />}
        />
        <Route path="/modify">
          <Route
            path=":receiptItemId"
            element={
              <Modify />
            }
          />
        </Route>
        <Route
          path="/calculate"
          element={<Calculate />}
        />
      </Route>
      <Route path="*" element={<>페이지를 찾을수 없습니다.</>} />
    </Routes>
  );
}

export default App;
