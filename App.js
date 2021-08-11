import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { LogBox } from "react-native";

// screens
import HomeScreen from './app/screens/HomeScreen';
import HomeScreenSingle from './app/screens/HomeScreenSingle';
import NotificationsScreen from './app/screens/NotificationsScreen';

LogBox.ignoreAllLogs()

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="NotificationsScreen" >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenSingle" component={HomeScreenSingle} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

