import { useReducer } from "react";
import { UsersContext, UserReducer, PersonContext } from "./UserContext";

export const UsersState = ({ children }) => {
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
export const PersonState = ({ children }) => {
  const initialState = {
    data: {},
    isLoading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <PersonContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </PersonContext.Provider>
  );
};
