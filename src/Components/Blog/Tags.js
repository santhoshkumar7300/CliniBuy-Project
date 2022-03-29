import Styles from "./Tags.module.css";

export default function Tags() {
  return (
    <div className={Styles.overallParent + " mt-4"}>
      <div className={Styles.titleContainer}>
        <p className="mb-0">Tags</p>
        <div className={Styles.hrContainer}>
          <hr className={Styles.firstHr} />
          <hr className={Styles.secondHr} />
        </div>
      </div>

      <div className={Styles.dataContainer}>
        {[...new Array(5)].map((e) => (
          <span className={Styles.data}>Covid Product</span>
        ))}
      </div>
    </div>
  );
}
