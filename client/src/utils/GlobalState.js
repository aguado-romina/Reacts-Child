import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PROFILE,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  ADD_PROFILE,
  ADD_MATCH,
  UPDATE_MATCHES,
  REMOVE_MATCH,
  LOADING 
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_PROFILE:
    return {
      ...state,
      currentProfile: action.profile,
      loading: false
    };

  case UPDATE_PROFILE:
    return {
      ...state,
      profiles: [...action.profile],
      loading: false
    };

  case ADD_PROFILE:
    return {
      ...state,
      profiles: [action.profile, ...state.profile],
      loading: false
    };

  case REMOVE_PROFILE:
    return {
      ...state,
      profiles: state.profiles.filter((profile) => {
        return profile._id !== action._id; 
      })
    };

  case ADD_MATCH:
    return {
      ...state,
      matches: [action.profile, ...state.matches],
      loading: false
    };

  case UPDATE_MATCHES:
    return {
      ...state,
      matches: [...state.matches],
      loading: false
    };

  case REMOVE_MATCH:
    return {
      ...state,
      matches: state.matches.filter((profile) => {
        return profile._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    profiles: [],
    currentProfile: {
      _id: 0,
      puppyParent: "",
      puppyName: "",
      breed: "",
      age: "",
      bio: "",
    },
    matches: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };