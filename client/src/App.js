import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateProfileForm from "./pages/CreateProfileForm";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import Profile from "./pages/Profile";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/createprofile" component={CreateProfileForm} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profiles/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
