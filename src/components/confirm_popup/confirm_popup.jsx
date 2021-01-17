import React, { memo } from "react";
import styles from "./confirm_popup.module.css";

const ConfirmPopup = memo(({ content, onConfirm }) => {
  return (
    <>
      <h3 className={styles.title}>{content}</h3>
      <div className={styles.consent}>
        <span onClick={onConfirm}>No</span>
        <span onClick={onConfirm}>Yes</span>
      </div>
    </>
  );
});

export default ConfirmPopup;
