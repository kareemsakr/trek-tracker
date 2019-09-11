import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  return state;
};

const signUp = dispatch => {
  return () => {
    dispatch({ type: "signUp", payload: "" });
  };
};
const login = dispatch => {
  return () => {
    dispatch({ type: "signUp", payload: "" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signUp, login },
  {}
);
