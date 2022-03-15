import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabsNavigator = () => (
  <BottomTab.Navigator initialRouteName={"Home"}>
    <BottomTab.Screen name="Home" />
    <BottomTab.Screen name="Groups" />
    <BottomTab.Screen name="Notifications" />
  </BottomTab.Navigator>
);

export default function HomeScreen(props) {
  return (
    <Drawer.Navigator
      screenOptions={{ gestureEnabled: false }}></Drawer.Navigator>
  );
}
