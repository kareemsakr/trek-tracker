import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";

export default function TrackCreateScreen() {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
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
