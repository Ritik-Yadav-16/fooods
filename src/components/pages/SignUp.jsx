import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  function signUp() {
    let item = { name, address, email, password };
    console.log(item);
  }

  return (
    <>
      <div className="signup-box">
        <form>
          <h1>Sign Up</h1>
          <br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
            required
          />
          <br></br>
          <br></br>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            placeholder="enter your address"
            required
          />
          <br></br>

          <br></br>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="enter your email"
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

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Confirm password"
          />
          <br></br>

          <br></br>
          <br></br>
          <button onClick={SignUp} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
export default SignUp;
