import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_location":
      //console.log(state);
      if (state.isRecording) {
        return {
          ...state,
          currentLocation: action.payload,
          location: [...state.location, action.payload]
        };
      } else {
        return {
          ...state,
          currentLocation: action.payload
        };
      }

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
    case "toggle_recording":
      return { ...state, isRecording: !state.isRecording };
    default:
      return state;
  }
};

const toggleRecording = dispatch => () => {
  dispatch({ type: "toggle_recording" });
};

const addLocation = dispatch => location => {
  dispatch({ type: "add_location", payload: location });
};

const startScrolling = dispatch => () => {
  dispatch({ type: "start_scrolling" });
};
const stopScrolling = dispatch => () => {
  dispatch({ type: "stop_scrolling" });
};

const setTrackName = dispatch => name => {
  dispatch({ type: "set_track_name", payload: name });
};

const saveTrack = dispatch => name => {
  //call API

  //stop recording
  dispatch({ type: "save_track" });

  //navigate to tracks list(try to load tracks from the back end again)
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    toggleRecording,
    addLocation,
    startScrolling,
    stopScrolling,
    setTrackName
  },
  {
    isRecording: false,
    location: [],
    currentLocation: {},
    isScrolling: false,
    trackName: ""
  }
);
