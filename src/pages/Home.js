import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/croissants.PNG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Croissants et café </h1>
        <p> Good morning with a cup of coffee and a delicious croissant</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;