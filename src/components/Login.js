import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);
      history.push("/dashboard");
    } catch {
      console.log(Error);
    }
  };

  return (
    <div className="ui form">
      <div className="content">
        <div className="header">
          <h2>Login</h2>
        </div>
        <br />
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
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              place
              holder="Password"
            ></input>
          </div>
          <div className="ui youtube button">Login</div>
        </form>
        <br />
        <span>
          Dont have an account <Link to="/signup">Signup </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Login;
