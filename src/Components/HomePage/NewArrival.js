import Styles from "./NewArrival.module.css";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";
import heart from "../../Assets/heart.png";
import swap from "../../Assets/swap.png";
import shop from "../../Assets/shop.png";
import outlineStar from "../../Assets/outlineStar.svg";
import filledStar from "../../Assets/filledStar.svg";
import blackSearch from "../../Assets/blackSearch.png";
import Rating from "react-rating";
import arrivalImg1 from "../../Assets/arrivalImg1.svg";
import arrivalImg2 from "../../Assets/arrivalImg2.svg";
import arrivalImg3 from "../../Assets/arrivalImg3.svg";
import arrivalImg4 from "../../Assets/arrivalImg4.svg";
import arrivalImg5 from "../../Assets/arrivalImg5.svg";
import arrivalImg6 from "../../Assets/arrivalImg6.svg";
import arrivalImg7 from "../../Assets/arrivalImg7.svg";
import arrivalImg8 from "../../Assets/arrivalImg8.svg";
import arrivalImg9 from "../../Assets/arrivalImg9.svg";
import arrivalImg10 from "../../Assets/arrivalImg10.svg";
import arrivalImg11 from "../../Assets/arrivalImg11.svg";
import arrivalImg12 from "../../Assets/arrivalImg12.svg";
import { useState } from "react";
export default function NewArraival() {
  const [arrivalData, setArrivalData] = useState([
    {
      description: "venticare nebulizer mask",
      oldOffer: "20.44",
      newOffer: "10.44",
      img: arrivalImg1,
    },
    {
      description: "oxygo oxygen portable kit",
      oldOffer: "1,900,00",
      newOffer: "1,500,00",
      img: arrivalImg2,
    },
    {
      description: "shofo porcelain adjustment",
      oldOffer: "1,180.00",
      newOffer: "1000",
      img: arrivalImg3,
    },
    {
      description: "vaishnav surgicals suture",
      oldOffer: "310.80",
      newOffer: "326.42",
      img: arrivalImg4,
    },
    {
      description: "blood bank refrigerator",
      oldOffer: "20.44",
      newOffer: "10.44",
      img: arrivalImg5,
    },
    {
      description: "wheelchair powder coated",
      oldOffer: "1,900,00",
      newOffer: "1,500,00",
      img: arrivalImg6,
    },
    {
      description: "ethanol based hand sanitizer",
      oldOffer: "1,180.00",
      newOffer: "1000",
      img: arrivalImg7,
    },
    {
      description: "surgiwear box screws",
      oldOffer: "310.80",
      newOffer: "326.42",
      img: arrivalImg8,
    },
    {
      description: "shoulder immobilizer",
      oldOffer: "20.44",
      newOffer: "10.44",
      img: arrivalImg9,
    },
    {
      description: "restorative refill syringe",
      oldOffer: "1,900,00",
      newOffer: "1,500,00",
      img: arrivalImg10,
    },
    {
      description: "stethoscope",
      oldOffer: "1,180.00",
      newOffer: "1000",
      img: arrivalImg11,
    },
    {
      description: "ezray air plus portable xray",
      oldOffer: "310.80",
      newOffer: "326.42",
      img: arrivalImg12,
    },
  ]);

  return (
    <div>
      <div className=" container-fluid mt-5">
        <span>
          <span className="fw-bold fs-2">New Arrival</span>

          <img className={Styles.arrowImg} src={rightArrow} alt="right" />
          <img className={Styles.arrowImg} src={leftArrow} alt="left" />
        </span>
      </div>
      <div className=" container-fluid">
        <hr className={Styles.firstHr} />
        <hr className={Styles.secondHr} />
      </div>

      <div className={Styles.productParentContainer + " container-fluid"}>
        {arrivalData.map((e) => (
          <div className={Styles.productContainer}>
            <div className={Styles.productImgContainer}>
              <img className={Styles.productImg} src={e.img} alt="img1" />
              <div className={Styles.productSearchContainer}>
                <img className={Styles.options} src={shop} alt="shop" />
                <hr className={Styles.optionsHr} />
                <img className={Styles.options} src={heart} alt="heart" />
                <hr className={Styles.optionsHr} />
                <img className={Styles.options} src={swap} alt="swap" />
                <hr className={Styles.optionsHr} />
                <img
                  className={Styles.options}
                  src={blackSearch}
                  alt="search"
                />
              </div>
            </div>
            <h4 className={Styles.productDescription}>{e.description}</h4>
            <h4 className={Styles.productOffer2}>
              <span className={Styles.productOffer}>₹{e.oldOffer}</span> ₹{" "}
              {e.newOffer}
            </h4>
            <div className={Styles.ratingContainer}>
              <Rating
                placeholderRating={3.5}
                emptySymbol={<img src={outlineStar} className="icon" />}
                placeholderSymbol={<img src={outlineStar} className="icon" />}
                fullSymbol={<img src={filledStar} className="icon" />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
