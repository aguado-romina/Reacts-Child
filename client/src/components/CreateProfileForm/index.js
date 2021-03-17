import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_PROFILE, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateProfileForm() {
    const ParentRef = useRef();
    const NameRef = useRef();
    const ImageRef = useRef();
    const breedRef = useRef();
    const ageRef = useRef();
    const bioRef = useRef();
    const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveProfile({
        puppyParent: ParentRef.current.value,
        puppyName: NameRef.current.value,
        puppyImage: ImageRef.current.value,
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
      

      ParentRef.current.value = "";
      NameRef.current.value = "";
      ImageRef.current.value="";
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
      <form className="form-group mt-5 mb-5" >
        <input className="form-control mb-5" required ref={ParentRef} placeholder=" Puppy Parent" />
        <input className="form-control mb-5" required ref={NameRef} placeholder=" Puppy Name" />
        <input className="form-control mb-5" ref={ImageRef} placeholder=" Puppy Image" />
        <input className="form-control mb-5" ref={bioRef} placeholder="Puppy Bio" />
        <input className="form-control mb-5" ref={breedRef} placeholder="Puppy Breed" />
        <input className="form-control mb-5" ref={ageRef} placeholder="Puppy Age" />
        <button className="btn btn-success mt-3 mb-5" onClick={handleSubmit} disabled={state.loading} type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfileForm;
