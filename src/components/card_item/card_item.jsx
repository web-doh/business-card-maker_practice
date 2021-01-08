import React from "react";
import styles from "./card_item.module.css";

const CardItem = (props) => {
  return (
    <li className={styles.card}>
      <img src="" alt="profile-image" className={styles.img} />
      <div className={styles.text}>
        <h3 className={styles.name}>name</h3>
        <h4 className={styles.company}>company</h4>
        <p className={styles.position}>position</p>
        <p className={styles.contact}>contact</p>
      </div>
      <p className={styles.remark}>remark</p>
    </li>
  );
};

export default CardItem;
