import React from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("not good");
    }
  };
  return (
    <div>
      <h1> Dashboard</h1>
      <p>Email: {currentUser.email} </p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
export default Dashboard;
