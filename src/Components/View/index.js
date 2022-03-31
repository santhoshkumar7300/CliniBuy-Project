import RelatedProducts from "../RelatedProducts";
import ProductViewDetails from "./Details";
import Styles from "./index.module.css";
import Offers from "./Offers";
import ViewProductDetails from "./ViewProductDetails";

export default function View() {
  return (
    <div>
      <div className={Styles.bg + " d-flex justify-content-center mt-5"}>
        <div className="align-self-center">
          <h3 className="text-center">Consumable & Disposable</h3>
          <p className="text-center">Home / Consumable & Disposable</p>
        </div>
      </div>
      <ViewProductDetails />
      <Offers />
      <ProductViewDetails />
      <RelatedProducts />
    </div>
  );
}
