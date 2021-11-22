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
export const getPerson = async (dispatch, id) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      const result = res.data;
      // set user info
      dispatch({
        type: "SET_PERSON",
        data: result,
      });
    })
    .then(() =>
      dispatch({
        type: "SET_PERSON_LOADING",
        loading: false,
      })
    )
    .catch((error) => {
      const result = error;
      // set error if has any
      dispatch({
        type: "SET_PERSON_ERROR",
        error: result,
      });
    });
};
