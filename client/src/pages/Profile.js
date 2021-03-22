import React from "react";

import UpdateProfile from "../components/UpdateProfile";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
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
    
    <div className="font-fonts max-w-auto container bg-white px-8 mx-auto rounded-lg">
      
    
    <NavBar />
   
    <ProfileCard></ProfileCard>
    <UpdateProfile></UpdateProfile>
 

</div>

  
 
);
};

export default Profile;
