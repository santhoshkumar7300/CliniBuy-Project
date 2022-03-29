import Styles from "./Message.module.css";

export default function ContactMessage() {
  return (
    <div className={Styles.bg + " container-fluid mt-5"}>
      <div className="container p-0">
        <h3 className="text-center">Send Us a Message</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
        </p>
        <div className={Styles.inputContainer}>
          <input className={Styles.input} type="text" placeholder="Your Name" />
          <input
            className={Styles.input}
            type="email"
            placeholder="Your Email"
          />
          <input
            className={Styles.input}
            type="text"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="mt-3">
          <textarea
            className={Styles.textArea}
            placeholder="Enter Message Here"
          />
        </div>
        <div className="d-flex justify-content-center m-3">
          <button className={Styles.sendMsgBtn}>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}
