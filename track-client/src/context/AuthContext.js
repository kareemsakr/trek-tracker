import React from "react";
import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
const reducer = (state, action) => {
  switch (action.type) {
    case "signOut":
      return { token: null, errorMessage: "" };
    case "serverError":
    case "signUpError":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload.token, errorMessage: "" };
    case "clearErrorMessage":
      return { ...state, errorMessage: "" };
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
      console.log(error.message);
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
      const { user, token } = data;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "login", payload: { user, token } });
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

const localSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token", token);

  if (token) {
    dispatch({ type: "login", payload: { token } });
    navigate("TrackListScreen");
  } else {
    navigate("LoginFlow");
  }
};

const clearErrorMessage = dispatch => {
  return () => dispatch({ type: "clearErrorMessage" });
};
const signOut = dispatch => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signOut", payload: "" });
    navigate("LoginFlow");
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signUp, login, clearErrorMessage, localSignIn, signOut },
  { token: null, errorMessage: "" }
);
