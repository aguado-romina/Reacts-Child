import React from "react";
import UpdateProfile from "../components/UpdateProfile";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
// import Match from "../components/Match";
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
    <div className="max-w-auto container bg-white px-8 mx-auto rounded-lg">
      <NavBar />
      <UpdateProfile></UpdateProfile>
      <ProfileCard></ProfileCard>x
      {/* <Match></Match> */}
    </div>
  );
};

export default Profile;
