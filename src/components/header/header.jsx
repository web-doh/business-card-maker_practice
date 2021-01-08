import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Navbar from "./navbar";

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Link
        className={styles.title}
        to={isAuthenticated ? "/cards" : "/public"}
      >
        Web Business Cards
      </Link>

      {isAuthenticated ? (
        <Navbar />
      ) : (
        <nav>
          <div className={styles.menu}>
            <Link to="/accounts">Login</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
