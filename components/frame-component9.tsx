import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

const FrameComponent9: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.mWrapper}>
          <b className={styles.m}>3M+</b>
        </div>
        <div className={styles.students}>Students</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.kWrapper}>
          <b className={styles.k}>19K+</b>
        </div>
        <div className={styles.courses}>Courses</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.kContainer}>
          <b className={styles.k1}>10K+</b>
        </div>
        <div className={styles.instructors}>Instructors</div>
      </div>
      <img
        className={styles.unionIcon}
        loading="lazy"
        alt=""
        src="/union@2x.png"
      />
    </div>
  );
};

export default FrameComponent9;
