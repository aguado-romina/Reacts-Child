// where users can update their info
// maybe upload photos

// where we could put the google maps api dog park
// people can mark their favorite dog park and show it to other users or not

import React from "react";
import AuthApp from "../firebase";
import UpdateProfile from "../components/UpdateProfile";
import { Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import Match from "../components/Match";
import axios from "axios";

const Profile = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    axios.get(`/api/profiles/${currentUser.uid}`).then((res) => {
      console.log(res.data);
    });
  }, []);
  console.log(currentUser);
  return (
    <>
      <div>
        <h1>Hello You made it!</h1>
        <UpdateProfile></UpdateProfile>
      </div>
      <div>
<Match></Match>
      </div>

      <button
        onClick={() => {
          AuthApp.auth().signOut();
          history.push("/");
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default Profile;
