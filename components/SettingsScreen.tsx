// SettingsScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Import Picker for language selection
import Slider from '@react-native-community/slider';  // Import Slider from @react-native-community/slider
import { List } from 'react-native-paper';  // To make the UI components more stylish

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Language Selection */}
      <List.Section style={styles.settingSection}>
        <List.Subheader>Language</List.Subheader>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="German" value="de" />
        </Picker>
      </List.Section>

      {/* Dark Mode Toggle */}
      <List.Section style={styles.settingSection}>
        <List.Subheader>Dark Mode</List.Subheader>
        <View style={styles.toggleContainer}>
          <Text style={styles.optionText}>Off</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
          />
          <Text style={styles.optionText}>On</Text>
        </View>
      </List.Section>

      {/* Font Size Slider */}
      <List.Section style={styles.settingSection}>
        <List.Subheader>Font Size</List.Subheader>
        <View style={styles.sliderContainer}>
          <Text>Font Size: {fontSize}</Text>
          <Slider
            style={styles.slider}
            minimumValue={12}
            maximumValue={24}
            step={1}
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
          />
        </View>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingSection: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
  },
  sliderContainer: {
    marginTop: 10,
    alignItems: 'stretch',
  },
  slider: {
    width: '100%',
  },
});

export default SettingsScreen;
