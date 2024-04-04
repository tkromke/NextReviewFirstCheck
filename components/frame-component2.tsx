import type { NextPage } from "next";
import Component1 from "./component1";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.titleCardsWrapper}>
        <div className={styles.titleCards}>
          <h1 className={styles.title}>Popular items</h1>
          <div className={styles.cards}>
            <Component1
              frame40="/frame-40@2x.png"
              name1="Cheese Burger"
              text="Burger Arena"
              prop="$3.88"
            />
            <Component1
              frame40="/frame-40-1@2x.png"
              name1="Toffe’s Cake"
              text="Top Sticks"
              prop="$4.00"
              propMinWidth="116px"
              propMinWidth1="94px"
            />
            <Component1
              frame40="/frame-40-2@2x.png"
              name1="Dancake"
              text="Cake World"
              prop="$1.99"
              propMinWidth="83px"
              propMinWidth1="105px"
            />
            <Component1
              frame40="/frame-40-3@2x.png"
              name1="Crispy Sandwitch"
              text="Fastfood Dine"
              prop="$3.00"
              propMinWidth="unset"
              propMinWidth1="126px"
            />
            <Component1
              frame40="/frame-40-4@2x.png"
              name1="Thai  Soup"
              text="Foody man"
              prop="$2.79"
              propMinWidth="101px"
              propMinWidth1="103px"
            />
          </div>
        </div>
      </div>
      <div className={styles.sliderButton}>
        <button className={styles.arrowLeft}>
          <h2 className={styles.icon}>chevron-left</h2>
        </button>
        <button className={styles.arrowRight}>
          <h2 className={styles.icon1}>chevron-right</h2>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
