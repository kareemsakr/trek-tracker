import React, { useState, useContext } from "react";
import { StyleSheet, View, Button as ReactButton } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/AuthContext";

export default function SignUp({ navigation }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const { state, signUp } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signUp({ email, password })} />

        <ReactButton title="Login" />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15
  }
});
