import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context } from "../context/LocationContext";

export default function TrackForm() {
  const { state, setTrackName } = useContext(Context);
  return (
    <>
      <Spacer>
        <Text>Track Name</Text>
        <Input value={state.trackName} onChangeText={setTrackName}></Input>
      </Spacer>
      <Button />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
