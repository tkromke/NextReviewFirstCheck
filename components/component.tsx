import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component.module.css";

export type ComponentType = {
  image?: string;
  text?: string;
  restaruantLogo?: string;
  name1?: string;
  text1?: string;
  text2?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propHeight1?: CSSProperties["height"];
  propHeight2?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Component: NextPage<ComponentType> = ({
  image,
  text,
  restaruantLogo,
  name1,
  text1,
  text2,
  propHeight,
  propFlex,
  propHeight1,
  propHeight2,
  propFlex1,
  propMinWidth,
  propBackgroundColor,
  propColor,
  propDisplay,
  propMinWidth1,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const foodPhotoStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
    };
  }, [propFlex, propHeight1]);

  const imageNameReviewBadgeStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const imageNameReviewStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propColor, propDisplay, propMinWidth1]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.foodPhoto} style={foodPhotoStyle}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge}>
          <button className={styles.discount}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>tag</div>
            </div>
            <b className={styles.text}>{text}</b>
          </button>
          <button className={styles.fast}>
            <div className={styles.iconContainer}>
              <div className={styles.icon1}>clock</div>
            </div>
            <b className={styles.text1}>Fast</b>
          </button>
        </div>
      </div>
      <div
        className={styles.imageNameReviewBadge}
        style={imageNameReviewBadgeStyle}
      >
        <div className={styles.imageNameReview} style={imageNameReviewStyle}>
          <img
            className={styles.restaruantLogoIcon}
            alt=""
            src={restaruantLogo}
          />
          <div className={styles.nameReview}>
            <b className={styles.name} style={name1Style}>
              {name1}
            </b>
            <div className={styles.review}>
              <div className={styles.icon2}>Star</div>
              <div className={styles.text2}>{text1}</div>
            </div>
          </div>
        </div>
        <button className={styles.badge1} style={badgeStyle}>
          <b className={styles.text3} style={text1Style}>
            {text2}
          </b>
        </button>
      </div>
    </div>
  );
};

export default Component;
