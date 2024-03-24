import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

const FrameComponent8: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <button className={styles.ellipseParent}>
          <img className={styles.chartPinIcon} alt="" src="/Vector.png" />
        </button>
      </div>
      <h3 className={styles.nextjs}>NextJs</h3>

      <div className={styles.image}>
        <div className={styles.wrapperBlur}>
          <img className={styles.blurIcon} alt="" src="/blur.svg" />
        </div>
        <div className={styles.symbol}>
          <img
            className={styles.symbolItem}
            loading="lazy"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <img
          className={styles.imageChild}
          loading="lazy"
          alt=""
          src="/group-18625@2x.png"
        />
      </div>
      {/* NEXT */}
      <img className={styles.frameItem} alt="" src="/group-1000014869@2x.png" />
    </div>
  );
};

export default FrameComponent8;
