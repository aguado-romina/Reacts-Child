// the landing page
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="relative bg-white overflow-hidden">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome </span>
            <span className="block text-yellow-700 xl:inline">
              to Paw's Date
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            A letter written from a dog to their human.
          </p>
        </div>
        <div className="grid grid-cols-8">
          <Link
            to="/signup"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/signup"
            }
          >
      
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-yellow-700 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign Up
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
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
