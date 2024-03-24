import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

const FrameComponent7: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <button className={styles.frameContainer}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <img className={styles.frameInner} alt="" src="/group-512843.svg" />
          </div>
        </button>
      </div>
      <h3 className={styles.shyft}>Shyft</h3>
    </div>
  );
};

export default FrameComponent7;
