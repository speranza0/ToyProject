import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../assets/css/common.css";

function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
