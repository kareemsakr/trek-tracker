import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h3>Sign Up</Text>
      <Spacer />
      <Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
      </Spacer>
      <Spacer />
      <Button title="Sign Up" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});
