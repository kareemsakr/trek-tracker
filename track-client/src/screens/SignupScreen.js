import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/authForm";

export default function SignUp({ navigation }) {
  const { state, signUp } = useContext(AuthContext);
  return (
    <AuthForm
      onSubmit={(email, password) => signUp({ email, password })}
      formTitle="Sign Up"
      navigateTo="Login"
      linkTitle="Login Instead ?"
      errorMessage={state.errorMessage}
    />
  );
}

const styles = StyleSheet.create({
  container: {}
});
