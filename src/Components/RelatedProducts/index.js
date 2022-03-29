import Styles from "./index.module.css";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";
import ProductDetails from "../ProductView/ProductDetails";

export default function RelatedProducts() {
  return (
    <div>
      <div>
        <div className=" container-fluid mt-5 mb-3">
          <span>
            <span className="fw-bold fs-2">Related Products</span>

            <img className={Styles.arrowImg} src={rightArrow} alt="right" />
            <img className={Styles.arrowImg} src={leftArrow} alt="left" />
          </span>
        </div>
        <hr className={Styles.firstHr} />
        <hr className={Styles.secondHr} />
      </div>
      <div className={Styles.img + " mt-5 container"}>
        {[...new Array(4)].map((e) => (
          <ProductDetails />
        ))}
      </div>
    </div>
  );
}
