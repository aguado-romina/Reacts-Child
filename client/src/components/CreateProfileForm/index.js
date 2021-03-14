import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_PROFILE, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateProfileForm() {
    const puppyParentRef = useRef();
    const puppyNameRef = useRef();
    const puppyImageRef = useRef();
    const breedRef = useRef();
    const ageRef = useRef();
    const bioRef = useRef();
    const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveProfiles({
        puppyParent: puppyParentRef.current.value,
        puppyName: puppyNameRef.current.value,
        puppyImage: puppyImageRef.current.value,
        bio: bioRef.current.value,
        breed: breedRef.current.value,
        age: ageRef.current.value
        
    })
      .then(result => {
        dispatch({
            type: ADD_PROFILE,
            profile: result.data
        });
      })
      .catch(err => console.log(err));

      puppyParentRef.current.value = "";
      puppyNameRef.current.value = "";
      puppyImageRef.current.value="";
      bioRef.current.value = "";
      breedRef.current.value = "";
      ageRef.current.value = "";
    
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a Profile</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={puppyParentRef} placeholder="Puppy Parent" />
        <input className="form-control mb-5" required ref={puppyNameRef} placeholder="Puppy Name" />
        <input className="form-control mb-5" ref={puppyImageRef} placeholder="Puppy Image" />
        <input className="form-control mb-5" ref={bioRef} placeholder="Bio" />
        <input className="form-control mb-5" ref={breedRef} placeholder="Breed" />
        <input className="form-control mb-5" ref={ageRef} placeholder="Age" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfileForm;
