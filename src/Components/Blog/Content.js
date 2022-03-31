import Styles from "./Content.module.css";
import blogImg from "../../Assets/blogImg1.svg";
import profile from "../../Assets/blogProfile.svg";
import date from "../../Assets/blogDate.svg";
import insta from "../../Assets/blogInsta.png";
import fb from "../../Assets/blogFb.png";
import twitter from "../../Assets/blogTwitter.png";
export default function Content() {
  return (
    <div className={Styles.overallContainer}>
      {[...new Array(2)].map((e) => (
        <div>
          <div>
            <img className={Styles.image} src={blogImg} alt="img" />
          </div>
          <div className="pt-3 d-flex">
            <img className={Styles.details} src={profile} alt="profile" />
            <p className={Styles.details + " mb-0 align-self-center"}>
              Lorum ipsum simple dummy
            </p>
            <img className={Styles.details} src={date} alt="profile" />
            <p className={Styles.details + " mb-0 align-self-center"}>
              October 6, 2022
            </p>
          </div>
          <hr />
          <div>
            <p className={Styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              arcu sodales varius tincidunt natoque dignissim. Elementum
              pulvinar gravida nibh consequat, amet, lectus faucibus elit.
              Fermentum in eget egestas bibendum phasellus. Metus, sit eu,
              potenti consectetur lectus commodo libero, tellus id. Donec
              euismod mauris orci, feugiat praesent lorem. Aliquam justo at
              purus amet, turpis. Sed iaculis ullamcorper nulla duis tortor,
              mauris ornare commodo. Tempor at magna consequat a non dignissim.
              Nec tellus et suspendisse ultrices convallis facilisis quis
              aenean. Ultricies nunc, tincidunt feugiat erat eget pretium morbi
              egestas. Aliquam dui habitant nam maecenas sodales quam vitae
              dictum. Nibh dui facilisis bibendum aenean magna ullamcorper
              fermentum ac. Sem mauris, commodo est, vel. Tincidunt ut vel in
              adipiscing commodo ultricies eget ultrices. Mattis diam viverra
              nisl, lectus cras.{" "}
            </p>
          </div>

          <div className="d-flex mb-4 justify-content-between">
            <button className={Styles.readmoreBtn}>Read More</button>
            <div className="align-self-center">
              <span className={Styles.shareBtn}>Share</span>
              <img className={Styles.socialMedia} src={fb} alt="fb" />
              <img className={Styles.socialMedia} src={insta} alt="insta" />
              <img className={Styles.socialMedia} src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
