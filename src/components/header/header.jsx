import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Navbar from "./navbar";

const Header = ({ authService, currentUser }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.title} to="/cards">
        Web Business Cards
      </Link>
      <Navbar authService={authService} currentUser={currentUser} />
    </header>
  );
};

export default Header;
