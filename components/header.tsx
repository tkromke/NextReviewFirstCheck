import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./header.module.css";

export type HeaderType = {
  buttonDisabled?: boolean;
};

const Header: NextPage<HeaderType> = ({ buttonDisabled = true }) => {
  const onButtonClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.group11Parent}>
        <img className={styles.group11} alt="" />
        <img className={styles.imageIcon} loading="lazy" alt="" />
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
          <img className={styles.hrIcon} alt="" />
          <div className={styles.bottom}>
            <div className={styles.textFieldButton}>
              <div className={styles.wrapperTextField}>
                <input
                  className={styles.textField}
                  name="SearchInput"
                  value="Find your favourite Food"
                  placeholder="Order your food"
                  type="text"
                />
              </div>
              <button
                className={styles.button}
                onClick={onButtonClick}
                disabled={buttonDisabled}
              >
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
