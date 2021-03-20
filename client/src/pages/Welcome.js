// the landing page
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="bg-white overflow-hidden md:flex md:justify-center mb-6">
      <div class="font-montserrat"></div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome</span>
            <span className="block text-indigo-600 xl:inline">
              to Paw's Date


              <div className="flex flex-wrap justify-center">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/puppy.gif?raw=true" alt="testing" className="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>

            </span>
          </h1>
          <div className="flex flex-wrap justify-center">
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            A letter written from a dog to their human.

          </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">    
            <button>
            <Link
              to="/signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signup"}
            >Sign Up</Link>
            </button>

            <button>
            <Link
              to="/login"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"}
            >Login</Link>
            </button>

        </div>
      </main>
    </div>
  );
}
export default Welcome;

//one sentence welcome tagline
//Login/ sign Up button
