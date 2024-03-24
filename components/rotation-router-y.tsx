import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./rotation-router-y.module.css";

export type RotationRouterYType = {
  helloAnchor?: string;
  helloWorldProgramWithAnch?: string;
  anchor?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propGap1?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding3?: CSSProperties["padding"];
  propPadding4?: CSSProperties["padding"];
};

const RotationRouterY: NextPage<RotationRouterYType> = ({
  helloAnchor,
  helloWorldProgramWithAnch,
  anchor,
  propWidth,
  propPadding,
  propAlignSelf,
  propFlex,
  propWidth1,
  propGap,
  propGap1,
  propPadding1,
  propPadding2,
  propMinWidth,
  propPadding3,
  propPadding4,
}) => {
  const scalingScalerXStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const helloAnchorHelloContainerStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap,
    };
  }, [propWidth1, propGap]);

  const opacityOperatorYStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const blendingBlenderYStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const anchorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const imageHandlerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  return (
    <div className={styles.rotationRouterY}>
      <div className={styles.scalingScalerX} style={scalingScalerXStyle}>
        <b
          className={styles.helloAnchorHelloContainer}
          style={helloAnchorHelloContainerStyle}
        >
          <p className={styles.helloAnchor}>{helloAnchor}</p>
          <p className={styles.helloWorldProgram}>
            {helloWorldProgramWithAnch}
          </p>
        </b>
      </div>
      <div className={styles.opacityOperatorYParent} style={frameDivStyle}>
        <div className={styles.opacityOperatorY} style={opacityOperatorYStyle}>
          <div className={styles.createdByCommunityContainer}>
            <span>{`Created by `}</span>
            <span className={styles.community}>Community</span>
          </div>
          <div
            className={styles.blendingBlenderY}
            style={blendingBlenderYStyle}
          >
            <button className={styles.rectangleParent} style={groupButtonStyle}>
              <div className={styles.frameChild} />
              <div className={styles.anchor} style={anchorStyle}>
                {anchor}
              </div>
            </button>
          </div>
        </div>
        <div className={styles.imageHandler} style={imageHandlerStyle}>
          <div className={styles.linkOrganizer}>
            <img
              className={styles.linkOrganizerChild}
              loading="lazy"
              alt=""
              src="/group-512830.svg"
            />
            <div className={styles.enrollNowWrapper} style={frameDiv1Style}>
              <div className={styles.enrollNow}>Enroll Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotationRouterY;
