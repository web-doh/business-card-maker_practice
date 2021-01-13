import React from "react";
import styles from "./card_item.module.css";

const CardItem = ({ card }) => {
  return (
    <div className={`${styles.item} ${styles[card.color]}`}>
      <div className={styles.main}>
        <img
          src={card.fileUrl}
          alt={card.fileName || "default_image"}
          className={styles.img}
        />

        <div className={styles.text}>
          <h3 className={styles.name}>{card.name || ""}</h3>
          <h4 className={styles.company}>{card.company || ""}</h4>
          <p className={styles.position}>{card.position || ""}</p>
          <p className={styles.contact}>{card.contact || ""}</p>
        </div>
      </div>
      <p className={styles.remark}>{card.remark || ""}</p>
    </div>
  );
};

export default CardItem;
