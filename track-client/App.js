import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen,
    Create: TrackCreateScreen,
    Tracks: createStackNavigator({
      TrackListScreen,
      TrackDetailScreen
    })
  })
});

SignupScreen.navigationOptions = {
  header: null
};

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
