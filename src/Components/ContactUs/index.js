import Styles from "./index.module.css";
import bgImg from "../../Assets/contactbg.svg";
import { Link } from "react-router-dom";
import locaitonImg from "../../Assets/Contactlocation.svg";
import callImg from "../../Assets/Contactcall.svg";
import mailImg from "../../Assets/Contactmail.svg";
import clockImg from "../../Assets/clock.svg";
import { useState } from "react";
import ContactMessage from "./Message";

export default function Contact() {
  const [data, setData] = useState([
    {
      title: "Address",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sed lorem aliquam enim ipsum nunc. Quis adipiscing turpis pretium.",
      img: locaitonImg,
    },
    {
      title: "Phone",
      description: "Call us: +91 7010034955",
      description2: "Landline: +91 123345678",
      img: callImg,
    },
    { title: "Email", description: "info@clinibuy.in", img: mailImg },
    {
      title: "Timing",
      description: "Monday - Saturday",
      description2: "9.00 AM to 6.30 PM",
      img: clockImg,
    },
  ]);

  return (
    <div>
      <div className={Styles.bg + " container"}>
        <div className={Styles.titleContainer}>
          <h3 className={Styles.title}>Contact us</h3>
          {/* <Link to="/home">Home</Link> {"/"}
                    <Link to="/contactus">Contact us</Link> */}
          <p className={Styles.options}>Home / Contact us</p>
        </div>
      </div>
      <div className="container d-flex justify-content-between p-0 mt-5">
        {data.map((e) => (
          <div className={Styles.contentOptions}>
            <div>
              <div className={Styles.locationImgContainer}>
                <img src={e.img} alt="location" />
              </div>
              <p className={Styles.ContentOptionTitle}>{e.title}</p>
              <p className={Styles.contentOptionDescription}>{e.description}</p>
              <p
                className={Styles.contentOptionDescription}
                style={
                  e.description2 ? { display: "block" } : { display: "none" }
                }
              >
                {e.description2}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ContactMessage />
    </div>
  );
}
