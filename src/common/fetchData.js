const { getPerson } = require("context/UserAction");
const { PersonContext } = require("context/UserContext");
const { useContext } = require("react");
const { useParams } = require("react-router");
const { useEffect } = require("react/cjs/react.development");

export const FetchData = () => {
  const { id } = useParams();
  console.log(id);
  //   const { state, dispatch } = useContext(PersonContext);
  //   useEffect(() => {
  //     const getPersonData = async () => {
  //       await getPerson(dispatch, id);
  //     };
  //     getPersonData();
  //   }, []);
};
