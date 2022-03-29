import Styles from "./PopularProducts.module.css";
import popularImg1 from "../../Assets/popularImg1.png";
import popularImg2 from "../../Assets/popularImg2.png";
import popularImg3 from "../../Assets/popularImg3.png";
import { useState } from "react";

export default function PopularProducts() {
  const [popularData, setPopularData] = useState([
    {
      firstTitle: "bodytech afias",
      secondTitle: "immunoassy analyzer",
      oldOffer: "20.44",
      newOffer: "10.44",
      badge: "hot",
      img: popularImg1,
    },
    {
      firstTitle: "xerox vortran",
      secondTitle: "emergency ventilator",
      oldOffer: "20.44",
      newOffer: "10.44",
      badge: "hot",
      img: popularImg2,
    },
    {
      firstTitle: "digital meter",
      secondTitle: "infrared thermometer",
      oldOffer: "20.44",
      newOffer: "10.44",
      badge: "hot",
      img: popularImg3,
    },
  ]);
  return (
    <div className={Styles.overallContainer + " mb-5"}>
      <div>
        <p className={Styles.titleHeading}>
          <span className="fw-bold fs-1">Our Popular</span>
          <span className="fs-1"> Products</span>
        </p>
        <div className={Styles.titleParaContainer}>
          <p className={Styles.titlePara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sed
            integer pellentesque odio eleifend quis facilisis magna. Et leo
            accumsan bibendum adipiscing pretium dignissim quis.
          </p>
        </div>
      </div>
      {popularData.map((e, index) => (
        <div
          className={Styles.ImgParentContainer + " mt-4"}
          style={
            index === 0
              ? { backgroundColor: "#edf7fb" }
              : index === 1
              ? { backgroundColor: "#F8F8F8" }
              : index === 2
              ? { backgroundColor: "#F3F8FF" }
              : null
          }
        >
          <div className={Styles.innerParent}>
            <p className={Styles.firstTitle + " mt-5"}>{e.firstTitle}</p>
            <h4 className={Styles.secondDescription + " mt-3"}>
              {e.secondTitle}
            </h4>
            <div className={Styles.imgInnerDiv}>
              <p
                className={Styles.innerBackRound}
                style={
                  index === 0
                    ? { backgroundColor: "#d5ecf4" }
                    : index === 1
                    ? { backgroundColor: "#F7F0F1" }
                    : index === 2
                    ? { backgroundColor: "#E0EDFE" }
                    : null
                }
              ></p>
              <img className={Styles.innerImg} src={e.img} alt="img1" />
              <p className={Styles.badge}>
                <p className={Styles.dashedBadge}>
                  <span className={Styles.badgeText}>{e.badge}</span>
                </p>
              </p>
            </div>
            <h4 className={Styles.productOffer2}>
              <span className={Styles.productOffer}>₹{e.oldOffer}</span>₹
              {e.newOffer}
            </h4>
            <button
              className={Styles.shopNowBtn + " text-decoration-underline mt-3"}
              style={
                index === 0
                  ? { backgroundColor: "#edf7fb" }
                  : index === 1
                  ? { backgroundColor: "#F8F8F8" }
                  : index === 2
                  ? { backgroundColor: "#F3F8FF" }
                  : null
              }
            >
              Shop Now +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
