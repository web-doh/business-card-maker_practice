import React from "react";
import CardItem from "../card_item/card_item";
import styles from "./card_preview.module.css";

const CardPreview = ({ liveCard }) => {
  return (
    <section className={styles.container}>
      <CardItem card={liveCard} />
    </section>
  );
};

export default CardPreview;
