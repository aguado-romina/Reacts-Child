import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import UserSwipe from "./pages/UserSwipe";
import Matches from "./pages/UserSwipe";
import Profile from "./pages/Profile";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./components/Navbar/index";
// import CreateProfile from "./components/CreateProfile/index"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AuthProvider>
        <Router>
          <div>
            <Route path="/" component={Welcome} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <PrivateRoute exact path="/Profile" component={Profile} />
            <Route exact path="/Matches" component={Matches} />
            <Route exact path="/UserSwipe" component={UserSwipe} />
            <Route exact path="/Welcome" component={Welcome} />
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
