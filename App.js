/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { default as theme } from "./src/theme/custom-theme.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import HomeScreen from "./src/screens/HomeScreen";

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

const Auth = createStackNavigator();

const App = createStackNavigator();

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <Auth.Navigator headerMode="none">
          <Auth.Screen name="SignIn" component={SignInScreen} />
          <Auth.Screen name="SignUp" component={SignUpScreen} />
        </Auth.Navigator>

        <App.Navigator headerMode="none">
          <App.Screen name="Feed" component={HomeScreen} />
        </App.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
