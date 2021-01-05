import React from "react";
import Header from "../../components/header/header";
import styles from "./cards.module.css";

const Cards = ({ authService, currentUser }) => {
  return (
    <>
      <Header authService={authService} currentUser={currentUser} />
      <h1>cards</h1>
    </>
  );
};

export default Cards;
