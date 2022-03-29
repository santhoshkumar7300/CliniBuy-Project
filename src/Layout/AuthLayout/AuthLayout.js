import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import classes from "./AuthLayout.module.css";

function AuthLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AuthLayout;
