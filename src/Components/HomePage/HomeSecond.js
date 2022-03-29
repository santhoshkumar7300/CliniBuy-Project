import { useState } from "react";
import loopImg1 from "../../Assets/loopImg1.svg";
import loopImg2 from "../../Assets/loopImg2.png";
import loopImg3 from "../../Assets/loopImg3.svg";
import loopImg4 from "../../Assets/loopImg4.png";
import loopImg5 from "../../Assets/loopImg5.png";
import Styles from "./HomeSecond.module.css";

export default function HomeSecond() {
  const [firstLoopData, setFirstLoopData] = useState([
    {
      title: "save 20%",
      description: "Consumable & Disposable",
      img: loopImg1,
    },
    {
      title: "super sale",
      description: "medical device & equipment ",
      img: loopImg2,
    },
    {
      title: "hot sale",
      description: "dental accessories",
      img: loopImg3,
    },
  ]);
  const [secondLoopData, setSecondLoopData] = useState([
    {
      title: "special deal",
      description: "hospital establishment",
      img: loopImg4,
    },
    {
      title: "35% off",
      description: "lab diagnostics & instruments",
      img: loopImg5,
    },
  ]);

  return (
    <div className="container-fluid p-0">
      <div className={Styles.loopContainer + " container-fluid mt-5"}>
        {firstLoopData.map((e, index) => (
          <div
            className={Styles.firstLoopContainer}
            style={
              index === 0
                ? { backgroundColor: "#ffd954" }
                : index === 1
                ? { backgroundColor: "#F6F6F6" }
                : index === 2
                ? { backgroundColor: "#3B7DD1" }
                : null
            }
          >
            <div
              className={Styles.textContainer + " container-fluid mt-5 ms-1"}
            >
              <h2 className="fs-3 fw-bold text-uppercase mt-3">{e.title}</h2>
              <h3 className={Styles.h3Style + " text-capitalize"}>
                {e.description}
              </h3>
              <button
                className={Styles.shopNowBtn + " text-decoration-underline"}
                style={
                  index === 0
                    ? { backgroundColor: "#ffd954" }
                    : index === 1
                    ? { backgroundColor: "#F6F6F6" }
                    : index === 2
                    ? { backgroundColor: "#3B7DD1" }
                    : null
                }
              >
                Shop Now +
              </button>
            </div>
            <img className={Styles.imgStyle} src={e.img} alt="img1" />
          </div>
        ))}
      </div>

      <div className={Styles.secondLoopContainer + " container-fluid mt-4"}>
        {secondLoopData.map((e, index) => (
          <div
            className={Styles.detailsContainer}
            style={
              index === 0
                ? { backgroundColor: "#f2f2f2" }
                : index === 1
                ? { backgroundColor: "#FFD954" }
                : null
            }
          >
            <div
              className={Styles.secondLoopTextContainer + " mt-5"}
              style={
                index === 0
                  ? { float: "right", padding: "25px 25px 0 0", width: "54%" }
                  : index === 1
                  ? { float: "left", padding: "25px 0 0 50px", width: "68%" }
                  : null
              }
            >
              <h4 className="text-uppercase fs-6 fw-bold">{e.title}</h4>
              <h3 className="text-capitalize fs-2">{e.description}</h3>
              <button
                className={Styles.shopNowBtn + " text-decoration-underline"}
                style={
                  index === 0
                    ? { backgroundColor: "#f2f2f2" }
                    : index === 1
                    ? { backgroundColor: "#FFD954" }
                    : null
                }
              >
                Shop Now +
              </button>
            </div>
            <img
              className={Styles.firstimg + " mt-3"}
              style={
                index === 1 ? { position: "absolute", float: "right" } : null
              }
              src={e.img}
              alt="img4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
