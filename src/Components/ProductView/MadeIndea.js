import Styles from "./MadeIndia.module.css";

export default function MadeIndia() {
  return (
    <div className="mt-3">
      <p className="fw-bold">Made In India</p>
      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">Made in India Products</label>
      </div>
    </div>
  );
}
