import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const { signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password);
    history.push("/dashboard");
  };

  return (
    // <div className="ui container">
    <div className="ui  form">
      <div className="content">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <br />
        {/* <div className="field">
          <label>First Name</label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            name="first-name"
            placeholder="First Name"
          ></input>
        </div> */}
        {/* <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            name="last-name"
            placeholder="LastS Name"
          ></input>
        </div> */}
        <form onClick={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="ui youtube button">Signup</div>
        </form>
        <br />
        <span>
          Already have an account <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
