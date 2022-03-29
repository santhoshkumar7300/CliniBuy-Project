import insideImg from "../../Assets/inside.svg";
import Styles from "./FirstComponent.module.css";

export default function FirstComponent() {
  return (
    <div className={Styles.bgColor + " container-fluid mt-5"}>
      <div className={Styles.textContainer}>
        <h3 className={Styles.fristText + " text-uppercase"}>
          online b2b platform
        </h3>
        <h1 className={Styles.secondText}>All Your Medical And</h1>
        <h2 className={Styles.thirdText + " fw-normal"}>Surgical Needs</h2>
        <button className="btn btn-info btn-lg mt-4">Shop Now</button>
      </div>
      <img
        src={insideImg}
        alt="inside"
        className={Styles.InnerImg + " img-fluid"}
      />
    </div>
  );
}
