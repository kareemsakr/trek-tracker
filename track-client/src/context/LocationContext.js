import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, location: [], currentLocation: {} }
);
