import React from 'react';
import styles from './Navbar.module.css';
import logo from "./logo.png";

export const Navbar = props => {
    return (
      <nav>
        <ul className={styles.navbar}>
          <li><img src={logo} /></li>
          <li>Strona Główna</li>
          <li>Stwórz Quiz</li>
          <li>Dołącz do Quizu</li>
        </ul>
      </nav>
    );
  };