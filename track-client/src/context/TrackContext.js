import React from "react";
import createDataContext from "./createDataContext";
import trackAPI from "../api/tracker";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_tracks":
      return [...action.payload];
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackAPI.get("/tracks");
  dispatch({ type: "add_tracks", payload: response.data });
};

const saveTrack = dispatch => async (name, locations) => {
  await trackAPI.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchTracks,
    saveTrack
  },
  []
);
