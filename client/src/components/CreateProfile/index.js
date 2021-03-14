import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_PROFILE, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateProfile() {
    const puppyParent = useRef();
    const puppyName = useRef();
    // const puppyImage = useRef();
    const breed = useRef();
    const age = useRef();
    const bio = useRef();
    const [state, dispatch] = useStoreContext('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.savePost({
          puppyParent: puppyParent.current.value,
          puppyName: puppyName.current.value,
        //   puppyImage: puppyImage.current.value,
          breed: breed.current.value,
          age: age.current.value,
          bio: bio.current.value

        })
          .then(result => {
            dispatch({
              type: ADD_PROFILE,
              profile: result.data
            });
          })
          .catch(err => console.log(err));
    
          puppyParent.current.value = "";
          puppyName.current.value = "";
          breed.current.value = "";
          age.current.value = "";
          bio.current.value = ""
      };
    
      return (
        <div className="card">
            <h1>Create Profile</h1>
          <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
          </div>
          <form className="handle" onSubmit={handleSubmit}>
          <div className="content">
            <ul>
              <li>
              <input required ref={puppyParent} placeholder="Puppy Parent" />
              </li>
              <li>
              <input required ref={puppyName} placeholder="Puppy Name" />
              </li>
              <li>
              <input required ref={breed} placeholder="Breed" />
              </li>
              <li>
              <input required ref={age} placeholder="Age" />
              </li>
              <li>
              <input required ref={bio} placeholder="Bio" />
              </li>
            </ul>
            <button className="Button" disabled={state.loading} type="submit"> Save </button>
          </div>
          </form>
        </div>
      );
}

export default CreateProfile;