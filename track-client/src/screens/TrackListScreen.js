import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";

export default function TrackListScreen({ navigation }) {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetailScreen", { _id: item._id })
              }
            >
              <ListItem title={item.name} bottomDivider chevron />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

TrackListScreen.navigationOptions = {
  title: "My Tracks"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
