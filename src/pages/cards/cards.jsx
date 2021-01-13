import React, { useState } from "react";
import Card from "../../components/card/card";
import styles from "./cards.module.css";

const Cards = ({ cards, currentUser, onDelete }) => {
  const [toggle, setToggle] = useState({ default: { display: "off" } });

  const showOption = (cardId) => {
    setToggle((toggle) => {
      const updated = { ...toggle };

      if (updated[cardId]) {
        if (updated[cardId].display === "on") {
          updated[cardId] = { display: "off" };
        } else {
          updated[cardId] = { display: "on" };
        }
      } else {
        updated[cardId] = { display: "on" };
      }

      return updated;
    });
  };

  return (
    <>
      <section>
        <h1>Your Cards</h1>

        <ul className={styles.list}>
          {cards.length > 0 ? (
            cards.map((card) => (
              <Card
                key={card.id}
                currentUser={currentUser}
                card={card}
                toggle={toggle}
                showOption={showOption}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p className={styles.empty}>No Cards.</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Cards;
