import React, { useCallback, useState } from "react";
import ConfirmPopup from "../../components/confirm_popup/confirm_popup";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./accounts.module.css";

const Accounts = ({ isAuthenticated, currentUser, onLogout, authService }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const content = "Are you sure want to sign out?";

  let username;
  if (currentUser) {
    username = currentUser.displayName || currentUser.email.split("@")[0];
  }

  const showPopup = useCallback(() => {
    setIsDisplay(true);
    return;
  }, [setIsDisplay]);

  const hidePopup = useCallback(() => {
    setIsDisplay(false);
    return;
  }, [setIsDisplay]);

  const handleLogout = useCallback(() => {
    currentUser && onLogout();
  }, [currentUser, onLogout]);

  const onConfirm = useCallback(
    (e) => {
      if (e.target.textContent === "No") {
        hidePopup();
      } else {
        handleLogout();
      }
    },
    [hidePopup, handleLogout]
  );

  return (
    <>
      <section className={styles.container}>
        {isAuthenticated ? (
          <>
            <h1 className={styles.title}>Hello, {username}!</h1>
            <button className={styles.logout} onClick={showPopup}>
              Logout
            </button>

            {isDisplay && (
              <section className={styles.popupWindow}>
                <ConfirmPopup content={content} onConfirm={onConfirm} />
              </section>
            )}
          </>
        ) : (
          <>
            <h1 className={styles.title}>Login</h1>
            <LoginPopup authService={authService} />
          </>
        )}
      </section>
    </>
  );
};

export default Accounts;
