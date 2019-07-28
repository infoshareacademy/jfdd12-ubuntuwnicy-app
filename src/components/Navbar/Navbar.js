import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

export const Navbar = props => {


  return (
    <nav>
      <div className={styles.navbar}>
        <NavLink
          exact
          className={"default-link"}
          activeClassName={"active-link"}
          to="/"
        >
          <img src={logo} />
        </NavLink>

        <NavLink
          exact
          className={"default-link"}
          activeClassName={"active-link"}
          to="/quizes-gen-list"
        >
          Stwórz Quiz
        </NavLink>
        <NavLink
          exact
          className={"default-link"}
          activeClassName={"active-link"}
          to="/quizlist"
        >
          Wyświetl dostępne Quizy
        </NavLink>
        
      </div>
    </nav>
  );
};
