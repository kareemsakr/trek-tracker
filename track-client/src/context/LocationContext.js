import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      return {
        ...state,
        currentLocation: action.payload,
        location: [...state.location, action.payload],
        recording: true
      };
    case "stop_scrolling":
      if (state.isScrolling) {
        return { ...state, isScrolling: false };
      } else return state;
    case "start_scrolling":
      if (!state.isScrolling) {
        return { ...state, isScrolling: true };
      } else return state;
    case "set_track_name":
      return { ...state, trackName: action.payload };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => location => {
  dispatch({ type: "add_location", payload: location });
};

const startScrolling = dispatch => () => {
  dispatch({ type: "start_scrolling" });
};
const stopScrolling = dispatch => () => {
  dispatch({ type: "stop_scrolling" });
};

const setLocationName = dispatch => name => {
  dispatch({ type: "set_track_name", payload: name });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { startRecording, stopRecording, addLocation, startScrolling, stopScrolling },
  {
    recording: false,
    location: [],
    currentLocation: {},
    isScrolling: false,
    trackName: ""
  }
);
