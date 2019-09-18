import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context } from "../context/LocationContext";

export default function TrackForm() {
  const {
    state: { isRecording, trackName, location },
    setTrackName,
    toggleRecording,
    saveTrack
  } = useContext(Context);
  console.log(location.length);

  let buttonTitle = isRecording ? "Stop" : "Start Recording";
  return (
    <>
      <Spacer>
        <Text>Track Name</Text>
        <Input value={trackName} onChangeText={setTrackName}></Input>
      </Spacer>
      <Spacer>
        <Button title={buttonTitle} onPress={toggleRecording} />
        <Spacer />

        {isRecording && location.length > 0 ? (
          <Button title="Save" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
}
