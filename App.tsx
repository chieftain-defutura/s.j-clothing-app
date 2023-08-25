import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Post from "./src/pages/BottomTabNavigationBar/Post";
import MidLevel from "./src/pages/BottomTabNavigationBar/MidLevel";
import Premium from "./src/pages/BottomTabNavigationBar/Premium";
import Account from "./src/pages/BottomTabNavigationBar/Account";

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#462D85" }}
    >
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="MidLevel" component={MidLevel} />
      <Tab.Screen name="Premium" component={Premium} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack"
        options={{ headerShown: true }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
