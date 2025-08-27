import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

/*
 * The check‑in screen collects basic information about the user’s
 * current session: what strain they consumed (optional), how they
 * feel and how they want to feel.  In a full app this form would
 * include pickers or chips for predefined options and additional
 * fields for consumption details.  Upon submission the data would
 * be sent to the backend and the user would be directed to a
 * personalized home page.
 */

export default function CheckIn({ navigation }) {
  const [strain, setStrain] = useState('');
  const [state, setState] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = () => {
    if (!state || !goal) {
      Alert.alert('Completa los campos', 'Por favor, indica cómo te sientes y cómo quieres sentirte.');
      return;
    }
    // TODO: Send data to the backend.  For now we navigate directly.
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de sesión</Text>
      <Text style={styles.label}>Cepa consumida (opcional)</Text>
      <TextInput
        placeholder="Blue Dream, Sour Diesel, OG Kush..."
        value={strain}
        onChangeText={setStrain}
        style={styles.input}
      />
      <Text style={styles.label}>¿Cómo te sientes ahora?</Text>
      <TextInput
        placeholder="ansioso, tenso, creativo..."
        value={state}
        onChangeText={setState}
        style={styles.input}
      />
      <Text style={styles.label}>¿Cómo quieres sentirte?</Text>
      <TextInput
        placeholder="calmado, enfocado, creativo..."
        value={goal}
        onChangeText={setGoal}
        style={styles.input}
      />
      <Button title="Continuar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  }
});
