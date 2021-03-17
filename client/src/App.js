import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Welcome from "./pages/Welcome";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Component } from "react";
import Signup from "./components/SignUpForm/index";
import SignupForm from "./components/SignUpForm/index";
import "./index.css";
// import Uploadimg from "./components/UploadImages/Allcompailed";

firebase.initializeApp({
  apiKey: "AIzaSyB2tdcU5QNdKXSdgZIoNuf6ejdNE5Dkfs8",
  authDomain: "paw-s-date.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Signup exact path="/" component={SignupForm} />
        </Router>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>
              {" "}
              Sign Out!
            </button>
            <h3>Hey {firebase.auth().currentUser.displayName}</h3>
            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
