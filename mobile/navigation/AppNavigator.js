import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import CheckIn from '../screens/CheckIn';
import Home from '../screens/Home';
import GameWebView from '../screens/GameWebView';

/*
 * Defines the navigation stack for the Highcoon Studio mobile app.
 * The onboarding screen appears first, followed by the check‑in
 * screen and then the home screen.  The header is hidden for a
 * full‑screen experience.
 */

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="CheckIn" component={CheckIn} />
      <Stack.Screen name="Home" component={Home} />
      {/* Screens to load web‑based games.  Each passes the path to the local HTML file as a parameter. */}
      <Stack.Screen
        name="MazeGame"
        component={GameWebView}
        initialParams={{ uri: require('../../games/maze_game.html') }}
      />
      <Stack.Screen
        name="MemoryGame"
        component={GameWebView}
        initialParams={{ uri: require('../../games/memory_game.html') }}
      />
      <Stack.Screen
        name="DBVGame"
        component={GameWebView}
        initialParams={{ uri: require('../../games/dbv_decision.html') }}
      />
    </Stack.Navigator>
  );
}
