import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/authForm";

export default function Login({ navigation }) {
  const { state, signUp } = useContext(AuthContext);
  return (
    <AuthForm
      onSubmit={(email, password) => login({ email, password })}
      formTitle="Login"
      navigateTo="Signup"
      linkTitle="Sign Up Instead ?"
      errorMessage={state.errorMessage}
    />
  );
}

const styles = StyleSheet.create({
  container: {}
});
