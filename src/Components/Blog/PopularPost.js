import Styles from "./PopularPost.module.css";
import postImg from "../../Assets/popularpostImg.svg";
export default function PopularPost() {
  return (
    <div className={Styles.overallParent + " mt-4"}>
      <div className={Styles.titleContainer}>
        <p className="mb-0">Popularpost</p>
        <div className={Styles.hrContainer}>
          <hr className={Styles.firstHr} />
          <hr className={Styles.secondHr} />
        </div>
      </div>

      {[...new Array(3)].map((e) => (
        <div className={Styles.dataContainer}>
          <img className={Styles.dataImg} src={postImg} alt="img" />
          <div className={Styles.descriptionContainer}>
            <p className={Styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className={Styles.date}>SEPTEMBER 26,2022</p>
          </div>
        </div>
      ))}
    </div>
  );
}
