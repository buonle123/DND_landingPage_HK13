import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <section className={styles.styleSwitcherWrapper}>
      <div className={styles.styleSwitcher}>
        <div className={styles.frameParent}>
          <div className={styles.meetOurBestContributorsWrapper}>
            <h1 className={styles.meetOurBestContainer}>
              <span>{`Meet Our best `}</span>
              <span className={styles.contributors}>Contributors</span>
            </h1>
          </div>
          <h3 className={styles.discoverCollectAnd}>
            Discover, collect, and sell extraordinary NFTs through our awesome
            platform. Express yourself by your artwork though us.
          </h3>
        </div>
        <div className={styles.animationArchitectWrapper}>
          <img
            className={styles.animationArchitectIcon}
            loading="lazy"
            alt=""
            src="/star-4.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
