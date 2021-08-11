import React from 'react';
import { View, LogBox } from 'react-native';

// screens
import HomeScreen from './app/screens/HomeScreen';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    < >
      <HomeScreen />
    </>
  );
}

