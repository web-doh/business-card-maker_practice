import React from "react";
import MakerItem from "../maker_item/maker_item";
import styles from "./maker_items.module.css";

const MakerItems = ({ FileInput, inputItems }) => {
  return inputItems.map((inputItem) => {
    return (
      <ul className={styles.items}>
        <MakerItem
          FileInput={FileInput}
          key={inputItem.id}
          inputItem={inputItem}
        />
      </ul>
    );
  });
};

export default MakerItems;
