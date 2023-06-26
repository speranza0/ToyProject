import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Layout from "./views/Layout";
import Main from "./views/Main";
import Regist from "./views/Regist";
import Calculate from "./views/Calculate";
import "./assets/css/page.css";
import "./assets/css/layout.css";
import "./assets/css/common.css";
import "./assets/css/reset.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/list" element={<Main isList={true} />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/calculate" element={<Calculate />} />
      </Route>
      <Route path="*" element={<>페이지를 찾을수 없습니다.</>} />
    </Routes>
  );
}

export default App;
