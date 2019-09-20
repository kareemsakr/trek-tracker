import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/trackForm";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { isRecording },
    addLocation
  } = useContext(LocationContext);
  const [error] = useLocation(addLocation, isFocused || isRecording);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <KeyboardAvoidingView behavior="position" enabled>
        <Text h2>Create a Track</Text>
        <Map />
        {error ? <Text>{error}</Text> : null}
        <TrackForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withNavigationFocus(TrackCreateScreen);
