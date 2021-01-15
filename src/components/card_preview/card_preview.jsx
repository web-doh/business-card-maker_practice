import React from "react";
import CardItem from "../card_item/card_item";
import styles from "./card_preview.module.css";

const CardPreview = ({ liveCard }) => {
  return (
    <div className={`${styles.container} ${styles[liveCard.color]}`}>
      <CardItem card={liveCard} />
    </div>
  );
};

export default CardPreview;
