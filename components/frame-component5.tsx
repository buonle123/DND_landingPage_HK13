import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <section className={styles.pathPatcherWrapper}>
      <div className={styles.pathPatcher}>
        <div className={styles.alignJustify}>
          <h1 className={styles.featuredCourses}>
            <span>{`Featured `}</span>
            <span className={styles.courses}>Courses</span>
          </h1>
          <div className={styles.divider}>
            <h3 className={styles.educateInnovateDecentraliz}>
              Educate, Innovate, Decentralize: Empowering Minds on Solana!
            </h3>
          </div>
        </div>
        <div className={styles.row}>
          <img
            className={styles.alignmentAlignerIcon}
            loading="lazy"
            alt=""
            src="/star-7.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
