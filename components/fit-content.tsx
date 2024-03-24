import type { NextPage } from "next";
import styles from "./fit-content.module.css";

const FitContent: NextPage = () => {
  return (
    <section className={styles.fitContent}>
      <div className={styles.spacingStack}>
        <button className={styles.button}>
          <div className={styles.general}>General</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.features}>Features</div>
        </button>
        <button className={styles.button2}>
          <div className={styles.varification}>Varification</div>
        </button>
        <button className={styles.button3}>
          <div className={styles.proMarket}>Pro Market</div>
        </button>
      </div>
    </section>
  );
};

export default FitContent;
