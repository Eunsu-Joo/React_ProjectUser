import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import GlobalStyles from "components/GlobalStyles";
import Header from "components/Header";
import Home from "pages/Home";
import UserDetail from "pages/UserDetail";
import Signup from "pages/Signup";
import Edit from "pages/Edit";
import Todos from "pages/Todos";
import Posts from "pages/Posts";
import Albums from "pages/Albums";
import Footer from "components/Footer";
import Loading from "components/Loading";
import Error from "components/Error";
import ScrollToTop from "common/ScrollToTop";
import { UsersContext } from "context/UserContext";
import { getUsers } from "context/UserAction";
function App() {
  const {
    state: { isLoading, error },
    dispatch,
  } = useContext(UsersContext);
  useEffect(() => {
    const getUsersInfo = async () => {
      await getUsers(dispatch);
    };
    getUsersInfo();
  }, []);

  return (
    <>
      {error && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollToTop />
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="user/:id" element={<UserDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="albums/:id" element={<Albums />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
