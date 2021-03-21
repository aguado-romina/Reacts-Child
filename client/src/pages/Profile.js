import React from "react";

import UpdateProfile from "../components/UpdateProfile";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import Match from "../components/Match";
import axios from "axios";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";

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
      <ProfileCard></ProfileCard>
      <UpdateProfile></UpdateProfile>

      <Match></Match>
    </>
  );
};

export default Profile;
