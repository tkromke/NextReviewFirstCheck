import type { NextPage } from "next";
import styles from "./top-nav.module.css";

const TopNav: NextPage = () => {
  return (
    <header className={styles.topNav}>
      <div className={styles.logo}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <div className={styles.foodParent}>
          <b className={styles.food}>food</b>
          <div className={styles.wagon}>
            <span className={styles.wag}>
              <b>wa</b>
              <span className={styles.g}>G</span>
            </span>
            <b className={styles.on}>on</b>
          </div>
        </div>
      </div>
      <div className={styles.deliverAddress}>
        <b className={styles.deliverTo}>Deliver to:</b>
        <div className={styles.mapMarkerAltParent}>
          <div className={styles.mapMarkerAlt}>map-marker-alt</div>
          <div className={styles.currentLocationParent}>
            <div className={styles.currentLocation}>Current Location</div>
            <b className={styles.mohammadpurBusStand}>
              Mohammadpur Bus Stand, Dhaka
            </b>
          </div>
        </div>
      </div>
      <div className={styles.searchLoginButton}>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <b className={styles.searchFood}>Search Food</b>
        </div>
        <div className={styles.userParent}>
          <div className={styles.user}>user</div>
          <b className={styles.login}>Login</b>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
