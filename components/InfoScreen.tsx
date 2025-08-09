import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InformationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Information</Text>

      <Text style={styles.description}>
        Here you can access important information regarding the Breast Cancer Risk App, including the manual, risk level definitions, resources, and privacy policy.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Manual" onPress={() => navigation.navigate('Manual')} />
        <Button title="Risk Level Definitions" onPress={() => navigation.navigate('RiskLevelDefinitions')} />
        <Button title="Resources" onPress={() => navigation.navigate('Resources')} />
        <Button title="Privacy Policy" onPress={() => navigation.navigate('PrivacyPolicy')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',  // White color for the text
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
});

export default InformationScreen;
