import React from "react";
import styles from "./maker_item.module.css";

const MakerItem = ({ FileInput, inputItem }) => {
  const inputRef = React.useRef();

  return (
    <>
      <li className={styles.item}>
        <label htmlFor={inputItem.name}>{inputItem.name}</label>
        {inputItem.type === "text" ? (
          <input
            type={inputItem.type}
            name={inputItem.name}
            placeholder={inputItem.name}
            autoComplete="off"
            autoCapitalize="off"
            ref={inputRef}
            required
          />
        ) : inputItem.type === "file" ? (
          <FileInput inputItem={inputItem} />
        ) : (
          <select name="color" ref={inputRef}>
            <option value="">--Choose your color theme--</option>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
          </select>
        )}
      </li>
    </>
  );
};

export default MakerItem;
