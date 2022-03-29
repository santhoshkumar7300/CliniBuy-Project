import Styles from "./Brand.module.css";
import searchIcon from "../../Assets/blogSearch.svg";
import Checkbox from "./CheckboxOptions";

export default function ProductBrand() {
  return (
    <div>
      <p>Brand</p>
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
