import Styles from "./CheckboxOptions.module.css";

export default function Checkbox() {
  return (
    <div>
      <div className={Styles.checkboxContainer}>
        {[...new Array(20)].map((e) => (
          <div class={Styles.checkbox + " form-check mt-3"}>
            <input
              class={Styles.input + " form-check-input"}
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">Medical Aids</label>
          </div>
        ))}
      </div>
    </div>
  );
}
