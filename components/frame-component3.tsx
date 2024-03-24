import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  logicBranch?: string;
  malisa?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  logicBranch,
  malisa,
  propPadding,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
}) => {
  const controlStructureStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const outputProcessorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const malisaStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.baseParent}>
      <div className={styles.base} />
      <img
        className={styles.logicBranchIcon}
        loading="lazy"
        alt=""
        src={logicBranch}
      />
      <div className={styles.controlStructure} style={controlStructureStyle}>
        <div className={styles.outputProcessor} style={outputProcessorStyle}>
          <h3 className={styles.malisa} style={malisaStyle}>
            {malisa}
          </h3>
          <div className={styles.programmerWrapper}>
            <div className={styles.programmer}>Programmer</div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1000014872.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
