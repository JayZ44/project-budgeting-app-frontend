import React from "react";
import { Link } from "react-router-dom";
import "./FrontPage";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">FrontPage</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
