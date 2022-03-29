import Styles from "./Categories.module.css";
import rightArrow from "../../Assets//blogRightArrow.svg";

export default function Categories() {
  return (
    <div className={Styles.overallParent + " mt-3"}>
      <div className={Styles.titleContainer}>
        <p className="mb-0">Categories</p>
        <div className={Styles.hrContainer}>
          <hr className={Styles.firstHr} />
          <hr className={Styles.secondHr} />
        </div>
      </div>

      {[...new Array(10)].map((e) => (
        <div className="mt-3">
          <img src={rightArrow} alt="arrow" />
          <span className={Styles.data + " fs-6"}>Consumable & Disposable</span>
        </div>
      ))}
    </div>
  );
}
