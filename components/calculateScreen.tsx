// components/CalculateScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RiskAssessmentForm from './RiskAssessmentForm';  // Import the form component

const CalculateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breast Cancer Risk Assessment</Text>
      <RiskAssessmentForm />  {/* Render the form to input data and calculate the risk */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CalculateScreen;
