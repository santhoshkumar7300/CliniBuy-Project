import Styles from "./ViewProductDetails.module.css";
import viewimg from "../../Assets/ViewImg.svg";
import zoomIcon from "../../Assets/zoom.svg";
import outlineStar from "../../Assets/EmptyStar.svg";
import filledStar from "../../Assets/filledStar.svg";
import Rating from "react-rating";
import dashedLine from "../../Assets/dashedLine.svg";
import rightArrow from "../../Assets/clientRightArrow.png";
import feature from "../../Assets/feature.svg";
import ProductCount from "../ProductCount.js";
export default function ViewProductDetails() {
  return (
    <div
      className={
        Styles.parentContainer + " d-flex justify-content-between mt-5"
      }
    >
      <div className={Styles.leftContainer}>
        <div className={Styles.imgContainer}>
          <button className={Styles.newBtn}>New</button>
          <img className={Styles.img} src={viewimg} alt="img" />
          <img className={Styles.zoom} src={zoomIcon} alt="zoom" />
        </div>
        <div className="d-flex justify-content-between mt-3">
          {[...new Array(3)].map((e) => (
            <div className={Styles.relatedImgContainer}>
              <img
                className={Styles.relatedImg}
                src={viewimg}
                alt="relatedImg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.rightContainer}>
        <h2 className={Styles.heading}>
          Kabala Sodium Citrate Blue 3.2 Percentage 2ml
        </h2>

        <div>
          <Rating
            placeholderRating={3.5}
            initialRating={4}
            emptySymbol={<img src={outlineStar} className="icon" />}
            placeholderSymbol={<img src={outlineStar} className="icon" />}
            fullSymbol={<img src={filledStar} className="icon" />}
          />
          <span className={Styles.reviewMembers}>(1 customer Review)</span>
        </div>

        <h2 className={Styles.rate}>₹2.85</h2>
        <img className="w-100" src={dashedLine} alt="line" />
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <span className="fw-bold">Sold By : </span>
              <span>Kabala Healthe Pvt.Ltd</span>
            </div>
            <div>
              <span className="fw-bold">GST 12% : </span>
              <span>₹3.19</span>
            </div>
          </div>
          <p className="pt-3">
            <span className="fw-bold">HSN Code : </span>
            <span>952148</span>
          </p>
          <span className="fw-bold">Check Availability & Expiry</span>

          <div
            className={
              Styles.pincodeContainer + " pt-3 d-flex justify-content-between"
            }
          >
            <div>
              <span className="fw-bold">PINCODE : </span>
              <span>112345</span>
            </div>
            <img className={Styles.arrow} src={rightArrow} alt="arrow" />
          </div>
          <hr className={Styles.hr} />

          <p className="fw-bold fs-4">Features : </p>

          {[...new Array(3)].map((e) => (
            <div className="pb-3">
              <img className={Styles.featureImg} src={feature} alt="feature" />
              <span>Sodium Citrate 3.2%</span>
            </div>
          ))}

          <p className="fw-bold fs-4">In Stock</p>
          <div className="d-flex">
            <ProductCount />
            <button className={Styles.cartBtn + " text-uppercase"}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
