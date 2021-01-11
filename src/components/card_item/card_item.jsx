import React from "react";
import styles from "./card_item.module.css";

const CardItem = ({ card }) => {
  return (
    <li className={styles.card}>
      <img
        src={card.fileUrl || "/images/default_profile.png"}
        alt={card.fileName || "profile_image"}
        className={styles.img}
      />

      <div className={styles.text}>
        <h3 className={styles.name}>{card.name || "name"}</h3>
        <h4 className={styles.company}>{card.company || "company"}</h4>
        <p className={styles.position}>{card.position || "position"}</p>
        <p className={styles.contact}>{card.contact || "contact"}</p>
      </div>
      <p className={styles.remark}>{card.remark || "remark"}</p>
    </li>
  );
};

export default CardItem;
