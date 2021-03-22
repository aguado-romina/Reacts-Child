import React, { useRef, useContext } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_PROFILE, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import Allcompailed from "../UploadImages/Allcompailed";

function CreateProfile() {
  const { currentUser } = useContext(AuthContext);
  const ParentRef = useRef();
  const NameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const bioRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveProfile({
      currentUser: currentUser.uid,
      puppyParent: ParentRef.current.value,
      puppyName: NameRef.current.value,
      bio: bioRef.current.value,
      breed: breedRef.current.value,
      age: ageRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_PROFILE,
          profile: result.data,
        });
      })
      .catch((err) => console.log(err));

    ParentRef.current.value = "";
    NameRef.current.value = "";
    bioRef.current.value = "";
    breedRef.current.value = "";
    ageRef.current.value = "";
  };

  return (

   
    
        
    <div className="font-fonts bg-white lg:container mx-auto rounded-md lg:px-6  md:mt-10 ">
      
    

    

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-2">
          <div className="border-t border-white"></div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-1">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-5 text-black">
                Profile
              </h3>
              <p className="mt-1 text-sm text-black">
                Make a Profile So You Can Start Matching.
              </p>
            </div>
          </div>
          <div>
            <Allcompailed />
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-2 py-5 bg-white sm:p-10">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="puppy_parent"
                        className="block text-sm font-medium text-black"
                      >
                        My Human
                      </label>
                      <input
                        required
                        ref={ParentRef}
                        type="text"
                        name="puppy_parent"
                        id="puppy_parent"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="puppy_name"
                        className="block text-sm font-medium  text-black"
                      >
                        My Name
                      </label>
                      <input
                        required
                        ref={NameRef}
                        type="text"
                        name="puppy_name"
                        id="puppy_name"
                        autoComplete="puppyName"
                        className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="puppy_bio"
                        className="block text-sm font-medium text-black"
                      >
                        About Me
                      </label>
                      <input
                        ref={bioRef}
                        type="text"
                        name="puppy_bio"
                        id="puppy_bio"
                        autoComplete="puppyBio"
                        className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="puppy_breed"
                        className="block text-sm font-medium text-black"
                      >
                        What I am
                      </label>
                      <input
                        ref={breedRef}
                        type="text"
                        name="puppy_breed"
                        id="puppy_breed"
                        autoComplete="breed"
                        className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="puppy_age"
                        className="block text-sm font-medium text-black"
                      >
                        How Old I Am
                      </label>
                      <input
                        ref={ageRef}
                        type="text"
                        name="puppy_age"
                        id="puppy_age"
                        autoComplete="age"
                        className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 bg-white text-right sm:px-8">
           
                  <button
                    type="submit"
                    className="group relative flex justify-center py-2 px-3 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
                     
                    onClick={handleSubmit}
                    disabled={state.loading}
                  >
                    {" "}
                    <Link
                      to="/swipe"
                      className={
                        window.location.pathname === "/createprofile" ||
                        window.location.pathname === "/swipe"
                      }
                    >
                      Create Profile
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
