import type { NextPage } from "next";
import styles from "./features.module.css";

const Features: NextPage = () => {
  return (
    <section className={styles.features}>
      <div className={styles.card}>
        <div className={styles.div}>
          <img className={styles.icon} loading="lazy" alt="" />
          <h2 className={styles.discounts}>
            <p className={styles.daily}>Daily</p>
            <p className={styles.discounts1}>Discounts</p>
          </h2>
        </div>
        <img className={styles.hrIcon} alt="" />
        <div className={styles.div1}>
          <img className={styles.icon1} alt="" />
          <h2 className={styles.text}>
            <p className={styles.live}>Live</p>
            <p className={styles.tracing}>Tracing</p>
          </h2>
        </div>
        <img className={styles.hrIcon1} alt="" />
        <div className={styles.div2}>
          <img className={styles.icon2} alt="" />
          <h2 className={styles.text1}>
            <p className={styles.quick}>Quick</p>
            <p className={styles.delivery}>Delivery</p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Features;
