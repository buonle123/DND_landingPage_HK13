import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <section className={styles.filterWrapper}>
      <div className={styles.filter}>
        <div className={styles.filterChild} />
        <div className={styles.imageillustrationWrapper}>
          <img
            className={styles.imageillustrationIcon}
            loading="lazy"
            alt=""
            src="/imageillustration.svg"
          />
        </div>
        <div className={styles.sorter}>
          <div className={styles.merger} />
        </div>
        <div className={styles.splitter}>
          <div className={styles.sequence}>
            <div className={styles.stack}>
              <div className={styles.nghiMartinWrapper}>
                <h2 className={styles.nghiMartin}>Nghi Martin</h2>
              </div>
              <div className={styles.frontendDeveloper}>Frontend Developer</div>
            </div>
            <div className={styles.tuple}>
              <div className={styles.dictionary}>
                <img className={styles.arrayIcon} alt="" src="/star-7-1.svg" />
                <img className={styles.arrayIcon1} alt="" src="/star-7-1.svg" />
                <img className={styles.arrayIcon2} alt="" src="/star-8-1.svg" />
                <img className={styles.arrayIcon3} alt="" src="/array.svg" />
                <img className={styles.arrayIcon4} alt="" src="/array.svg" />
              </div>
            </div>
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</div>
          <div className={styles.linkedList}>
            <div className={styles.tree}>
              <img
                className={styles.treeChild}
                alt=""
                src="/group-1000014863.svg"
              />
            </div>
            <div className={styles.scopeWrapper}>
              <img
                className={styles.scopeIcon}
                loading="lazy"
                alt=""
                src="/star-9-1.svg"
              />
            </div>
            <div className={styles.linkedListInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-2475.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
