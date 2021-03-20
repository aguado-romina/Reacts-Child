// the landing page
import React from "react";
import { Link } from "react-router-dom";
//import List from "../components/List";

function Welcome() {
  return (
<<<<<<< HEAD
   
    <div className="container bg-white px-8 mx-auto rounded-lg">
      
    

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-6 xl:mt-28">
     
              <div className=" sm:text-center lg:text-center">
              <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/welcome.png?raw=true" alt="logo" className="" />
 </div>

              <div className="sm:text-center lg:text-center">
  
    <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/puppy.gif?raw=true" alt="frenchie" className="object-center" />
  </div>


           
          <div className="flex justify-center">
=======
    <div className="relative bg-white overflow-hidden">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome </span>
            <span className="block text-indigo-600 xl:inline">
              to Paw's Date
            </span>
          </h1>
>>>>>>> b25ed396f89d888ef3aacd50c4a549fd6ddd5d78
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            A letter written from a dog to their human.
          </p>
<<<<<<< HEAD
          </div>
        
        <div className="flex flex-wrap justify-center">
        
=======
        </div>
        <div className="grid grid-cols-6">
          <Link
            to="/signup"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/signup"
            }
          >
      
>>>>>>> b25ed396f89d888ef3aacd50c4a549fd6ddd5d78
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue ">
                      
            <Link
<<<<<<< HEAD
               to="/signup"
              // className={
              //   window.location.pathname === "/" || window.location.pathname === "/signup"}
=======
              to="/signup"
              // className={window.location.pathname === "/" || window.location.pathname === "/signup"}
>>>>>>> b25ed396f89d888ef3aacd50c4a549fd6ddd5d78
            >Sign Up</Link>
            </button>
            <button
             type="submit"
             className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue ">
                     
            <Link
              to="/login"
              // className={
              //   window.location.pathname === "/" || window.location.pathname === "/login"}
            >Login</Link>
            </button>
           
          </Link>
        
          <Link
            to="/login"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/login"
            }
          >
            
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          
        </Link>

        </div>
       
      </main>
    </div>
  );
}
export default Welcome;

//one sentence welcome tagline
//Login/ sign Up button
