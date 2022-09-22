import React from "react";
import CheckOut from "./CheckOut";
import { NavLink } from "react-router-dom";

import "./Menu.css";
export default function Menu() {
  return (
    <div className="product_items">
      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5EnJ0lWTyQWtZuDMzUp39niPbgiNNZtHoQ&usqp=CAU" />

        <p>Hamburger</p>
        <h3>Price: 120</h3>
        <NavLink to="/checkout">
          <button onClick={Menu} className="btn btn-primary">
            pay Now
          </button>
        </NavLink>
      </div>

      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbNN_6cQRU3fW9Bxwiv1npOAAqm2nThUhfw&usqp=CAU" />
        <p>Coke</p>
        <h3>Price: 40</h3>
        <NavLink to="/checkout">
          <button onClick={Menu} className="btn btn-primary">
            pay Now
          </button>
        </NavLink>
      </div>

      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUFVvkxBWTWLvWTu4SYtBaVjJYpcv1Kermw&usqp=CAU" />
        <p>Pizza</p>
        <h3>Price: 120</h3>

        <NavLink to="/checkout">
          <button onClick={Menu} className="btn btn-primary">
            pay Now
          </button>
        </NavLink>
      </div>
    </div>
  );
}
