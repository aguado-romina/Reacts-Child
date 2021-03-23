import React from "react";



import "./style.css";

function MatchesCard(props) {
  return (
    <div>
    <div className="wrapper bg-white antialiased text-black object-center">
    
        <div>
        <img className="cardImage img-fluid"
          src= {props.image}
          alt={props.puppy}
          className="w-full object-cover object-center rounded-lg shadow-md"
        />
        <div className="relative px-10 -mt-0  ">
          <div className="sm-bg-white p-2 px-3 rounded-lg">
            <div className="flex items-baseline">

              
              <span className="text-base bg-teal-200 text-orangedark text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Woof
              </span>
              <div className="ml-2 text-lightblue uppercase text-xs font-semibold tracking-wider">
                {/* 2 baths &bull; 3 rooms */}
                
              </div>
            </div>
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
             Hi It's <span className="text-yellowlight text-md font-semibold">{props.human} </span>
             and
             <span className="text-lightblue text-md font-semibold"> {props.puppy}
             </span> !
            </h4>
            <div className="mt-1">
              Bio: {props.bio}
              <span className="text-darkblue text-sm"> </span>
            </div>
            <div className="mt-4">
              Age: <span className="text-orangedark text-md font-semibold">
                 {props.age}
              </span>
              {/* <span className="text-sm text-darkblue">(based on 234 ratings)</span> */}
            </div>
          </div>
      
 <span onClick={() => props.removePuppy(props.id)} className="remove h-1 px-2 text-darkblue transition-colors duration-150 border border-bluelight rounded-lg focus:shadow-outline hover:bg-bluelught hover:text-bluedark">
        𝘅
      </span>
        </div>
      </div>
    </div>
    </div>
  );
}
export default MatchesCard;

