// where users can update their info
// maybe upload photos

// where we could put the google maps api dog park
// people can mark their favorite dog park and show it to other users or not

import React from "react";

import UpdateProfile from "../components/UpdateProfile"
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import NavBar from "../components/NavBar";

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
      <NavBar />
        <UpdateProfile></UpdateProfile>
      
    </>
  );
};

export default Profile;
