import React, { useEffect } from "react";
// import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MATCHES } from "../../utils/actions";

const Hello = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    // dispatch({ type: LOADING });
    dispatch({ type: UPDATE_MATCHES });
  };

  useEffect(() => {
      getFavorites();
  }, []);


  return (
    <>
      {state.currentProfile ? (
              <h1>
               WELCOME {state.currentProfile.puppyParent} and {" "}
                {state.currentProfile.puppyName}
              </h1>
         
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Hello;