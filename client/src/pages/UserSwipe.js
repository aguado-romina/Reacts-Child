// view other users and they can like or dislike based on pictures
import React from "react";
import Match from "../components/Match";
import NavBar from "../components/NavBar";

function UserSwipe () {
  

  
 

    return (
      <div className="font-fonts max-w-auto container bg-white px-8 mx-auto rounded-lg object-center">
      
        <NavBar/>
        <Match></Match>
    
      </div>
    );
 
}

export default UserSwipe;
