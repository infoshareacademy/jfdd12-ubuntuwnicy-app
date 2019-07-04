import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = props => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo-app">Todo app</Link>
          </li>
          <li>
            <Link to="/cats/1">Cats list</Link>
          </li>
          <li>
            <Link to="/users">Users list</Link>
          </li>
        </ul>
      </nav>
    );
  };