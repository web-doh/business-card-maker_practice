import React from "react";
import CardItem from "../card_item/card_item";
import styles from "./card_preview.module.css";

const CardPreview = (props) => {
  return (
    <section className={styles.container}>
      <CardItem />
    </section>
  );
};

export default CardPreview;
