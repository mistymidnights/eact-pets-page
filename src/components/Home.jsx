import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title-home">
        <h1>
          Enjoy us and discover more cute pets around the world !! (´｡• ω •｡`) ♡
        </h1>
        <a href="#" class="cta">
          <span>Enjoy</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
