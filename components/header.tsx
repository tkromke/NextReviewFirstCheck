import type { NextPage } from "next";
import styles from "./header.module.css";

export type HeaderType = {
  buttonDisabled?: boolean;
};

const Header: NextPage<HeaderType> = ({ buttonDisabled = true }) => {
  return (
    <div className={styles.header}>
      <div className={styles.group11Parent}>
        <img className={styles.group11} alt="" src="/group-1-1@2x.png" />
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className={styles.titleOrderCard}>
        <div className={styles.title}>
          <h1 className={styles.areYouStarving}>Are you starving?</h1>
          <div className={styles.withinAFew}>
            Within a few clicks, find meals that are accessible near you
          </div>
        </div>
        <div className={styles.orderCard}>
          <div className={styles.top}>
            <button className={styles.tab1}>
              <div className={styles.icon}>motorcycle</div>
              <b className={styles.compare}>Delivery</b>
            </button>
            <div className={styles.tab2}>
              <div className={styles.icon1}>shopping-bag</div>
              <b className={styles.text}>Pickup</b>
            </div>
          </div>
          <img className={styles.hrIcon} alt="" src="/hr.svg" />
          <div className={styles.bottom}>
            <div className={styles.textFieldButton}>
              <div className={styles.wrapperTextField}>
                <input className={styles.textField} type="text" />
              </div>
              <button className={styles.button} disabled={buttonDisabled}>
                <div className={styles.icon2}>SEARCH</div>
                <b className={styles.text1}>Find Food</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
