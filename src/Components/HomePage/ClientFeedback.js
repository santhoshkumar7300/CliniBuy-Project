import Styles from "./ClientFeedback.module.css";
import detailsImg1 from "../../Assets/detailsImg1.svg";
import detailsImg2 from "../../Assets/detailsImg2.svg";
import profile from "../../Assets/profile.svg";
import clientLeftArrow from "../../Assets/clientLeftArrow.png";
import clientRightArrow from "../../Assets/clientRightArrow.png";

export default function ClientFeedback() {
  return (
    <div>
      <div className={Styles.bgImg}>
        <p className={Styles.titlePara}>
          <span className={Styles.title}>What Our</span>{" "}
          <span className={Styles.title2}>Client's Say</span>
        </p>
        <p className={Styles.descriptionParent}>
          <p className={Styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            sollicitudin quam arcu posuere amet
          </p>
        </p>
        <div className={Styles.detailsParentContainer}>
          <div className={Styles.DetailsBg + " mb-5"} />
          <div className={Styles.details}>
            <div className={Styles.descriptionParent + " mt-5"}>
              <img src={profile} alt="profile" />
              <div className={Styles.clientDetails}>
                <p className={Styles.para}>Mr.Critical Mass</p>
                <p className={Styles.para}>Founder of Lorum ipsum</p>
              </div>
            </div>
            <img className={Styles.detailimg1} src={detailsImg1} alt="img1" />
            <img className={Styles.detailimg2} src={detailsImg2} alt="img2" />
            <img
              className={Styles.leftArrow}
              src={clientLeftArrow}
              alt="left"
            />
            <img
              className={Styles.rightArrow}
              src={clientRightArrow}
              alt="right"
            />
            <p className={Styles.descriptionParent + " mt-4"}>
              <p className={Styles.feedback}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                amet at a tortor, sed. In magna amet viverra nisl. Cras congue
                tincidunt euismod sed eget neque vitae. Felis, fames non nullam
                netus ipsum, auctor at.Ut sit sed maecenas sed.Tincidunt felis
                interdum sagittis sit tincidunt at feugiat tellus libero. Cras
                sed sed aliquet risus sagittis. Pretium lectus risus tristique
                turpis porttitor. Proin mattis tellus nunc accumsan facilisis
                libero sed.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
