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
import ResolveAuthScreen from "./src/screens/resolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";

import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen,
  LoginFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    Tracks: createStackNavigator({
      TrackListScreen,
      TrackDetailScreen
    }),
    Create: TrackCreateScreen,
    Account: AccountScreen
  })
});

SignupScreen.navigationOptions = {
  header: null
};

LoginScreen.navigationOptions = {
  header: null
};

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={navigator => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  );
};
