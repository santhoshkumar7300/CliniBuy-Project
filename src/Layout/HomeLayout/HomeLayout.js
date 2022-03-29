import React, { useEffect } from "react";
// import classes from "HomeLayout.module.css";

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";

import Header from "../../SharedComponents/Header/Header";

function HomeLayout() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
