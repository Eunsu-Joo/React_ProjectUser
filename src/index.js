import { UserState } from "context/UserState";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <BrowserRouter>
  <UserState>
    <App />
    </UserState>
  </BrowserRouter>,
  document.getElementById("root")
);
