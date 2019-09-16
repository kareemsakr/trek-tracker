import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/map";

export default function TrackCreateScreen() {
  const [error, setError] = useState(null);
  const [path, setPath] = useState([]);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          console.log(location);
          setPath([location]);
        }
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>{error}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
