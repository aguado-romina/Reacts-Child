import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateProfileForm from "./pages/CreateProfileForm";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import UserSwipe from "./pages/UserSwipe";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import Profile from "./pages/Profile";
import { AuthProvider } from "./AuthContext";
import Matches from "./pages/Matches";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
    <div style={{ 
      backgroundImage: `url("https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/background1.png?raw=true")` 
    }}>


        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/createprofile" component={CreateProfileForm} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/swipe" component={UserSwipe} />
            <PrivateRoute exact path="/matches" component={Matches} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
