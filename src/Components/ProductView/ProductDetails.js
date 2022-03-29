import Styles from "./ProductDetails.module.css";
import outlineStar from "../../Assets/EmptyStar.svg";
import filledStar from "../../Assets/outlineStar.svg";
import Rating from "react-rating";
import arrivalImg1 from "../../Assets/arrivalImg1.svg";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  let navigate = useNavigate();

  return (
    <div className={Styles.productContainer}>
      <div className={Styles.productImgContainer}>
        <img
          className={Styles.productImg}
          onClick={() => navigate("/home/view")}
          src={arrivalImg1}
          alt="img1"
        />
      </div>
      <h4 className={Styles.productDescription}>Kabala Sodium Citrate Black</h4>
      <h4 className={Styles.productOffer2}>
        <span className={Styles.productOffer}>₹ 20.44</span> ₹ 10.44
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
  );
}
