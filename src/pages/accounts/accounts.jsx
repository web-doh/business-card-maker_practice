import React from "react";
import LoginPopup from "../../components/login_popup/login_popup";
import styles from "./accounts.module.css";

const Accounts = ({ authService, currentUser }) => {
  return (
    <>
      {currentUser ? (
        <button onClick={authService.signOut}>Logout</button>
      ) : (
        <>
          <h1>Login</h1>
          <LoginPopup authService={authService} />
        </>
      )}
    </>
  );
};

export default Accounts;
