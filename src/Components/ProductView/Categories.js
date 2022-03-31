import Styles from "./Categories.module.css";
import searchIcon from "../../Assets/blogSearch.svg";
import Checkbox from "./CheckboxOptions";

export default function ProductViewCategories() {
  return (
    <div>
      <div className={Styles.titleContainer}>
        <p className="mb-0 text-uppercase fs-5 fw-bold">Filter By</p>
        <div className={Styles.hrContainer}>
          <hr className={Styles.firstHr} />
          <hr className={Styles.secondHr} />
        </div>
      </div>
      <p className={Styles.categoriestitle}>Categories</p>
      <div className={Styles.searchContainer}>
        <input
          className={Styles.searchInput}
          type="text"
          placeholder="search..."
        />
        <img className={Styles.searchIcon} src={searchIcon} alt="search" />
      </div>
      <Checkbox />
    </div>
  );
}
