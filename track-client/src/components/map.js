import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export default function Map() {
  const { state, startScrolling, stopScrolling } = useContext(LocationContext);

  if (!state.currentLocation.coords) {
    return (
      <ActivityIndicator
        size="large"
        style={{ marginTop: 200 }}
      ></ActivityIndicator>
    );
  }
  return (
    <MapView
      style={styles.map}
      // initialRegion={{
      //   ...state.currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01
      // }}
      region={
        state.isScrolling
          ? null
          : {
              ...state.currentLocation.coords,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }
      }
      onRegionChange={startScrolling}
      onRegionChangeComplete={stopScrolling}
    >
      <Circle
        radius={30}
        center={state.currentLocation.coords}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      ></Circle>
      {/* <Polyline coordinates={path}></Polyline> */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 350
  }
});
