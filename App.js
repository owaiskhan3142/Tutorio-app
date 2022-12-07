import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import LoginScreen from "./src/screens/Login/Login";

export default function App() {
  return (
      <LoginScreen />
      // <AppContainer />
  );
}
