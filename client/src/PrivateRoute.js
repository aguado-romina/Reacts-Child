import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children, path }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <>
    <Route
      
        { ...!!currentUser ? (
          <Route path={path}>{children}</Route>
        ) : ( 
          <Redirect to="/login" /> 
        )}
    />
</>
  );
};
// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// import AuthContext from '../context/AuthContext';

// const PrivateRoute = ({ children, path }) => {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <>
//       {currentUser.isLoggedIn ? (
//         <Route path={path}>{children}</Route>
//       ) : (
//         <Redirect to="/" />
//       )}
//     </>
//   );
// };


export default PrivateRoute;