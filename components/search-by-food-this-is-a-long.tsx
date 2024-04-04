import type { NextPage } from "next";
import styles from "./search-by-food-this-is-a-long.module.css";

const SearchByFoodThisIsALong: NextPage = () => {
  return (
    <section className={styles.searchByFoodThisIsALong}>
      <div className={styles.titleItemsButton}>
        <div className={styles.header}>
          <h1 className={styles.title}>Search by Food</h1>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <b className={styles.viewAll}>View All</b>
              <div className={styles.icon}>CHEVRON-RIGHT</div>
            </div>
            <div className={styles.sliderButton}>
              <button className={styles.arrowLeft}>
                <div className={styles.icon1}>chevron-left</div>
              </button>
              <button className={styles.arrowRight}>
                <div className={styles.icon2}>chevron-right</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.div}>
            <img className={styles.foodPhotoIcon} loading="lazy" alt="" />
            <b className={styles.name}>Pizza</b>
          </div>
          <div className={styles.div1}>
            <img className={styles.foodPhotoIcon1} alt="" />
            <b className={styles.name1}>Burger</b>
          </div>
          <div className={styles.div2}>
            <img className={styles.foodPhotoIcon2} alt="" />
            <b className={styles.name2}>Noodles</b>
          </div>
          <div className={styles.div3}>
            <img className={styles.foodPhotoIcon3} alt="" />
            <b className={styles.name3}>Sub-sandiwch</b>
          </div>
          <div className={styles.div4}>
            <img className={styles.foodPhotoIcon4} alt="" />
            <b className={styles.name4}>Chowmein</b>
          </div>
          <div className={styles.div5}>
            <img className={styles.foodPhotoIcon5} alt="" />
            <b className={styles.name5}>Steak</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByFoodThisIsALong;
