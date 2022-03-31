import { Dropdown } from "bootstrap";
import { DropdownButton, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";
import logo from "../../Assets/logo.png";
import search from "../../Assets/search.png";
import call from "../../Assets/call.png";
import heart from "../../Assets/heart.png";
import user from "../../Assets/user.png";
import bell from "../../Assets/bell.png";
import shopping from "../../Assets/shopping.png";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import menubar from "../../Assets/menuBar.svg";
import whitebell from "../../Assets/whitebell.png";
import userIcon from "../../Assets/userIcon.png";
import logout from "../../Assets/logout.png";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={Styles.container + " container-fluid"}>
        <div className={Styles.menuContainer}>
          <img
            onClick={handleShow}
            className={Styles.menubarStyle}
            src={menubar}
            alt="menu"
          />
          <Offcanvas
            className={Styles.offcanvasCustom}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className={Styles.mblLinkContainer}>
                <Link className={Styles.link} to="/home">
                  Home
                </Link>
              </div>
              <div className={Styles.mblLinkContainer}>
                <Link className={Styles.link} to="#aboutus">
                  about us
                </Link>
              </div>
              <div className={Styles.mblLinkContainer}>
                <Link className={Styles.link} to="/home/blog">
                  blog
                </Link>
              </div>
              <div className={Styles.mblLinkContainer}>
                <Link className={Styles.link} to="/home/productview">
                  shop
                </Link>
              </div>
              <div className={Styles.mblLinkContainer}>
                <Link className={Styles.link} to="#contactus">
                  contact us
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          <div className={Styles.userContainer}></div>
          <div className={Styles.linkContainer}>
            <Link className={Styles.link} to="/home">
              Home
            </Link>
            <Link className={Styles.link} to="#aboutus">
              about us
            </Link>
            <Link className={Styles.link} to="/home/blog">
              blog
            </Link>
            <Link className={Styles.link} to="/home/productview">
              shop
            </Link>
            <Link className={Styles.link} to="#contactus">
              contact us
            </Link>
          </div>
          <div className={Styles.notificationParent}>
            <div className={Styles.notification}>
              <div className={Styles.notificationBadge}>
                <span className={Styles.notificationCount + " text-light"}>
                  0
                </span>
              </div>
              <img
                style={{ paddingRight: "15px", width: "43px" }}
                src={whitebell}
                alt="bell"
              />
            </div>
            <div class={Styles.userContainer + " dropdown"}>
              <button
                className={Styles.userMenu + " btn p-0"}
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className={Styles.user} src={userIcon} alt="user" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    <img
                      style={{ paddingRight: "15px" }}
                      src={user}
                      alt="user"
                    />
                    <span>User</span>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    <img
                      style={{ paddingRight: "15px" }}
                      src={heart}
                      alt="heart"
                    />
                    <span>Wishlist</span>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    <img
                      style={{ paddingRight: "10px", width: "32px" }}
                      src={shopping}
                      alt="shopping"
                    />
                    <span>Purchase</span>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    <img
                      style={{ paddingRight: "10px", width: "32px" }}
                      src={logout}
                      alt="logout"
                    />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.linkContainer} style={{ marginRight: "40px" }}>
          <Link className={Styles.link} to="#trackmyorder">
            track my order
          </Link>
          <Link className={Styles.link} to="logout">
            Logout
          </Link>
        </div>
      </div>

      <div className={Styles.titleContainer + " container-fluid mt-4"}>
        <div style={{ alignSelf: "center" }} className={Styles.logoContainer}>
          <img className={Styles.logoImg} src={logo} alt="logo" />
        </div>
        <div className={Styles.searchContainer}>
          {/* <div>
            <DropdownButton
              id="dropdown-basic-button"
              title="All Products"
              size="sm"
              variant="white"
              className={Styles.dropDown}
            >
              <DropdownItem>Products</DropdownItem>
            </DropdownButton>
          </div> */}
          <div className={Styles.dropdownParent + " dropdown"}>
            <button
              className={Styles.dropDown + " btn dropdown-toggle"}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Products
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <hr className={Styles.hrStyle} />
          <input
            className={Styles.search}
            type="text"
            placeholder="What do you need?"
          />
          <div className={Styles.searchImgContainer}>
            <img className={Styles.searchimg} src={search} alt="search" />
          </div>
        </div>

        <div className={Styles.callParentContainer}>
          <div className={Styles.callContainer}>
            <img
              style={{ height: "20px", marginTop: "5px" }}
              src={call}
              alt="call"
            />
            <div>
              <div style={{ paddingLeft: "10px" }}>
                <p className={Styles.callUs}>Call us</p>
                <p className={Styles.mbl}>+91 7010034955</p>
              </div>
            </div>
          </div>
          <hr style={{ height: "32px", width: "2px" }} />
          <div style={{ alignSelf: "center", paddingLeft: "25px" }}>
            <img style={{ paddingRight: "15px" }} src={user} alt="user" />
            <img style={{ paddingRight: "15px" }} src={heart} alt="heart" />
            <img style={{ paddingRight: "15px" }} src={bell} alt="bell" />
            <img
              style={{ paddingRight: "15px" }}
              src={shopping}
              alt="shopping"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
