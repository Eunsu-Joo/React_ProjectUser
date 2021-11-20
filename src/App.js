import React, { useEffect, useState } from "react";
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
import useFetch from "hooks/useAsync";
import { UserState } from "context/UserState";

function App() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

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
            <Route path="/signup" element={<Signup data={data} />} />
            <Route path="/edit/:id" element={<Edit data={data} onUpdate={()=> {
              alert('TODO: 개발 필요');
              // TODO: 개발 필요
            }}/>} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="albums/:id" element={<Albums />} />
          </Routes>
          <Footer />
        </>
      )}
      {error && <Error />}
      
    </UserState>

  );
}

export default App;
