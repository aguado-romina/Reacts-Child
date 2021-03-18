import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
// import UserSwipe from "./pages/UserSwipe";
// import Matches from "./pages/UserSwipe";
import Profile from "./pages/Profile";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

// import CreateProfile from "./components/CreateProfile/index"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
            <Route path="/" component={Welcome} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <PrivateRoute exact path="/Profile" component={Profile} />
            {/* <Route exact path="/Matches" component={Matches} />
            <Route exact path="/UserSwipe" component={UserSwipe} /> */}
            <Route exact path="/Welcome" component={Welcome} />
          </div>
        </Router>
      </AuthProvider>
    </>
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

// function App() {
//   return (
//     <Router>
//       <div>
//         <StoreProvider>
//           <Nav />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/home" component={Home} />
//             <Route exact path="/favorites" component={FavoritesList} />
//             <Route exact path="/posts/:id" component={Detail} />
//             <Route component={NoMatch} />
//           </Switch>
//         </StoreProvider>
//       </div>
//     </Router>
  );
}

export default App;
