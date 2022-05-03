import React from "react";
import styles from "./Header.module.css";

const Header = ({ style }) => (
  <h1 style={style} className={styles.header}>
    EXPENSE TRACKER APP
  </h1>
);

export default Header;
