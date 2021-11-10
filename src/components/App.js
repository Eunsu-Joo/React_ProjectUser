import React, { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "pages/Home";
import UserDetail from "pages/UserDetail";
import Edit from "pages/Edit";
import { Route, Routes } from "react-router";
import { userApi } from "api";
import Footer from "./Footer";
import Modal from "./Modal";
function App() {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchUrl() {
    try {
      const { data } = await userApi.users();
      setData(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => fetchUrl(), []);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
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
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:id" element={<Edit data={data} />} />
          </Routes>
          <Footer />
          <Modal />
        </>
      )}
    </>
  );
}

export default App;
