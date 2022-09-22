import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <p>Welcome to Food's Kitchen</p>
        <br></br>
        <NavLink to="/menu">
          <button onClick={Home} className="btn btn-primary">
            Go to Menu
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
