import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { LogBox } from "react-native";
// screens
import HomeScreen from './app/screens/HomeScreen';
import HomeScreenSingle from './app/screens/HomeScreenSingle';

LogBox.ignoreAllLogs()

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen" >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenSingle" component={HomeScreenSingle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

