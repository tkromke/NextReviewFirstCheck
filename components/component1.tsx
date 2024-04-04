import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component1.module.css";

export type Component1Type = {
  frame40?: string;
  name1?: string;
  text?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Component1: NextPage<Component1Type> = ({
  frame40,
  name1,
  text,
  prop,
  propMinWidth,
  propMinWidth1,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.div}>
      <div className={styles.imageTitle}>
        <img
          className={styles.imageTitleChild}
          loading="lazy"
          alt=""
          src={frame40}
        />
        <div className={styles.nameLocationPrice}>
          <div className={styles.nameLocation}>
            <b className={styles.name} style={nameStyle}>
              {name1}
            </b>
            <div className={styles.location}>
              <div className={styles.icon}>map-marker-alt</div>
              <div className={styles.text} style={textStyle}>
                {text}
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <b className={styles.b}>{prop}</b>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <b className={styles.text1}>Order Now</b>
      </button>
    </div>
  );
};

export default Component1;
