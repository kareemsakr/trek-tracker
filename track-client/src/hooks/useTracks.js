import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { trackName, location },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(trackName, location);
    reset();
    navigate("TrackListScreen");
  };

  return [saveTrack];
};
