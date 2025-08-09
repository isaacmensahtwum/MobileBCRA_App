
// components/RiskAssessmentForm.tsx
import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';

const RiskAssessmentForm = () => {
  const [age, setAge] = useState('');
  const [biopsies, setBiopsies] = useState('');
  const [hyperplasia, setHyperplasia] = useState('');
  const [menarche, setMenarche] = useState('');
  const [firstBirth, setFirstBirth] = useState('');
  const [relatives, setRelatives] = useState('');
  const [race, setRace] = useState('');
  const [risk, setRisk] = useState<number | null>(null);

  const handleSubmit = () => {
    // Basic simulated risk calculation logic
    const calculatedRisk =
      (parseInt(age) + parseInt(biopsies) + parseInt(hyperplasia) + parseInt(menarche)) / 100;
    setRisk(calculatedRisk);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Select Model: eg. Gail Model"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Number of Biopsies"
        style={styles.input}
        value={biopsies}
        onChangeText={setBiopsies}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Hyperplasia (1 for Yes, 0 for No)"
        style={styles.input}
        value={hyperplasia}
        onChangeText={setHyperplasia}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Age at Menarche"
        style={styles.input}
        value={menarche}
        onChangeText={setMenarche}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Age at First Live Birth"
        style={styles.input}
        value={firstBirth}
        onChangeText={setFirstBirth}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="First Degree Relatives with Breast Cancer"
        style={styles.input}
        value={relatives}
        onChangeText={setRelatives}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Race"
        style={styles.input}
        value={race}
        onChangeText={setRace}
      />
      <Button title="Calculate Risk" onPress={handleSubmit} />
      {risk !== null && (
        <Text style={styles.result}>Calculated Breast Cancer Risk: {risk.toFixed(2)}%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default RiskAssessmentForm;
