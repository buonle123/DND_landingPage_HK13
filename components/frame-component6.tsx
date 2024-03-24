import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

const FrameComponent6: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <button className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <img className={styles.chartPinIcon} alt="" src="/chart-pin.svg" />
        </button>
      </div>
      <h3 className={styles.candypay}>CandyPay</h3>
      <img
        className={styles.frameInner}
        loading="lazy"
        alt=""
        src="/group-1000014868.svg"
      />
    </div>
  );
};

export default FrameComponent6;
