import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

function ProfileCard() {
  // can pass in image props from cloudinary
  const { currentUser } = useContext(AuthContext);
  const [ data, setData ] = useState(undefined)

  useEffect(() => {
    // console.log(`currentUser: ${currentUser.uid}`);
    axios.delete
      (`/api/profiles/${currentUser.uid}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, [data]);
  if (data === undefined){
    return (
      <div>Loading...</div>
    )
  } else {
    return (
        <button className="max-w-sm rounded overflow-hidden shadow-lg">
         Delete
          { console.log(data[0]) }
        </button>
      );      
      }

  }
export default ProfileCard;