import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ authService, currentUser }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/cards">Cards</Link>
        </li>
        <li className={styles.item}>
          <Link to="/makers">Makers</Link>
        </li>
        <li className={styles.item}>
          <Link to="/accounts">Accounts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
