import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_PROFILE, UPDATE_PROFILES, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function MatchesList() {
  const [state, dispatch] = useStoreContext();

  const removeProfile = id => {
    API.deleteProfiles(id)
      .then(() => {
        dispatch({
          type: REMOVE_PROFILE,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getProfiles = () => {
    dispatch({ type: LOADING });
    API.getProfiles()
      .then(results => {
        dispatch({
          type: UPDATE_PROFILES,
          profiles: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="object-contain md:container  bg-white px-2 mx-10 rounded-md   flex justify-center ">
      
    <div className="overflow-auto max-w-md w-full sm:px-auto px-4 py-10">
      
      <h1>All Profiles</h1>
      <h3 className="mb-5 mt-5">Click on a profile to view</h3>
      {state.profiles.length ? (
        <List>
          {state.profiles.map(profile => (
            <ListItem key={profile._id}>
              <Link to={"/posts/:id" + profile._id}>
                <strong>
                  {profile.puppyParent} with {profile.puppyName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeProfile(profile._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added a profile yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
    </div>
  );
}

export default MatchesList;
