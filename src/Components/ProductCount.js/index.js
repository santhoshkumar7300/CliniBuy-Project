import Styles from "./index.module.css";

export default function ProductCount() {
  return (
    <div className={Styles.container}>
      <div className={Styles.decreContainer}>
        <span className={Styles.decreSymbol}>-</span>
      </div>
      <span className={Styles.count + " align-self-center fs-4"}>1</span>
      <div className={Styles.increContainer}>
        <span className={Styles.increSymbol}>+</span>
      </div>
    </div>
  );
}
