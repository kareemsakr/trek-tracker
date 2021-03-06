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
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";

import { setNavigator } from "./src/navigationRef";

const TracksNavigation = createStackNavigator({
  TrackListScreen,
  TrackDetailScreen
});

TracksNavigation.navigationOptions = {
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen,
  LoginFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    Tracks: TracksNavigation,
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={navigator => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
