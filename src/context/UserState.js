import { useContext, useReducer } from "react";
import { UserContext, UserReducer } from "./UserContext";

export const useUser = () => {
  const { state, dispatch } = useContext(UserContext);
  return [state, dispatch];
};

export const UserState = ({ children }) => {
  const initialState = {
    data: {},
    isLoading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
