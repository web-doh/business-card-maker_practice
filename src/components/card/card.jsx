import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../card_item/card_item";
import styles from "./card.module.css";

const Card = ({ currentUser, card, toggle, showOption, onDelete }) => {
  const id = card.id;
  const display = toggle[id] ? toggle[id].display : "off";

  return (
    <li className={`${styles.card} ${styles[card.color]}`}>
      <div className={styles.edit}>
        <span
          className={styles.icon}
          onClick={() => showOption(id)}
          type="button"
        >
          <i className="fas fa-ellipsis-v"></i>
        </span>
        <ul
          className={`${styles.options} ${
            display === "on" && styles.visibility
          }`}
        >
          <Link
            className={styles.option}
            to={{
              pathname: `${currentUser.uid}/card/edit/${id}`,
              state: { card },
            }}
          >
            edit
          </Link>
          <button
            type="button"
            className={styles.option}
            onClick={() => onDelete(card)}
          >
            delete
          </button>
        </ul>
      </div>
      <CardItem card={card} />
    </li>
  );
};

export default Card;
