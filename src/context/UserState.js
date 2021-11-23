import { useReducer } from "react";
import { UsersContext, UserReducer } from "./UserContext";

const UsersState = ({ children }) => {
  const initialState = {
    data: {},
    isLoading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UsersContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
