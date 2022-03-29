import Styles from "./Rating.module.css";
import filledStar from "../../Assets/filledStar.svg";
import emptyStar from "../../Assets/EmptyStar.svg";

export default function CustomerRating() {
  return (
    <div className="mt-3">
      <p className="fw-bold">Customer Rating</p>

      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
        </label>
      </div>
      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
        </label>
      </div>
      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
        </label>
      </div>
      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
        </label>
      </div>
      <div class={Styles.checkbox + " form-check mt-3"}>
        <input
          class={Styles.input + " form-check-input"}
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label">
          <img className={Styles.star} src={filledStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
          <img className={Styles.star} src={emptyStar} alt="5*" />
        </label>
      </div>
    </div>
  );
}
