import type { NextPage } from "next";
import Header from "../components/header";
import TopNav from "../components/top-nav";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import SearchByFoodThisIsALong from "../components/search-by-food-this-is-a-long";
import Features from "../components/features";
import AppDownload from "../components/app-download";
import FrameComponent from "../components/frame-component";
import CTA from "../components/c-t-a";
import Footer from "../components/footer";
import styles from "./index.module.css";

const CITestFood: NextPage = () => {
  return (
    <div className={styles.ciTestFood}>
      <section className={styles.topNavHeaderWrapper}>
        <div className={styles.topNavHeader}>
          <div className={styles.topNavHeaderChild} />
          <div className={styles.topNavHeaderItem} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-20@2x.png"
            />
          </div>
          <Header buttonDisabled />
          <div className={styles.background} />
          <TopNav />
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <section className={styles.ciTestFoodInner}>
        <div className={styles.frameParent}>
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <SearchByFoodThisIsALong />
      <Features />
      <AppDownload />
      <FrameComponent />
      <CTA />
      <Footer />
    </div>
  );
};

export default CITestFood;
