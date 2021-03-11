import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Component } from "react";

class App extends Component {
  state={ isSignedIn: false }
  render() {
    return (
      <div className="App"> 
      {this.state.isSignedIn ? 
      <div>Signed In!</div>
      :
      <div>Not Signed In!</div>
       }
      </div>
    //   <Router>
    //   <Welcome exact path="/" component={Welcome}/>
    // </Router>
    );
  }
  
}

export default App;
