import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

export default function AccountScreen() {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Button title="Sign Out" onPress={signOut}></Button>
    </SafeAreaView>
  );
}

AccountScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

// AccountScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: <Button title="Sign Out" onPress={this.signOut}></Button>
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
