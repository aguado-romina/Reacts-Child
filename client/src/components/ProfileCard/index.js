import React from "react";
// import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";
// import { SET_CURRENT_PROFILE, ADD_MATCH, REMOVE_MATCH } from "../../utils/actions";
// import { useEffect } from "react";

const ProfileCard = (props) => { // can pass in image props from cloudinary

    return (
     
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.image} alt={props.puppy} />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Puppy {props.puppy} and human {props.human} 
          </div>
          <p className="text-gray-700 text-base">
            Bio: <span> {props.bio}</span>😜
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Age: {props.age}</span>
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Public Speaker</span> */}
        </div>
        </div>
      
    );
  
};


export default ProfileCard;
