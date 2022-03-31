import Styles from "./Offers.module.css";
import offertag from "../../Assets/offerTag.svg";
import callbg from "../../Assets/offer.svg";
export default function Offers() {
  return (
    <div
      className={
        Styles.parentContainer + " mt-5 d-flex justify-content-between"
      }
    >
      <div className={Styles.leftContainer}>
        <h3 className="fw-bold">Offers</h3>
        <div className="mt-3">
          {[...new Array(3)].map((e) => (
            <div className="mb-3">
              <img src={offertag} alt="tag" />
              <span className={Styles.offers}>
                No Cost EMI applicable on All major credit cards View More
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.bg}>
        <div className="align-self-center">
          <h3 className="text-white fs-2 text-center fw-bold">Need Help ?</h3>
          <p className="text-white fs-6 text-center fw-bold">+91 7010034955</p>
        </div>
      </div>
    </div>
  );
}
