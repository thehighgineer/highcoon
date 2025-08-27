import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/*
 * The home screen is displayed after the check‑in.  In a full
 * implementation this screen would be populated with personalized
 * recommendations returned from the backend: a list of games to play,
 * art to color, stories to read, playlists to listen to and more.
 * For now it simply welcomes the user and invites them to explore.
 */

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido al universo Highcoon!</Text>
      <Text style={styles.subtitle}>
        Selecciona un módulo para empezar a explorar. A continuación
        encontrarás un par de juegos web sencillos para aprender sobre terpenos.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Trippy Terpene Trails" onPress={() => navigation.navigate('MazeGame')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Memory de Terpenos" onPress={() => navigation.navigate('MemoryGame')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Dodge Bad Vibes" onPress={() => navigation.navigate('DBVGame')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555'
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 8
  }
});
