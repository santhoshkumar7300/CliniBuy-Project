import Styles from "./index.module.css";
import searchIcon from "../../Assets/blogSearch.svg";
import Categories from "./Categories";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import Content from "./Content";

export default function Blog() {
  return (
    <div>
      <div
        className={Styles.bg + " mt-5 container d-flex justify-content-center"}
      >
        <div className="align-self-center">
          <h2 className="text-center text-white fw-bold fs-1 align-self-center">
            Our Blog
          </h2>
          <p className="text-center text-white fs-5 align-self-center">
            Home / Blog
          </p>
        </div>
      </div>

      <div className="container p-0 mt-5 d-flex justify-content-between">
        <div className={Styles.leftContainer}>
          <div className={Styles.searchContainer}>
            <input
              className={Styles.searchInput}
              type="text"
              placeholder="search..."
            />
            <img className={Styles.searchIcon} src={searchIcon} alt="search" />
          </div>
          <Categories />
          <PopularPost />
          <Tags />
        </div>
        <div className={Styles.rightContainer}>
          <Content />
        </div>
      </div>
    </div>
  );
}
