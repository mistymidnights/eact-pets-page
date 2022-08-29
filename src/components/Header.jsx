import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import "./Header.css";
import useLocalStorage from 'use-local-storage'


const Header = ({switchTheme}) => {
  const {pet, logout} = useContext(JwtContext);

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
          <ul className="navMenu">
          {pet ? (
            <>
              <li className="Welcome">
                Welcome {pet.petName}!
              </li>
              <li>
                <Link to="/pets">Pets</Link>
              </li>
              {/*TODO: Ver bien dónde es mejor poner la imágen de perfil :3*/}
              <li className="li_avatar">
                <div className="avatar_container">
                  <Link to="/profile">Profile</Link>
                  {pet.avatar != "undefined" ? <img src={pet?.avatar} alt="Pet Avatar" /> : null}
                </div>
              </li>
              <li>
                <button onClick={() => logout()}>Logout</button>
              </li>
            </>
            ) : (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
            )}
          </ul>
          <input className="switchInput" type="checkbox" id="toggle_checkbox"></input>
        <label className="switchLabel" for="toggle_checkbox" onClick={switchTheme}></label>
        </nav>

      </header>
    </>
  );
};

export default Header;
