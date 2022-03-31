import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ProductDetails from "./ProductDetails";
import Styles from "./ProductList.module.css";
import ProductBrand from "./Brand";
import ProductViewCategories from "./Categories";
import Country from "./Country";
import ProductDiscount from "./Discount";
import MadeIndia from "./MadeIndea";
import ProductPrice from "./Price";
import CustomerRating from "./Rating";

export default function ProductList() {
  return (
    <div>
      <div className={Styles.mblFilter}>
        <button
          className={Styles.dropDown + " btn btn-white text-end"}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Filter
        </button>

        <div
          class="offcanvas offcanvas-bottom h-75"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Filter By
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            {" "}
            <ProductViewCategories />
            <ProductPrice />
            <ProductDiscount />
            <ProductBrand />
            <CustomerRating />
            <MadeIndia />
            <Country />
          </div>
        </div>
      </div>
      <div className={Styles.sortContainer + " d-flex justify-content-between"}>
        <div className={Styles.leftTitleContainer}>
          <span>Showing 24 out of 10000 products </span>
        </div>
        <div className={Styles.filterContainer + " d-flex w-25"}>
          <span className={Styles.sortText + " align-self-center"}>
            Sort By
          </span>
          {/* <DropdownButton
            id="dropdown-basic-button"
            title="Select"
            size="sm"
            variant="white"
            className={Styles.dropDown + " d-flex justify-content-center"}
          >
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <DropdownItem>Products</DropdownItem>
          </DropdownButton> */}
          <div className={Styles.dropdownParent + " dropdown"}>
            <button
              className={Styles.dropDown + " btn dropdown-toggle"}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          Styles.productlists + " d-flex justify-content-between mt-3 flex-wrap"
        }
      >
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
