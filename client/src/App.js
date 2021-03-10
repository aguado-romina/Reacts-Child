import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function App() {
  return (
    <Router>
      <Welcome exact path="/" component={Welcome}/>
    </Router>
  );
}

export default App;
