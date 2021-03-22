import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import AuthApp from "../../firebase";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // console.log("hello? help")
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      // const { email, password } = event.target.elements;
      // console.log(email, password)
      try {
        await AuthApp.auth().signInWithEmailAndPassword(email, password);
        console.log(email);
        history.push("/profile");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser, "hacker voice: i'm in");
  if (currentUser) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="max-w-sm container bg-white px-10 mx-auto rounded-lg flex justify-center sm:px-4  md:mt-10">
      
    
    <div className=" max-w-md w-full space-y-1 sm:px-1 px-1 py-8">
        <div>
          <h2 className="flex justify-center mt-2 text-3xl font-extrabold text-black">
            Login to your account
          </h2>
          <div className="py-1 mt-2 text-center text-sm text-black">or</div>
          <p className="mt-2 text-center text-sm text-orangedark">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/login" ||
                window.location.pathname === "/signup"
              }
            >
              Sign Up
            </Link>
          </p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email-address"
                value={email}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                value={password}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
