import Styles from "./ProductCategories.module.css";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";
import productImg1 from "../../Assets/productImg1.svg";
import productImg2 from "../../Assets/productImg2.svg";
import productImg3 from "../../Assets/productImg3.svg";
import productImg4 from "../../Assets/productImg4.svg";
import productImg5 from "../../Assets/productImg5.svg";
import productImg6 from "../../Assets/productImg6.svg";
import productImg7 from "../../Assets/productImg7.svg";
import productImg8 from "../../Assets/productImg8.svg";
import blackSearch from "../../Assets/blackSearch.png";
import { useState } from "react";

export default function ProductCategories() {
  const [productData, setProductData] = useState([
    {
      description: "consumable & disposable",
      offer: "up to 50% off",
      img: productImg1,
    },
    {
      description: "medical device & equipment",
      offer: "up to 50% off",
      img: productImg2,
    },
    {
      description: "lab diagnonstices & instruments",
      offer: "up to 50% off",
      img: productImg3,
    },
    {
      description: "medical implants",
      offer: "up to 50% off",
      img: productImg4,
    },
    {
      description: "hospital establishment",
      offer: "up to 50% off",
      img: productImg5,
    },
    {
      description: "dental",
      offer: "up to 50% off",
      img: productImg6,
    },
    {
      description: "surgical instruments",
      offer: "up to 50% off",
      img: productImg7,
    },
    {
      description: "physiotherapy & rehabilitation",
      offer: "up to 50% off",
      img: productImg8,
    },
  ]);

  return (
    <div>
      <div className=" container-fluid mt-5">
        <span>
          <span className="fw-bold fs-2">Categories of</span>
          <span className="fs-2"> Products</span>

          <img className={Styles.arrowImg} src={rightArrow} alt="right" />
          <img className={Styles.arrowImg} src={leftArrow} alt="left" />
        </span>
      </div>
      <div className=" container-fluid">
        <hr className={Styles.firstHr} />
        <hr className={Styles.secondHr} />
      </div>
      <div className={Styles.productParentContainer + " container-fluid"}>
        {productData.map((e) => (
          <div className={Styles.productContainer}>
            <div className={Styles.productImgContainer}>
              <img className={Styles.productImg} src={e.img} alt="img1" />
              <div className={Styles.productSearchContainer}>
                <img
                  className={Styles.productSearch}
                  src={blackSearch}
                  alt="search"
                />
              </div>
            </div>
            <h4 className={Styles.productDescription}>{e.description}</h4>
            <h4 className={Styles.productOffer}>{e.offer}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
