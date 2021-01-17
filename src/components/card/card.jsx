import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "../card_item/card_item";
import ConfirmPopup from "../confirm_popup/confirm_popup";
import styles from "./card.module.css";

const Card = ({ currentUser, card, toggle, showOption, onDelete }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const content = "Are you sure want to delete this card?";

  const id = card.id;
  const display = toggle[id] ? toggle[id].display : "off";

  const showPopup = useCallback(() => {
    setIsDisplay(true);
    return;
  }, [setIsDisplay]);

  const hidePopup = useCallback(() => {
    setIsDisplay(false);
    return;
  }, [setIsDisplay]);

  const handleDelete = useCallback(() => {
    onDelete(card);
  }, [onDelete]);

  const onConfirm = useCallback(
    (e) => {
      if (e.target.textContent === "No") {
        hidePopup();
      } else {
        handleDelete();
      }
    },
    [hidePopup, handleDelete]
  );

  return (
    <li className={`${styles.card} ${styles[card.color]}`}>
      <div className={styles.edit}>
        <span className={styles.icon} onClick={() => showOption(id)}>
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
          <div className={styles.divider}></div>
          <button type="button" className={styles.option} onClick={showPopup}>
            delete
          </button>
        </ul>
      </div>
      <CardItem card={card} />

      {display === "on" && isDisplay && (
        <section className={styles.popupWindow}>
          <ConfirmPopup content={content} onConfirm={onConfirm} />
        </section>
      )}
    </li>
  );
};

export default Card;
