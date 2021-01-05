import React from "react";
import Header from "../../components/header/header";
import styles from "./makers.module.css";

const Makers = ({ authService, currentUser }) => {
  return (
    <>
      <Header authService={authService} currentUser={currentUser} />
      <h1>makers</h1>
    </>
  );
};

export default Makers;
