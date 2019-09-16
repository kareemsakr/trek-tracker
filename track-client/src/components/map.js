import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function Map({ path }) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: -79.40597439999999,
        latitude: 43.6550106,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={path}></Polyline>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 350
  }
});
