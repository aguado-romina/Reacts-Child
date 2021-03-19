import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import AuthApp from "../../firebase";
import {Redirect} from "react-router-dom";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState();
const [password, setPassword] = useState();
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      // const { email, password } = event.target.elements;
      console.log(email, password)
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
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        
        </div>
        <form onSubmit={handleSignUp} class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
              onChange={(e) => {setEmail(e.target.value)}}
              value={email}
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
              onChange={(e) => {setPassword(e.target.value)}}
              value={password}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
         
            <button
              type="submit"
              class="text-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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