import axios from "axios";

export const getUsers = async (dispatch) => {
  // do fetch
  await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      const result = res.data;
      // set user info
      dispatch({
        type: "SET_USERS",
        data: result,
      });
    })
    .then(() =>
      dispatch({
        type: "SET_USERS_LOADING",
        loading: false,
      })
    )
    .catch((error) => {
      const result = error;
      // set error if has any
      dispatch({
        type: "SET_USERS_ERROR",
        error: result,
      });
    });
};
