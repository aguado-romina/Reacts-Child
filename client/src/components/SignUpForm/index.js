import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import AuthApp from "../../firebase";
//import {Redirect} from "react-router-dom";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState();
const [password, setPassword] = useState();
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      // const { email, password } = event.target.elements;
      // console.log(email, password)
    try {
      await AuthApp
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/createprofile");
    
    } catch (error) {
      alert(error);
    }
  }, [history, email, password]);
  return (
    <div className="max-w-md container bg-white px-10 mx-auto rounded-lg flex justify-center lg:px-4  md:mt-10">
      
    
      <div className=" max-w-md w-full space-y-8 sm:px-3 px-4 py-4">
        <div>
          <h2 className="flex justify-center mt-3 text-3xl font-extrabold text-black">
            Sign up for an account
          </h2>
        
        </div>
        <form onSubmit={handleSignUp} className=" mt-12 space-y-5">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={(e) => {setPassword(e.target.value)}}
              value={password}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
         
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
            >
            
            Sign Up
          
            </button>
          
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(SignUp);