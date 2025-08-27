import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/*
 * The onboarding screen welcomes the user to Highcoon Studio.  It
 * introduces the purpose of the app and guides the user into the
 * check‑in flow.  In a complete implementation this screen could
 * include multiple pages, animations and links to privacy policy and
 * consent forms.
 */

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Highcoon Studio</Text>
      <Text style={styles.subtitle}>
        Aprende sobre terpenos y mejora tu estilo de vida con juegos,
        arte, música y más.
      </Text>
      <Button
        title="Comenzar sesión"
        onPress={() => navigation.navigate('CheckIn')}
      />
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
    marginBottom: 20,
    color: '#555'
  }
});
