import type { NextPage } from "next";
import styles from "./frame-component10.module.css";
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


const FrameComponent10: NextPage = () => {
  return (
    <section className={styles.educationOrOnlineEducationInner}>
      <div className={styles.frameParent}>
        <div className={styles.dndLearningWrapper}>
          <h1 className={styles.dndLearning}>DND Learning</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.homeParent}>
            <h3 className={styles.home}>Home</h3>
            <h3 className={styles.about}>About</h3>
            <h3 className={styles.course}>Course</h3>
            <h3 className={styles.blog}>Blog</h3>
            <h3 className={styles.contact}>Contact</h3>
          </div>
        </div>

        <button className={styles.buttonBase} style={{zIndex: 9999}}>
          <div className={styles.text}>Connect Wallet</div>
        </button>

        {/* <WalletMultiButton style={{zIndex: 9999}} className="styles.buttonBasestyles.text wallet-adapter-dropdown-btn z-index-10000" />
        <WalletDisconnectButton style={{zIndex: 9999}} />
         */}
      </div>
    </section>
  );
};

export default FrameComponent10;
