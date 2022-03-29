import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";
import Styles from "./FeauturedProducts.module.css";
import feautureImg1 from "../../Assets/feautureImg1.png";
import feautureImg2 from "../../Assets/feautureImg2.png";
import feautureImg3 from "../../Assets/feautureImg3.png";
import feautureImg4 from "../../Assets/feautureImg4.png";
import feautureImg5 from "../../Assets/feautureImg5.png";
import Rating from "react-rating";
import shop from "../../Assets/shop.png";
import heart from "../../Assets/heart.png";
import blackSearch from "../../Assets/blackSearch.png";
import outlineStar from "../../Assets/outlineStar.svg";
import filledStar from "../../Assets/filledStar.svg";
import { useState } from "react";
export default function FeauturedProducts() {
  const [data, setData] = useState([
    {
      description: "rvk sitara certified ppe kit",
      oldPrice: "20.44",
      newPrice: "10.44",
      img: feautureImg2,
    },
    {
      description: "impression meterial",
      oldPrice: "20.44",
      newPrice: "10.44",
      img: feautureImg3,
    },
    {
      description: "samson cervical collar soft",
      oldPrice: "20.44",
      newPrice: "10.44",
      img: feautureImg4,
    },
    {
      description: "restorative refill syringe",
      oldPrice: "20.44",
      newPrice: "10.44",
      img: feautureImg5,
    },
  ]);

  return (
    <div>
      <div className=" container-fluid mt-5">
        <span>
          <span className="fw-bold fs-2">Feautured Products</span>

          <img className={Styles.arrowImg} src={rightArrow} alt="right" />
          <img className={Styles.arrowImg} src={leftArrow} alt="left" />
        </span>
      </div>
      <div className=" container-fluid">
        <hr className={Styles.firstHr} />
        <hr className={Styles.secondHr} />
      </div>

      <div className={Styles.detailsParentContainer + " mt-5 mb-5"}>
        <div className={Styles.leftParentContainer}>
          <button className={Styles.newBtn}>New</button>
          <img className={Styles.leftImg} src={feautureImg1} alt="img1" />
          <p className={Styles.title1}>suction machine</p>
          <div className={Styles.title2Parent}>
            <p className={Styles.title2}>
              ashok enterprises ca-mi portable desk type electric suction
            </p>
          </div>
          <div className={Styles.title2Parent + " mb-3"}>
            <Rating
              placeholderRating={3.5}
              emptySymbol={<img src={outlineStar} className="icon" />}
              placeholderSymbol={<img src={outlineStar} className="icon" />}
              fullSymbol={<img src={filledStar} className="icon" />}
            />
          </div>
          <h4 className={Styles.productOffer2}>
            <span className={Styles.productOffer}>₹10.55</span>₹ 1500.4
          </h4>
          <div className={Styles.title2Parent + " mt-3 mb-5"}>
            <button className={Styles.addCartBtn}>add to cart</button>
          </div>
        </div>
        <div className={Styles.rightParentContainer}>
          {data.map((e) => (
            <div className={Styles.productContainer}>
              <div className={Styles.optionsParentCOntainer}>
                <div className={Styles.productSearchContainer}>
                  <img
                    className={Styles.productSearch}
                    src={blackSearch}
                    alt="search"
                  />
                </div>
                <div className={Styles.productSearchContainer}>
                  <img
                    className={Styles.productSearch}
                    src={shop}
                    alt="search"
                  />
                </div>
                <div className={Styles.productSearchContainer}>
                  <img
                    className={Styles.productSearch}
                    src={heart}
                    alt="search"
                  />
                </div>
              </div>
              <button className={Styles.newBtn}>New</button>
              <div className={Styles.productImgContainer}>
                <img className={Styles.productImg} src={e.img} alt="img1" />
              </div>
              <h4 className={Styles.productDescription}>{e.description}</h4>
              <h4 className={Styles.productOffer2}>
                <span className={Styles.productOffer}>₹{e.oldPrice}</span> ₹{" "}
                {e.newPrice}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
