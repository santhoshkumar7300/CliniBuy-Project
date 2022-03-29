import Styles from "./HomeThird.module.css";
import Img1 from "../../Assets/thirdImg1.svg";
import Img2 from "../../Assets/thirdImg2.svg";
import Img3 from "../../Assets/thirdImg3.svg";

export default function HomeThird() {
  return (
    <div className={Styles.MainContainer + " container-fluid mb-5 mt-5"}>
      <div className={Styles.docImgContainer}>
        <div className={Styles.contentContainer}>
          <h4 className={Styles.firstContent}>save up to</h4>
          <h2 className={Styles.secondContent}>50 % off</h2>
          <p className={Styles.thirdContetnt}>
            All Kind of medical and surgical products available here
          </p>
          <button className={Styles.btnColor + " btn"}>Shop Now!</button>
        </div>
        <img className={Styles.docimg} src={Img3} alt="img" />
      </div>
      <div className={Styles.sideImgContainer}>
        <div className={Styles.sidebg}>
          <div className={Styles.sideFirstContainer}>
            <h3 className={Styles.sideFirstContent}>Covid Products</h3>
            <p className={Styles.sideSecondDiv}>
              Top Grade Covid Essential Products
            </p>
            <button className={Styles.sideBtnColor + " btn"}>View All+</button>
          </div>
        </div>
        <div className={Styles.sidebg}>
          <div className={Styles.sideSecondContainer}>
            <p className={Styles.sidePara}>
              Physiotherapy & Rehabilitaion-medical
            </p>
            <button className={Styles.sideBtnColor + " btn"}>View All+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
