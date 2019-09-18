import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/trackForm";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  //console.log(props);
  const {
    state: { isRecording },
    addLocation
  } = useContext(LocationContext);
  const [error] = useLocation(addLocation, isFocused || isRecording);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>{error}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withNavigationFocus(TrackCreateScreen);
