import React from "react";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const item = styles.item;
  const active = `${item} ${styles.active}`;
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={location.pathname === "/cards" ? active : item}>
          <Link to="/cards">Cards</Link>
        </li>
        <div className={styles.divider}></div>
        <li className={location.pathname === "/makers" ? active : item}>
          <Link to="/makers">Makers</Link>
        </li>
        <div className={styles.divider}></div>
        <li className={location.pathname === "/accounts" ? active : item}>
          <Link to="/accounts">Accounts</Link>
        </li>
      </ul>
      <span className={`${styles.list} ${styles.icon}`}>
        <i className="fas fa-bars"></i>
      </span>
    </nav>
  );
};

export default Navbar;
