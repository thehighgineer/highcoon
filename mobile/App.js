import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';

/*
 * Root component for the Highcoon Studio mobile app.  It sets up
 * React Navigation and provides a container for all screens.  The
 * StatusBar from Expo is included for consistent styling across
 * platforms.
 */

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AppNavigator />
    </NavigationContainer>
  );
}
