import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card-u-i-h-u-t.module.css";

export type CardUIHUTType = {
  prop?: string;
  solanaBootcamp02?: string;
  buildYourFirstProgram?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const CardUIHUT: NextPage<CardUIHUTType> = ({
  prop,
  solanaBootcamp02,
  buildYourFirstProgram,
  propAlignSelf,
  propPadding,
  propFlex,
  propPadding1,
  propPadding2,
}) => {
  const cardUIHUTStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.cardUihut} style={cardUIHUTStyle}>
      <div className={styles.base} />
      <div className={styles.cardUihutInner} style={frameDiv2Style}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h1 className={styles.solanaBootcamp02Container}>
            <p className={styles.solana}>SOLANA</p>
            <p className={styles.bootcamp}>BOOTCAMP</p>
            <p className={styles.p}>{prop}</p>
          </h1>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div
          className={styles.solanaBootcamp02BuildYourWrapper}
          style={frameDiv3Style}
        >
          <b className={styles.solanaBootcamp02Container1}>
            <p className={styles.solanaBootcamp02}>{solanaBootcamp02}</p>
            <p className={styles.buildYourFirst}>{buildYourFirstProgram}</p>
          </b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.createdByCommunityParent}>
            <div className={styles.createdByCommunityContainer}>
              <span>{`Created by `}</span>
              <span className={styles.community}>Community</span>
            </div>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.sol}>Sol</div>
            </button>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-512830.svg"
              />
              <div className={styles.enrollNowWrapper}>
                <div className={styles.enrollNow}>Enroll Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUIHUT;
