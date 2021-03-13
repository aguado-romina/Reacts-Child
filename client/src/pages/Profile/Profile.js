// where users can update their info
// maybe upload photos 

// where we could put the google maps api dog park 
// people can mark their favorite dog park and show it to other users or not

import React from "react";
import "./style.css";

function Profile() {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Puppy Parent:</strong> 
          </li>
          <li>
            <strong>Puppy Name:</strong> 
          </li>
          <li>
            <strong>Age:</strong> 
          </li>
          <li>
            <strong>Bio:</strong> 
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Profile;
