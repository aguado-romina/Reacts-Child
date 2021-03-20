import React from "react";
import SignUpForm from "../components/SignUpForm";
//import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container bg-white px-8 mx-auto rounded-lg">
      <div style={{ 
        backgroundImage: `url("https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/background1.png?raw=true")` 
      }}>
    <SignUpForm></SignUpForm>
    
        {/* <button
          type="submit"
          className="text-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          <p className="mt-2 text-center text-sm text-gray-600">
            <Link
              to="/createprofile"
              classNameName={
                window.location.pathname === "/signup" ||
                window.location.pathname === "/createprofile"
              }
            >
              Sign Up
            </Link>
          </p>
        </button> */}

</div>
</div>
  );
}
export default Signup;
