import React from "react";
import "./App.css";
import Container from "./components/Container";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
// fireStoreDb.Settings({ timestampsInSnapshot: true });
const App = () => {
  return (
    <div className="aligncen">
      <Container>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute
                path="/dashboard"
                component={Dashboard}
              ></PrivateRoute>
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Signup}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </div>
  );
};

export default App;

// Initialize Firebase
