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
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    Tracks: createStackNavigator({
      TrackListScreen,
      TrackDetailScreen
    }),
    Account: AccountScreen,
    Create: TrackCreateScreen
  })
});

SignupScreen.navigationOptions = {
  header: null
};

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App ref={app => setNavigator(app)} />
    </AuthProvider>
  );
};
