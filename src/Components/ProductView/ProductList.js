import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ProductDetails from "./ProductDetails";
import Styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <div>
      <div className={Styles.sortContainer + " d-flex justify-content-between"}>
        <div>
          <span>Showing 24 out of 10000 products </span>
        </div>
        <div className="d-flex w-25">
          <span className={Styles.sortText + " align-self-center"}>
            Sort By
          </span>
          <DropdownButton
            id="dropdown-basic-button"
            title="Select"
            size="sm"
            variant="white"
            className={Styles.dropDown + " d-flex justify-content-center"}
          >
            <DropdownItem>Products</DropdownItem>
          </DropdownButton>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3 flex-wrap">
        {[...new Array(15)].map((e) => (
          <ProductDetails />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <div className={Styles.pageContainer}>
          <button className={Styles.pageNum}>1</button>
        </div>
      </div>
    </div>
  );
}
