import React from "react";
import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
const reducer = (state, action) => {
  switch (action.type) {
    case "serverError":
    case "signUpError":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload.token, errorMessage: "" };

    default:
      return state;
  }
};

const signUp = dispatch => {
  return async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post("/signup", {
        email,
        password
      });
      const { user, token } = data;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "signUp", payload: { user, token } });
      navigate("TrackListScreen");
    } catch (error) {
      if (error.response.status === 500) {
        dispatch({ type: "serverError", payload: "Something went wrong" });
      } else {
        dispatch({ type: "signUpError", payload: error.response.data });
      }
    }
  };
};
const login = dispatch => {
  return async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post("/login", { email, password });
      console.log(data);
      const { user, token } = data;
      dispatch({ type: "login", payload: { user, token } });
    } catch (error) {}
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
  { token: null, errorMessage: "" }
);
