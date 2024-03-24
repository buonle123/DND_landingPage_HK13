import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.nextParent}>
      <div className={styles.next} />
      <footer className={styles.frameParent}>
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <div className={styles.fillFinder}>
            <div className={styles.fontFamilyFarmWrapper}>
              <img
                className={styles.fontFamilyFarm}
                loading="lazy"
                alt=""
                src="/star-10-1.svg"
              />
            </div>
            <img className={styles.fillFinderChild} alt="" src="/star-11.svg" />
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/group-18626.svg" />
      </footer>
      <img
        className={styles.masterMastermindIcon}
        loading="lazy"
        alt=""
        src="/vector-2052.svg"
      />
    </section>
  );
};

export default FrameComponent;
