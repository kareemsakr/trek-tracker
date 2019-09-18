import React from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};

const saveTrack = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchTracks,
    saveTrack
  },
  []
);
