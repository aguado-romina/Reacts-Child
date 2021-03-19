// where users can update their info
// maybe upload photos 

// where we could put the google maps api dog park 
// people can mark their favorite dog park and show it to other users or not

import React from "react";
import AuthApp from "../firebase";
import {Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = ({ history }) => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  return (
    <>
    <h1>Hello You made it!</h1>
      <h1>Profile signOut</h1>
            
      <button onClick={() => {AuthApp.auth().signOut()
      history.push("/")}}>Sign out</button>

    </>
  );
};


export default Profile;
