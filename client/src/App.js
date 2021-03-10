import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome"

function App() {
  return (
    <Router>
      <Welcome exact path="/" component={Welcome}/>
    </Router>
  );
}

export default App;
