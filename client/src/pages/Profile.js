// where users can update their info
// maybe upload photos 

// where we could put the google maps api dog park 
// people can mark their favorite dog park and show it to other users or not


import React from "react";
import AuthApp from "../firebase";

const Profile = () => {
  return (
    <>
      <h1>Profile signOut</h1>
      <button onClick={() => AuthApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Profile;