import React, { useState } from "react";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login() {
    let item = { email, password };
    console.log(item);
  }

  return (
    <>
      <div className="signup-box">
        <form>
          <h1>Login</h1>
          <br></br>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
            required
          />
          <br></br>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="password"
            required
          />
          <br></br>
          <br></br>
          <button type="submit" onClick={Login} className="btn btn-primary">
            Login
          </button>

          <NavLink to="/login">
            <button onClick={SignUp} className="btn btn-primary">
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
export default Login;
