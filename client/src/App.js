import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginPage} />
            
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profiles/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>

      </div>
    </Router>
  );
}

export default App;
