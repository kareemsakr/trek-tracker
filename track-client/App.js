import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./screens/AccountScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";
import TrackListScreen from "./screens/TrackListScreen";

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

export default createAppContainer(switchNavigator);
