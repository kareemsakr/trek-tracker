import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  return state;
};

const signUp = dispatch => {
  return ({ email, password }) => {
    dispatch({ type: "signUp", payload: "" });
  };
};
const login = dispatch => {
  return ({ email, password }) => {
    dispatch({ type: "signUp", payload: "" });
  };
};

const signOut = dispatch => {
  return () => {
    dispatch({ type: "signOut", payload: "" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signUp, login },
  { isSignedIn: false }
);
