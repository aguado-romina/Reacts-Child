import React from "react";
import CardBtn from "../CardBtn";


import "./style.css";

function Card(props) {
  return (
    <div className="wrapper bg-gray-100 antialiased text-gray-400">
      <div>
        <img
          src= {props.image}
          alt={props.puppy}
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Woof
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {/* 2 baths &bull; 3 rooms */}
                
              </div>
            </div>
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
             Hi It's {props.human} and {props.puppy} !
            </h4>
            <div className="mt-1">
              Bio: {props.bio}
              <span className="text-gray-600 text-sm"> </span>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                Age: {props.age}
              </span>
              {/* <span className="text-sm text-gray-600">(based on 234 ratings)</span> */}
            </div>
          </div>
          <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass" 
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
 <span onClick={() => props.removePuppy(props.id)} className="remove">
        𝘅
      </span>
        </div>
      </div>
    </div>
  );
}
export default Card;
