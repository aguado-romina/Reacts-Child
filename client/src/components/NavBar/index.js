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

    
    <nav className="bg-white h-auto">
      <div className="max-w-7xl h-0 mx-auto px-2 sm:px-2 sm:px-3 p-4">
        <div className="relative flex items-center justify-left h-4">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={handleClick}
              type="button"
              className="block md:hidden inline-flex h-5 items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            {/* MOBILE VIEW */}
            <div className={`lg:flex ${isOpen ? "block" : "hidden"} `}>
              <div
                className="sm:hidden origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-controls="mobile-menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <Link
                  to="/swipe"
                  className={window.location.pathname === "/swipe"}
                >
                  <div className="text-black hover:bg-orangedark hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Start Swiping
                  </div>
                </Link>
                <Link
                  to="/matches"
                  className={window.location.pathname === "/matches"}
                >
                  <div className="text-black hover:bg-darkblue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    You Matches
                  </div>
                </Link>
                <Link
                  to="/profile"
                  className={window.location.pathname === "/profile"}
                >
                  <div className="text-black hover:bg-orangelight hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* DESKTOP VIEW */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:block sm:ml-10">
              <div className="flex space-x-2">
                <div >
                <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/welcome.png?raw=true"  width="160" alt="logo" className="" />
                </div>

                <Link
                  to="/swipe"
                  className={window.location.pathname === "/swipe"}
                >
                  <div className="text-black hover:bg-orangedark hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Start Swiping
                  </div>
                </Link>
                <Link
                  to="/matches"
                  className={window.location.pathname === "/matches"}
                >
                  <div className="text-black hover:bg-yellowlight hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Your Matches
                  </div>
                </Link>
                <Link
                  to="/profile"
                  className={window.location.pathname === "/profile"}
                >
                  <div className="text-black hover:bg-darkblue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <button
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-orangelight hover:bg-yellowlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
          
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
