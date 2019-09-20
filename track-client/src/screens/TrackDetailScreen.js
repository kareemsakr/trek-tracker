import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline, Circle } from "react-native-maps";

export default function TrackDetailScreen({ navigation }) {
  const itemId = navigation.getParam("_id");
  const { state } = useContext(TrackContext);
  const track = state.find(i => i._id === itemId);
  return (
    <MapView
      style={styles.map}
      region={{
        ...track.locations[0].coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={track.locations.map(l => l.coords)}></Polyline>
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
