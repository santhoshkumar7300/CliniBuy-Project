import loginImg from "../../Assets/loginImg.svg";
import Styles from "./Auth.module.css";
import visible from "../../Assets/visible.png";
import unvisible from "../../Assets/unvisible.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";

export default function Login() {
  let location = useLocation();
  console.log(location.pathname, "==lo");

  const [viewPassword, setViewPassword] = useState({
    password: 0,
    repeatPassword: 0,
  });
  console.log(viewPassword, "===password");
  return (
    <div>
      <div className={Styles.bg + " container mt-5 "}>
        <div className={Styles.leftContainer}>
          <h3>
            {" "}
            {location.pathname === "/signin" ? "Login to" : "Sign up"} your
            account
          </h3>
          <div className={Styles.btnParent}>
            <button className={Styles.btn}>Login with facebook</button>
            <button className={Styles.btn}>Login with twitter</button>
          </div>
          <p className={Styles.para}>or</p>

          <div>
            <form>
              <label className={Styles.label}>Email Address</label>
              <input
                className={Styles.email}
                type="email"
                placeholder="Enter Email"
              />
              <label className={Styles.label}>Password</label>
              <div className={Styles.inputParent}>
                <input
                  className={Styles.inputPassword}
                  type={viewPassword.password === 1 ? "text" : "password"}
                  placeholder="Enter Password"
                />
                {viewPassword.password === 0 ? (
                  <img
                    className={Styles.eye}
                    onClick={() =>
                      setViewPassword({ ...viewPassword, password: 1 })
                    }
                    src={unvisible}
                    alt="visible"
                  />
                ) : (
                  <img
                    className={Styles.eye}
                    onClick={() =>
                      setViewPassword({ ...viewPassword, password: 0 })
                    }
                    src={visible}
                    alt="visible"
                  />
                )}
              </div>

              <div
                style={
                  location.pathname === "/signin"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <label className={Styles.label}>Repeat Password</label>
                <div className={Styles.inputParent}>
                  <input
                    className={Styles.inputPassword}
                    type={
                      viewPassword.repeatPassword === 1 ? "text" : "password"
                    }
                    placeholder="Enter Password"
                  />
                  {viewPassword.repeatPassword === 0 ? (
                    <img
                      className={Styles.eye}
                      onClick={() =>
                        setViewPassword({ ...viewPassword, repeatPassword: 1 })
                      }
                      src={unvisible}
                      alt="visible"
                    />
                  ) : (
                    <img
                      className={Styles.eye}
                      onClick={() =>
                        setViewPassword({ ...viewPassword, repeatPassword: 0 })
                      }
                      src={visible}
                      alt="visible"
                    />
                  )}
                </div>
              </div>
              <div className={Styles.radioContainer}>
                <div>
                  <input className={Styles.radio} type="radio" />
                  <label className={Styles.radioLabel}>Remember Me</label>
                </div>
                <div>
                  <Link className={Styles.forgotPassword} to="/forgotpassword">
                    Forgot Password
                  </Link>
                </div>
              </div>
              <button className={Styles.loginBtn}>Login to Your Account</button>
            </form>
          </div>
          <div className={Styles.signinContainer}>
            <span className={Styles.alreadyAcc}>Already Have An Account ?</span>
            {location.pathname === "/signin" ? (
              <Link className={Styles.signin} to="/signup">
                Sign up
              </Link>
            ) : (
              <Link className={Styles.signin} to="/signin">
                Sign in
              </Link>
            )}
          </div>
        </div>

        <div className={Styles.rightContainer}>
          <img className={Styles.rightContainerImg} src={loginImg} alt="img" />
        </div>
      </div>
    </div>
  );
}
