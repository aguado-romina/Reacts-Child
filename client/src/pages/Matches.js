// users can view their matches 

// message their matches from this page
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_PROFILE, ADD_MATCH, REMOVE_MATCH } from "../utils/actions";
import fakePuppy from "../puppy.json";

const Matches = () => {
    const [state, dispatch] = useStoreContext();
  
    useEffect(() => {
      API.getProfile(props.match.params.id)
        .then(res => dispatch({ type: SET_CURRENT_PROFILE, profile: res.data }))
        .catch(err => console.log(err));
    }, []);
  
    const addMatch = () => {
      dispatch({
        type: ADD_MATCH,
        profile: state.currentProfile
      });
    };
  
    const removeMatch = () => {
      dispatch({
        type: REMOVE_MATCH,
        _id: state.currentProfile._id
      });
    };
  
  
  
    return (
      <>
        <h1>Profile signOut</h1>
        <button onClick={() => AuthApp.auth().signOut()}>Sign out</button>
      </>
    );
  };
  
  export default Matches;