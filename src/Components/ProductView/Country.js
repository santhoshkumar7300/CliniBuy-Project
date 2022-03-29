import Styles from "./Country.module.css";
import searchIcon from "../../Assets/blogSearch.svg";
import Checkbox from "./CheckboxOptions";
export default function Country() {
  return (
    <div className="mt-3">
      <p className="fw-bold">Country of orgin</p>
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
