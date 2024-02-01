/* eslint-disable prettier/prettier */
// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader'; // Make sure to provide the correct path
import LottieView from 'lottie-react-native'; // Import LottieView
const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!userId || !password) {
      Alert.alert('Validation Error', 'Please enter both username and password');
      return;
    }

    setLoading(true);
    var APIURL = 'https://shakuattendance.000webhostapp.com/student/loginFetch.php';
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    var Data = {
      email: userId,
      mobile: password,
    };

    try {
      const response = await fetch(APIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
        cache: 'no-store',
      });

      // Log the response status
      console.log('Response Status:', response.status);

      // Parse the JSON response
      const responseData = await response.json();

      // Check if the response indicates success
      if (responseData.success) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem('usercardId', responseData.data.id);
        await AsyncStorage.setItem('userEmail', responseData.data.email);
        await AsyncStorage.setItem('userMobile', responseData.data.mobile);
        await AsyncStorage.setItem('userName', responseData.data.name);

        navigation.navigate('BottomNavigation');
      } else {
        console.error('Error:', responseData.message);
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
      }

      // Log the response text
      const responseText = await response.text();
      console.log('Response Text:', responseText);

      // Rest of your code...
    } catch (error) {
      console.error('ERROR FOUND', error);
      // Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.logoContainer}>
        {/* <Image
          source={require('./Images/LoginCartoon.png')} // Replace with your actual logo
          style={styles.logo}
        /> */}
        <LottieView
          source={require('../Screens/Images/login2.json')} // Replace with the path to your Lottie JSON file
          autoPlay
          loop
          style={{ width: '100%', height: 300, marginBottom: 20 }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>LOGIN</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#101720" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#101720"
            onChangeText={(e) => setUserId(e)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#101720" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor="#101720"
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <TouchableOpacity onPress={(props)=>{
          // handleLogin
          navigation.navigate('BottomTab');

        }} style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fffafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width: '80%',
    borderRadius: 20,
    position: 'relative',
    top: -93,
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#101720',
    borderBottomEndRadius: 90,
    borderBottomStartRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    position: 'relative',
    top: 34.5,
  },
  loginText: {
    fontSize: 40,
    marginBottom: 20,
    color: '#101720',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderStyle: 'solid',
    borderColor: '#101720',
    borderWidth: 1,
    shadowColor: '#101720',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#101720',
    shadowColor: '#000',
    padding: 10,
    width: 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fffafa',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
