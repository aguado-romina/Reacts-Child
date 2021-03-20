import React from "react";
import AuthApp from "../../firebase";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const NavBar = ({ history }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (

    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-left h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">

            <button
              onClick={handleClick}
              type="button"
              className="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
            <div className={`lg:flex ${isOpen ? "block" : "hidden"} `}>
            <div class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <Link
                    to="/swipe"
                    className={window.location.pathname === "/swipe"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Start Swiping
                    </div>
                  </Link>
                  <Link
                    to="/matches"
                    className={window.location.pathname === "/matches"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      You Matches
                    </div>
                  </Link>
                  <Link
                    to="/matches"
                    className={window.location.pathname === "/matches"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Profile
                    </div>
                  </Link>
          </div>
          </div>
          </div>
          
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center"></div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Welcome
                  </div>
                  
                  <Link
                    to="/swipe"
                    className={window.location.pathname === "/swipe"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Start Swiping
                    </div>
                  </Link>
                  <Link
                    to="/matches"
                    className={window.location.pathname === "/matches"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      You Matches
                    </div>
                  </Link>
                  <Link
                    to="/matches"
                    className={window.location.pathname === "/matches"}
                  >
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Profile
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
            
          <button
            className="text-white group relative flex float-right py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-500"
            onClick={() => {
              AuthApp.auth().signOut();
              return history.push("/");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
