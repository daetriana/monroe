import React, { Component } from "react";
import { StyleSheet } from "react-native";
import getTheme from './native-base-theme/components';
import platform from "./native-base-theme/variables/platform";
import material from "./native-base-theme/variables/material";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/screens/login/login';
import HomeScreen from "./src/components/screens/Home/homeScreen";
import ForgotPassword from "./src/components/screens/login/resetpassword"
//import ProfileScreen from './src/components/screens/profileScreen';
//import TweetDetailsScreen from './src/components/screens/tweetDetails';
import { Root } from "native-base";
import { Provider } from "react-redux";
import store from './redux/store';
import "regenerator-runtime/runtime";
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }
console.disableYellowBox = true;
const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    FP : {screen :ForgotPassword }
  //  Profile: { screen: ProfileScreen },
  //  TweetDetails: { screen: TweetDetailsScreen }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
const  AppNav = createAppContainer(AppNavigator);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  render() {
      return (
        <Provider store={store}>
          <AppNav />
        </Provider>
      );
  }
}