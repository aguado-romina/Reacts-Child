import React, { useRef, useState, useContext } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING } from "../../utils/actions";
import API from "../../utils/API";
import SignUpImg from "../UploadImages/SignUpImg/index";
import Modal from "react-modal";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateProfile() {
  const { currentUser } = useContext(AuthContext);
  const ParentRef = useRef();
  const NameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const bioRef = useRef();
  const [state, dispatch] = useStoreContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    setModalIsOpen(false);
    e.preventDefault();
    dispatch({ type: LOADING });
    let id = currentUser.uid;
    const updateObject = {
      puppyParent: ParentRef.current.value,
      puppyName: NameRef.current.value,
      bio: bioRef.current.value,
      breed: breedRef.current.value,
      age: ageRef.current.value,
    }
    
    console.log("The things:", updateObject);
    API.updateProfiles(id, updateObject)
      .then((result) => {
        console.log("are you working??");
      })
      .catch((err) => console.log(err));
    ParentRef.current.value = "";
    NameRef.current.value = "";
    bioRef.current.value = "";
    breedRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <div className="font-fonts max-w-auto container bg-white px-8 mx-auto rounded-lg">
    
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-lightblue"></div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
          
             
            </div>
          </div>
          <button onClick={() => setModalIsOpen(true)}>
            {" "}
            + Update Your Profile
          </button>
          <Modal isOpen={modalIsOpen}>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <SignUpImg></SignUpImg>
                    <div className="grid grid-cols-6 gap-6">
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
                          className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-black rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="puppy_name"
                          className="block text-sm font-medium text-black"
                        >
                          My Name
                        </label>
                        <input
                          required
                          ref={NameRef}
                          type="text"
                          name="puppy_name"
                          id="puppy_name"
                          autoComplete="puppy-name"
                          className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-black rounded-md"
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
                          className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-black rounded-md"
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
                          className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-black rounded-md"
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
                          className="mt-1 focus:ring-lightblue focus:border-lightblue block w-full shadow-sm sm:text-sm border-black rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white text-right sm:px-6">
                    <button
                      type="submit"
                      className="group relative font-fonts flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue "
          
                      onClick={handleSubmit}
                      disabled={state.loading}
                    >
                      + Update Profile
                    </button>
                    <button
                      type="submit"
                      className="inline-flex font-fonts flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-orangelight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
                      disabled={state.loading}
                      onClick={() => setModalIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default UpdateProfile;
