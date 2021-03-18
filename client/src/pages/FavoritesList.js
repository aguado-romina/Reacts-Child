import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_MATCH, LOADING, UPDATE_MATCHES } from "../utils/actions";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_MATCHES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_MATCH,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorites</h1>
      {state.matches.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a profile to view in detail</h3>
          {state.matches.map(profile => (
            <ListItem key={profile._id}>
              <Link to={"/profiles/" + profile._id}>
                <strong>
                  {profile.puppyParent} with {profile.puppyName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(profile._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
