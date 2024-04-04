import type { NextPage } from "next";
import Component from "./component";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Featured Restaurants</h1>
        </div>
        <div className={styles.parent}>
          <Component
            image="/image-5@2x.png"
            text="20% off"
            restaruantLogo="/restaruant-logo@2x.png"
            name1="Foodworld"
            text1="46"
            text2="Opens tomorrow"
          />
          <Component
            image="/image-6@2x.png"
            text="15% off"
            restaruantLogo="/restaruant-logo-1@2x.png"
            name1="Pizzahub"
            text1="40"
            text2="Opens tomorrow"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="89px"
            propBackgroundColor="rgba(241, 114, 40, 0.2)"
            propColor="#f17228"
            propDisplay="inline-block"
            propMinWidth1="unset"
          />
          <Component
            image="/image-7@2x.png"
            text="10% off"
            restaruantLogo="/restaruant-logo-2@2x.png"
            name1="Donuts hut"
            text1="20"
            text2="Open Now"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="108px"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
          <Component
            image="/image-8@2x.png"
            text="15% off"
            restaruantLogo="/restaruant-logo-3@2x.png"
            name1="Donuts hut"
            text1="50"
            text2="Open Now"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="108px"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
          <Component
            image="/image-9@2x.png"
            text="10% off"
            restaruantLogo="/restaruant-logo-4@2x.png"
            name1="Ruby Tuesday"
            text1="26"
            text2="Open Now"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="unset"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
          <Component
            image="/image-10@2x.png"
            text="25% off"
            restaruantLogo="/restaruant-logo-5@2x.png"
            name1="Kuakata Fried Chicken"
            text1="53"
            text2="Open Now"
            propHeight="unset"
            propFlex="unset"
            propHeight1="301px"
            propHeight2="unset"
            propFlex1="unset"
            propMinWidth="unset"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
          <Component
            image="/image-11@2x.png"
            text="10% off"
            restaruantLogo="/restaruant-logo-6@2x.png"
            name1="Red Square"
            text1="45"
            text2="Open Now"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="111px"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
          <Component
            image="/image-12@2x.png"
            text="10% off"
            restaruantLogo="/restaruant-logo-7@2x.png"
            name1="Taco Bell"
            text1="35"
            text2="Open Now"
            propHeight="463px"
            propFlex="1"
            propHeight1="unset"
            propHeight2="138px"
            propFlex1="1"
            propMinWidth="86px"
            propBackgroundColor="rgba(121, 185, 60, 0.2)"
            propColor="#79b93c"
            propDisplay="inline-block"
            propMinWidth1="100px"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <b className={styles.text}>View All</b>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>CHEVRON-RIGHT</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
