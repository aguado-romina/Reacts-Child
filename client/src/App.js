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

import React, { Component } from "react";
import Notifications, { notify } from "react-notify-toast";
import Spinner from "./components/UploadImages/Spinner.js";
import Images from "./components/UploadImages/Images";
import Buttons from "./components/UploadImages/Buttons";
import { API_URL } from "./config";
import "./App.css";

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

const toastColor = {
  background: "#505050",
  text: "#fff",
};

export default class App extends Component {
  state = {
    loading: true,
    uploading: false,
    images: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/wake-up`).then((res) => {
      if (res.ok) {
        return this.setState({ loading: false });
      }
      const msg = "Something is went wrong with Heroku";
      this.toast(msg, "custom", 2000, toastColor);
    });
  }

  toast = notify.createShowQueue();

  onChange = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      return this.toast(msg, "custom", 2000, toastColor);
    }

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
      return errs.forEach((err) => this.toast(err, "custom", 2000, toastColor));
    }

    this.setState({ uploading: true });

    fetch(`${API_URL}/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((images) => {
        this.setState({
          uploading: false,
          images,
        });
      })
      .catch((err) => {
        err.json().then((e) => {
          this.toast(e.message, "custom", 2000, toastColor);
          this.setState({ uploading: false });
        });
      });
  };

  filter = (id) => {
    return this.state.images.filter((image) => image.public_id !== id);
  };

  removeImage = (id) => {
    this.setState({ images: this.filter(id) });
  };

  onError = (id) => {
    this.toast("Oops, something went wrong", "custom", 2000, toastColor);
    this.setState({ images: this.filter(id) });
  };

  render() {
    const { loading, uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case loading:
          return <WakeUp />;
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return (
            <Images
              images={images}
              removeImage={this.removeImage}
              onError={this.onError}
            />
          );
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div className="container">
        <Notifications />
        <div className="buttons">{content()}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
