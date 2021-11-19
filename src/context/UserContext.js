const { createContext } = require("react");

const UserContext = createContext();

const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        data: action.data,
      };
    case "SET_USER_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "SET_USER_LOADING":
      return {
        ...state,
        isLoading: action.loading,
      };
    // case "SET_USERS":
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };
    // case "SET_USERS_ERROR":
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    // case "SET_USERS_LOADING":
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    default:
      return state;
  }
};

export { UserContext, UserReducer };
