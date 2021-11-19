import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "pages/Home";
import UserDetail from "pages/UserDetail";
import Edit from "pages/Edit";
import Todos from "pages/Todos";
import Posts from "pages/Posts";
import Albums from "pages/Albums";
import Footer from "./Footer";
import Loading from "./Loading";
import Error from "./Error";
import useFetch from "hooks/useAsync";
import { UserState } from "context/UserState";
function App() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data, isLoading, error);
  return (
    <UserState>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <GlobalStyles />
          <Header data={data} />
          <Routes>
            <Route path="/" exact element={<Home data={data} />} />
            <Route path="user/:id" element={<UserDetail />} />
            <Route path="/edit" element={<Edit data={data} />} />
            <Route path="/edit/:id" element={<Edit data={data} />} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="albums/:id" element={<Albums />} />
          </Routes>
          <Footer />
        </>
      )}
    </UserState>
  );
}

export default App;
