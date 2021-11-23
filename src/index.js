import UsersState from "context/UserState";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <UsersState>
      <App />
    </UsersState>
  </BrowserRouter>,
  document.getElementById("root")
);
