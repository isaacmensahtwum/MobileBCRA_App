// App.tsx
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RiskAssessmentForm from './components/RiskAssessmentForm';  // Import the form component
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import breastCancerLogo from './assets/breast_cancer_logo.png'; // Correct path to your logo image


const Tab = createBottomTabNavigator(); // Create a Tab navigator

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        id={undefined}  // Explicitly set id to undefined
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide header for simplicity
          tabBarStyle: { backgroundColor: '#FF96A7' }, // Set pink color for the tab bar
          tabBarActiveTintColor: '#fff', // White color for active tab icons
          tabBarInactiveTintColor: '#292727ff', // Gray color for inactive tab icons
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} /> // Home icon
            ),
          }} 
        />
        <Tab.Screen 
          name="Calculate" 
          component={CalculateScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="calculator" size={size} color={color} /> // Calculator icon
            ),
          }} 
        />
        <Tab.Screen 
          name="Information" 
          component={InformationScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="info-circle" size={size} color={color} /> // Information icon
            ),
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="gear" size={size} color={color} /> // Gear icon for settings
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// HomeScreen Component
const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.header}>
      <Image source={breastCancerLogo} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to the Breast Cancer Risk Assessment</Text>
    </View>

    <Text style={styles.description}>
      This app provides breast cancer risk assessments using three different models:
      <Text style={styles.boldText}> {'\n• Gail Model'}</Text>
      <Text style={styles.boldText}> {'\n• Tyrer-Cuzick Model'}</Text> {' '}
      <Text style={styles.boldText}> {'\n• BOADICEA Model'}</Text> 
      {'\nEach model is designed to estimate the risk of developing breast cancer based on various factors, helping individuals and healthcare professionals assess risk and make informed decisions.'}
    </Text>

    <Text style={styles.description}>
      The <Text style={styles.boldText}>Gail Model (BCRAT)</Text> estimates the risk of developing invasive breast cancer 
      over the next five years. It uses factors such as age, family history of breast cancer, reproductive history, 
      and biopsy history. Widely used and has been proven effective in assessing the general population's risk of breast cancer.
    </Text>

    <Text style={styles.description}>
      The <Text style={styles.boldText}>Tyrer-Cuzick Model (IBIS tool)</Text> incorporates additional factors such as 
      breast density, hormone replacement therapy (HRT) use, and ovarian history. It provides a more comprehensive 
      risk estimate, especially for individuals who may be at higher genetic risk.
    </Text>

    <Text style={styles.description}>
      The <Text style={styles.boldText}>BOADICEA Model</Text> focuses on genetic risk and family history, including 
      both breast and ovarian cancer. This model calculates the likelihood of carrying genetic mutations such as BRCA1
       and BRCA2, which significantly impact the risk of developing breast cancer.
    </Text>

    <Text style={styles.description}>
      This app is designed to help individuals and healthcare professionals assess breast cancer risk and determine 
      appropriate next steps for screening and prevention. If you are not a healthcare professional, we encourage you 
      to discuss your results with your healthcare provider to better understand your personal risk of breast cancer.
    </Text>

    <Text style={styles.description}>
      Please note that this app is not intended for use by individuals under 18 years of age, those who have already 
      been diagnosed with invasive breast cancer, or those who have undergone a mastectomy.
    </Text>

    <Text style={styles.description}>
      To use the app, simply select <Text style={styles.boldText}>Calculate</Text> to select the model and input your 
      information and estimate your breast cancer risk using one of the available models. This app serves as a tool 
      for risk assessment and should be used in consultation with healthcare professionals to make informed decisions about your health.
    </Text>
  </ScrollView>
);

// Calculate Screen Component
const CalculateScreen = () => (
  <View style={styles.scrollViewContainer}>
    <View style={styles.header}>
      <Image source={breastCancerLogo} style={styles.logo} />
      <Text style={styles.welcomeText}>Breast Cancer Risk Assessment</Text>
    </View>
    <RiskAssessmentForm />  {/* Render the form to input data and calculate the risk */}
  </View>
);

// Information Screen Component
const InformationScreen = () => (
  <View style={styles.scrollViewContainer}>
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Information</Text>
    </View>
    <Text style={styles.description}>Here you can learn more about breast cancer and the importance of early detection.</Text>
  </View>
);

// Settings Screen Component
const SettingsScreen = () => (
  <View style={styles.scrollViewContainer}>
    <View style={styles.header}>
      <Text style={styles.welcomeText}>Settings</Text>
    </View>
    <Text style={styles.description}>Adjust your app preferences here.</Text>
  </View>
);

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 3,
    backgroundColor: '#130c0cff',
  },
  header: {
    backgroundColor: '#FF96A7',  // Pink background
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,  // Curved top left corner
    borderTopRightRadius: 30,  // Curved top right corner
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Align logo and text horizontally
  },
  logo: {
    width: 40,  // Adjust logo size
    height: 60, // Adjust logo size
    marginRight: -30,  // Space between logo and text
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffffff',  // White color for the text
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#ffffffff',
    marginTop: 20,
    lineHeight: 22,  // Adjust line height for better readability
  },
  boldText: {
    fontWeight: 'bold',  // Bold text for model names
  },
});
