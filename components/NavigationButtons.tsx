// components/NavigationButtons.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const NavigationButtons = () => {
  const navigation = useNavigation<NavigationProp>();  // Use the correct type here

  return (
    <View style={styles.buttonContainer}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
      <Button title="Graph" onPress={() => navigation.navigate('Graph')} />
      <Button title="Information" onPress={() => navigation.navigate('Information')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },
});

export default NavigationButtons;

