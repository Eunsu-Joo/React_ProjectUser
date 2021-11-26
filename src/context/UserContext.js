import { createContext } from "react";
const UsersContext = createContext(); // store
const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        data: action.data,
      };
    case "SET_USERS_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SET_USERS_LOADING":
      return {
        ...state,
        isLoading: action.loading,
      };
    default:
      return state;
  }
};
//dispatch
export { UsersContext, UserReducer };
