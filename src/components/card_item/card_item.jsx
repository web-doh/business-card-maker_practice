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
          <h3 className={styles.name}>{card.name || "Name"}</h3>
          <h4 className={styles.company}>{card.company || "Company"}</h4>
          <p className={styles.position}>{card.position || "Position"}</p>
          <p className={styles.contact}>{card.contact || "Contact"}</p>
        </div>
      </div>
      <p className={styles.remark}>{card.remark || "Remark"}</p>
    </div>
  );
};

export default CardItem;
