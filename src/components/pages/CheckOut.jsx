import React from "react";
import "./CheckOut.css";
import { NavLink } from "react-router-dom";

function CheckOut() {
  return (
    <>
      <div class="container">
        <form action="">
          <div class="row">
            <div class="col">
              <h3 class="title">payment</h3>

              <div class="inputBox">
                <span>cards accepted :</span>
              </div>
              <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. Ritik Yadav" />
              </div>
              <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div class="flex">
                <div class="inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div class="inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/thank">
            <button onClick={CheckOut} className="btn btn-primary">
              proceed to checkout
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
}

export default CheckOut;
