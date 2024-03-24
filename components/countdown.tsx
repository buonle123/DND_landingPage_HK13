import type { NextPage } from "next";
import styles from "./countdown.module.css";

const Countdown: NextPage = () => {
  return (
    <section className={styles.countdown}>
      <div className={styles.emoji} />
      <div className={styles.dataAggregator}>
        <div className={styles.dataAggregatorChild} />
        <div className={styles.variableHolder}>
          <img
            className={styles.sol1Icon}
            loading="lazy"
            alt=""
            src="/sol-1.svg"
          />
          <div className={styles.solanaWrapper}>
            <h1 className={styles.solana}>Solana</h1>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.image736Parent}>
              <img
                className={styles.image736Icon}
                loading="lazy"
                alt=""
                src="/image-736@2x.png"
              />
              <h1 className={styles.superteamvn}> SuperteamVN</h1>
            </div>
          </div>
          <div className={styles.expressionTree}>
            <div className={styles.variableHolder1}>
              <img className={styles.sol1Icon1} alt="" src="/sol-1.svg" />
              <div className={styles.renaissanceWrapper}>
                <h1 className={styles.renaissance}>Renaissance</h1>
              </div>
            </div>
            <div className={styles.variableHolder2}>
              <img className={styles.sol1Icon2} alt="" src="/sol-1.svg" />
              <div className={styles.solanaContainer}>
                <h1 className={styles.solana1}>Solana</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
