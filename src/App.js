import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NewPage from "./Components/Newpage";
import Login from "./Components/Login";
import React, { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "LOGIN_USER":
      console.log(action.payload);
      return {
        ...state,
        user: [action.payload],
      };

    default:
      return state;
  }
};
const Inirial_State = {
  count: 0,
  user: "",
};

const store = createStore(reducer, Inirial_State);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NewPage />
        <Login />
      </Provider>
    </>
  );
};

export default App;
