import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-home">
            <a href="#">
              <img
                className="logo-container"
                src="src\assets\cat copia.png"
                alt="logo"
              />
            </a>
          </div>
          <ul>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
