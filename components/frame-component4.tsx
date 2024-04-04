import type { NextPage } from "next";
import FlashDealCard from "./flash-deal-card";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <section className={styles.flashDealsWrapper}>
      <div className={styles.flashDeals}>
        <FlashDealCard
          image="357x301x-1593827755"
          number="15"
          daysRemaining="6 Days Remaining"
        />
        <FlashDealCard
          image="357x301x-1399750150"
          number="10"
          daysRemaining="6 Days Remaining"
          daysRemainingDisplay="inline-block"
        />
        <FlashDealCard
          image="357x301x-614253260"
          number="25"
          daysRemaining="7 Days Remaining"
          daysRemainingDisplay="inline-block"
        />
        <FlashDealCard
          image="357x301x1838471420"
          number="20"
          daysRemaining="8 Days Remaining"
          daysRemainingDisplay="inline-block"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
