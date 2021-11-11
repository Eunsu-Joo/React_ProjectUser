import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { userApi } from "api";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "pages/Home";
import UserDetail from "pages/UserDetail";
import Edit from "pages/Edit";
import Todos from "pages/Todos";
import Posts from "pages/Posts";
import Footer from "./Footer";
import Loading from "./Loading";
import Error from "./Error";
import Modal from "./Modal";
function App() {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchUrl() {
    try {
      const { data } = await userApi.users();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
    }
  }
  useEffect(() => fetchUrl(), []);

  return (
    <>
      {isLoading ? (
        isError ? <Error /> : <Loading />
      ) : (
        <>
          <GlobalStyles />
          <Header data={data} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home data={data} isError={isError} />}
            />
            <Route path="user/:id" element={<UserDetail />} />
            <Route path="/edit" element={<Edit data={data} />} />
            <Route path="/edit/:id" element={<Edit data={data} />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="/posts/:id" element={<Posts />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
