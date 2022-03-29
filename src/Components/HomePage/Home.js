import React from "react";
import { Outlet } from "react-router-dom";
import Blog from "../Blog";
import ClientFeedback from "./ClientFeedback";
import FeauturedProducts from "./FeauturedProducts";

import FirstComponent from "./FirstComponent";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import NewArraival from "./NewArrival";
import PopularProducts from "./PopularProducts";
import ProductCategories from "./ProductCategories";

function Home() {
  return (
    <>
      <FirstComponent />
      <HomeSecond />
      <ProductCategories />
      <HomeThird />
      <NewArraival />
      <PopularProducts />
      <FeauturedProducts />
      <ClientFeedback />
    </>
  );
}

export default Home;
