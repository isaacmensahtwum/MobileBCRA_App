// ManualScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManualScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Manual</Text>
    <Text style={styles.content}>Here is the manual for using the Breast Cancer Risk App...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF96A7',
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
});

export default ManualScreen;
