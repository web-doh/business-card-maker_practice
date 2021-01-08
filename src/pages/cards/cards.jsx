import React from "react";
import Header from "../../components/header/header";
import styles from "./cards.module.css";

const Cards = ({ authService, isAuthenticated }) => {
  return (
    <>
      <Header authService={authService} isAuthenticated={isAuthenticated} />
      <h1>cards</h1>
    </>
  );
};

export default Cards;
