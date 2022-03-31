import { useEffect, useState } from "react";
import ProductBrand from "./Brand";
import ProductViewCategories from "./Categories";
import Country from "./Country";
import ProductDiscount from "./Discount";
import Styles from "./index.module.css";
import MadeIndia from "./MadeIndea";
import ProductPrice from "./Price";
import ProductList from "./ProductList";
import CustomerRating from "./Rating";

export default function ProductView() {
  return (
    <div>
      <div className={Styles.bg + " d-flex justify-content-center mt-5"}>
        <div className="align-self-center">
          <h3 className="text-center">Consumable & Disposable</h3>
          <p className="text-center">Home / Consumable & Disposable</p>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <div className={Styles.leftContainer}>
          <ProductViewCategories />
          <ProductPrice />
          <ProductDiscount />
          <ProductBrand />
          <CustomerRating />
          <MadeIndia />
          <Country />
        </div>
        <div className={Styles.rightContainer}>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
