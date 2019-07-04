import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = props => {
    return (
      <nav  className={styles.navbar}>
        <ul>
          <li><img src='#' /></li>
          <li>Strona Główna</li>
          <li>Stwórz Quiz</li>
          <li>Dołącz do Quizu</li>
        </ul>
      </nav>
    );
  };