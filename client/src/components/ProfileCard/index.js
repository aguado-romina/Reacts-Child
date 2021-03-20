import React from "react";
// import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";
// import { SET_CURRENT_PROFILE, ADD_MATCH, REMOVE_MATCH } from "../../utils/actions";
// import { useEffect } from "react";

const ProfileCard = (props) => { // can pass in image props from cloudinary

    return (
     
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80" alt="Display" />
        <div className="px-6 py-4">
          <div className="font-bold text-orangedark text-xl mb-2">
            Puppy Tati with human Sandra
          </div>
          <p className="text-black text-base">
            Bio: <span></span>😜
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-yellowlight rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">#Age</span>
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Public Speaker</span> */}
        </div>
        </div>
      
    );
  
};


export default ProfileCard;
