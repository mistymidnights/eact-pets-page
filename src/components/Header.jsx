import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-home">
            <Link className="link" to="/">
                <img
                  className="logo-container"
                  src="src\assets\cat copia.png"
                  alt="logo"
                />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
