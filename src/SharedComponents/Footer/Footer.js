import React from "react";
import Styles from "./Footer.module.css";
import line from "../../Assets/Line.png";
import mail from "../../Assets/mail.svg";
import phone from "../../Assets/phn.svg";
import location from "../../Assets/location.svg";
import mailIcon from "../../Assets/mailImg.svg";
import delivery from "../../Assets/delivery.svg";
import call from "../../Assets/call.svg";
import payment from "../../Assets/payment.png";
import returnAmt from "../../Assets/returnAmt.svg";
import google from "../../Assets/google.svg";
import twitter from "../../Assets/twitter.svg";
import fb from "../../Assets/fb.svg";
import insta from "../../Assets/insta.svg";
import paymentMode from "../../Assets/paymentMode.svg";

function Footer() {
  return (
    <div className="mt-5">
      <div className={Styles.overallFirstContainer + " container"}>
        <div className={Styles.deliveryPara}>
          <img className={Styles.imgStyle} src={delivery} alt="delivery" />
          <div className={Styles.deliveryContainer}>
            <p className={Styles.deliveryPara}>Free Delivery</p>
            <p className={Styles.deliveryPara2}>For all order over 99$</p>
          </div>
        </div>
        <hr className={Styles.hrStyle} />

        <div className={Styles.deliveryPara}>
          <img className={Styles.imgStyle} src={returnAmt} alt="delivery" />
          <div className={Styles.deliveryContainer}>
            <p className={Styles.deliveryPara}>Free Delivery</p>
            <p className={Styles.deliveryPara2}>For all order over 99$</p>
          </div>
        </div>
        <hr className={Styles.hrStyle} />
        <div className={Styles.deliveryPara}>
          <img className={Styles.imgStyle} src={payment} alt="delivery" />
          <div className={Styles.deliveryContainer}>
            <p className={Styles.deliveryPara}>Free Delivery</p>
            <p className={Styles.deliveryPara2}>For all order over 99$</p>
          </div>
        </div>
        <hr className={Styles.hrStyle} />
        <div className={Styles.deliveryPara}>
          <img className={Styles.imgStyle} src={call} alt="delivery" />
          <div className={Styles.deliveryContainer}>
            <p className={Styles.deliveryPara}>Free Delivery</p>
            <p className={Styles.deliveryPara2}>For all order over 99$</p>
          </div>
        </div>
      </div>
      <div className={Styles.bg + " container-fluid"}>
        <div className={Styles.overallParent}>
          <div className={Styles.aboutContainer}>
            <h2 className={Styles.aboutTile}>Abous Us</h2>
            <img src={line} alt="line" />
            <p className={Styles.aboutPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <ul className={Styles.ulStyle}>
              <li className={Styles.liStyle}>
                <img src={location} alt="location" />
                <p className={Styles.aboutLocation}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className={Styles.liStyle}>
                <img src={phone} alt="location" />
                <p className={Styles.aboutLocation}>+91 7010034955</p>
              </li>
              <li className={Styles.liStyle}>
                <img src={mail} alt="location" />
                <p className={Styles.aboutLocation}>info@clinibuy.in</p>
              </li>
              <li>
                <div className={Styles.socialMediaParentCOntainer}>
                  <div className={Styles.socialMedia}>
                    <img className={Styles.socialMediaFb} src={fb} alt="fb" />
                  </div>
                  <div className={Styles.socialMedia}>
                    <img
                      className={Styles.socialMediaIcons}
                      src={insta}
                      alt="fb"
                    />
                  </div>
                  <div className={Styles.socialMedia}>
                    <img
                      className={Styles.socialMediaIcons}
                      src={twitter}
                      alt="fb"
                    />
                  </div>
                  <div className={Styles.socialMedia}>
                    <img
                      className={Styles.socialMediaIcons}
                      src={google}
                      alt="fb"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className={Styles.customerContainer}>
            <h2 className={Styles.aboutTile}>Customer Care</h2>
            <img src={line} alt="line" />
            <ul className={Styles.ulStyle}>
              <li className={Styles.customerLi}>My Account</li>
              <li className={Styles.customerLi}>My Orders</li>
              <li className={Styles.customerLi}>Track Your Order</li>
              <li className={Styles.customerLi}>Wishlist</li>
              <li className={Styles.customerLi}>FAQs</li>
              <li className={Styles.customerLi}>Refunds/Return Policy</li>
            </ul>
          </div>

          <div className={Styles.categoriesContainer}>
            <h2 className={Styles.aboutTile}>Categories</h2>
            <img src={line} alt="line" />
            <ul className={Styles.ulStyle}>
              <li className={Styles.customerLi}>Consumables & Disposables</li>
              <li className={Styles.customerLi}>
                Lab Diagnostics & Instruments
              </li>
              <li className={Styles.customerLi}>Medical Device & Equipment</li>
              <li className={Styles.customerLi}>
                Medicines and Pharmaceutical
              </li>
              <li className={Styles.customerLi}>Dental</li>
              <li className={Styles.customerLi}>Medical Implants</li>
              <li className={Styles.customerLi}>Surgical Instruments</li>
              <li className={Styles.customerLi}>Hospital Establishment</li>
              <li className={Styles.customerLi}>
                Physiotherapy & Rehabilitation-Medical Aids
              </li>
            </ul>
          </div>

          <div className={Styles.newsletterContainer}>
            <h2 className={Styles.aboutTile}>Newsletter</h2>
            <img src={line} alt="line" />
            <p className={Styles.newsletterPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <ul className={Styles.ulStyle}>
              <li className={Styles.newsletterliStyle}>
                <div className={Styles.newsletterInputDiv}>
                  <input
                    className={Styles.newsletterInput}
                    type="text"
                    placeholder="Your Email"
                  />
                  <div className={Styles.mailIconDiv}>
                    <img
                      className={Styles.mailIcon}
                      src={mailIcon}
                      alt="mail"
                    />
                  </div>
                </div>
              </li>
              <li className={Styles.liStyle}>
                <img src={phone} alt="location" />
                <p className={Styles.aboutLocation}>+91 7010034955</p>
              </li>
              <li className={Styles.liStyle}>
                <img src={mail} alt="location" />
                <p className={Styles.aboutLocation}>info@clinibuy.in</p>
              </li>
            </ul>
            <div>
              <h2 className={Styles.aboutTile}>Payment Mode</h2>
              <img src={line} alt="line" />
              <div className={Styles.paymentMode}>
                <img
                  className={Styles.paymentModeImg}
                  src={paymentMode}
                  alt="payment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.copyrights + " container-fluid"}>
        <p className={Styles.copyrightPara}>
          Copyright © 2022 Maestro technology. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
