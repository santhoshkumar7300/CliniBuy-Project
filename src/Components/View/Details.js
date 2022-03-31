import { Tab } from "bootstrap";
import { Table, Tabs } from "react-bootstrap";
import Styles from "./Details.module.css";
import profile from "../../Assets/reviewProfile.svg";
import outlineStar from "../../Assets/EmptyStar.svg";
import filledStar from "../../Assets/filledStar.svg";
import emptyoutline from "../../Assets/EmptyOutline.svg";
import Rating from "react-rating";

export default function ProductViewDetails() {
  return (
    <div className="mt-5">
      <Tabs
        defaultActiveKey="home"
        transition={true}
        id="noanim-tab-example"
        className="mb-3"
        // onSelect={(e) => setBottomData(e)}
      >
        <Tab eventKey="home" title="Description" style={{ border: "none" }}>
          <p className={Styles.rightBottomPara}></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nibh
            orci cras suspendisse auctor. Neque facilisis elementum eget egestas
            posuere et egestas nibh. Quisque interdum vulputate lorem platea
            porta sed sit fames dolor. Ultricies ac eu tristique ultrices
            viverra amet enim. Ipsum nulla quis nibh mattis ornare vitae. Elit
            est mi auctor eget. Hendrerit lacus viverra sed ullamcorper metus
            fermentum orci. Arcu orci, egestas etiam ultrices sem. Neque
            lobortis dignissim lectus scelerisque quis. Pulvinar at in
            vestibulum, et, imperdiet cras est enim. Nulla consequat eleifend
            aliquam aenean leo id eget morbi. Imperdiet justo ultrices diam
            natoque imperdiet ullamcorper in. At et turpis felis a porttitor sit
            consectetur porttitor odio. Habitant sed dignissim nec volutpat,
            lectus odio porta. Porttitor odio ornare mus sed tristique eleifend
            non ut feugiat. Eu venenatis amet auctor augue. Eget adipiscing
            luctus ultricies egestas eget erat. Magna est id donec dui congue.
            Nunc neque nunc integer sed varius cursus amet duis. Facilisis diam
            integer sit aliquet tristique duis nunc non. Fames posuere amet
            aenean eget. Sit auctor eget odio nulla. Diam eget arcu quam eget
            praesent urna, vitae nibh sit. Iaculis ac libero risus pellentesque.
            Velit quis risus risus id laoreet{" "}
          </p>
        </Tab>
        <Tab eventKey="profile" title="Specification">
          <Table>
            <tbody>
              <tr>
                <td>Brand</td>
                <td className="text-end w-50">Kabala</td>
              </tr>
              <tr>
                <td>Country of Orgin</td>
                <td className="text-end w-50">India</td>
              </tr>
              <tr>
                <td>Description </td>
                <td className="text-end w-50">
                  <span>Specifications:</span>
                  <p>Quantity : 2 mlColor : Blue</p>
                </td>
              </tr>
              <tr>
                <td>Seller</td>
                <td className="text-end w-50">Kabala Healthe Pvt.Ltd</td>
              </tr>
              <tr>
                <td>Pack Type</td>
                <td className="text-end w-50">Pack</td>
              </tr>
              <tr>
                <td>Pack Size</td>
                <td className="text-end w-50">1</td>
              </tr>
              <tr>
                <td>Pack UOM</td>
                <td className="text-end w-50">each</td>
              </tr>
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="review" title="Reviews(1)">
          <h4>1 review for OxyGo Oxygen Portable Kit </h4>
          <div className="d-flex mt-4">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div className={Styles.reviewProfile}>
              <Rating
                placeholderRating={3.5}
                initialRating={4}
                emptySymbol={<img src={outlineStar} className="icon" />}
                placeholderSymbol={<img src={outlineStar} className="icon" />}
                fullSymbol={<img src={filledStar} className="icon" />}
              />
              <h5>Mr. Janson(Loum ipsum)</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                amet odio leo morbi tincidunt posuere in. Neque fusce lobortis
                ultricies pellentesque fringilla phasellus tristique. Ut nulla
                enim praesent id convallis luctus. Venenatis elit habitant morbi
                nisi montes, arcu. Et bibendum lacus ultricies nunc arcu, velit.
                Lacinia pulvinar dui semper non eu at nunc praesent. Maecenas
                quis est enim, sed nibh at orci neque purus.{" "}
              </p>
            </div>
          </div>
          <div>
            <p className="fw-bold">Add a Review</p>
            <hr />
          </div>
          <div>
            <p>Your rating of this product</p>
            <div className="d-flex justify-content-arround">
              <Rating
                placeholderRating={3.5}
                emptySymbol={<img src={outlineStar} className="icon" />}
                placeholderSymbol={<img src={outlineStar} className="icon" />}
                fullSymbol={<img src={filledStar} className="icon" />}
              />
              {/* <hr className={Styles.hr} /> */}
            </div>
          </div>
          <div className={Styles.bg + " container-fluid mt-5 p-0"}>
            <div className="container p-0">
              <div className={Styles.inputContainer}>
                <input
                  className={Styles.input}
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className={Styles.input}
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mt-3">
                <textarea
                  className={Styles.textArea}
                  placeholder="Enter Message Here"
                />
              </div>
              <div className="d-flex justify-content-start m-3">
                <button className={Styles.sendMsgBtn}>SUBMIT REVIEW</button>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
