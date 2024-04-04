import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./flash-deal-card.module.css";

export type FlashDealCardType = {
  image?: string;
  number?: string;
  daysRemaining?: string;

  /** Style props */
  daysRemainingDisplay?: CSSProperties["display"];
};

const FlashDealCard: NextPage<FlashDealCardType> = ({
  image,
  number,
  daysRemaining,
  daysRemainingDisplay,
}) => {
  const daysRemainingStyle: CSSProperties = useMemo(() => {
    return {
      display: daysRemainingDisplay,
    };
  }, [daysRemainingDisplay]);

  return (
    <div className={styles.flashDealCard}>
      <div className={styles.foodPhoto}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.discount}>
          <b className={styles.number}>{number}</b>
          <div className={styles.percentageSymbolWrapper}>
            <div className={styles.percentageSymbol}>
              <h2 className={styles.h2}>%</h2>
              <div className={styles.off}>Off</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textsBadge}>
        <b className={styles.greysVage}>Greys Vage</b>
        <button className={styles.daysRemainingWrapper}>
          <b className={styles.daysRemaining} style={daysRemainingStyle}>
            {daysRemaining}
          </b>
        </button>
      </div>
    </div>
  );
};

export default FlashDealCard;
