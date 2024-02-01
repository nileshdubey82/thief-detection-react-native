/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Switch, TouchableOpacity, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const image = require('./Images/dash-back.jpg');

const HomeScreen = () => {
  const [fireDetection, setFireDetection] = useState(false);
  const [securitySensors, setSecuritySensors] = useState(false);
  const [lights, setLights] = useState(false);
  const [weather, setWeather] = useState(null);
  const handleNotificationPress = () => {
    // Add logic for handling notification button press
    console.log('Notification button pressed');
  };
  useEffect(() => {
    // Fetch weather details when the component mounts
    fetchWeather();
  }, []);

  // this is for model view
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  const fetchWeather = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual API key
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=durg&appid=1e2cbfe9ebedae691cea33f59c789413'
      );
      const data = await response.json();

      // Assuming data.main.temp returns temperature in Kelvin
      const temperatureCelsius = Math.round(data.main.temp - 273.15);
      setWeather(`Weather: ${data.weather[0].description}, ${temperatureCelsius}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#101720" barStyle="light-content" />

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>SAFE WATCH</Text>
            <TouchableOpacity onPress={handleNotificationPress}>
              <Icon name="notifications" size={30} color="#fffafa" style={styles.notificationIcon} />
            </TouchableOpacity>
            {/* Add your app logo here */}

          </View>

          {weather && (
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherText}>{weather}</Text>
            </View>
          )}

          <Text style={styles.titleText}>Secure Your Home/Shop</Text>

          <View style={styles.switchContainer}>
            <Icon name="security" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />
            <Text style={styles.switchText1}>Activate Fire Detection</Text>
            <Switch
              value={fireDetection}
              onValueChange={() => setFireDetection(!fireDetection)}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={fireDetection ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 30 }}
            />
          </View>

          <View style={styles.switchRow}>
            <View style={styles.switchContainer1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="security" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />
                  <Switch
                    value={securitySensors}
                    onValueChange={() => setSecuritySensors(!securitySensors)}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={securitySensors ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 30 }}
                  />


                </View>
              </View>
              <Text style={styles.switchText}>Security Sensors</Text>
            </View>



            <View style={styles.switchContainer1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
                <Icon name="lightbulb" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />

                <Switch
                  value={lights}
                  onValueChange={() => setLights(!lights)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={lights ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 30 }}
                />
              </View>
              <Text style={styles.switchText}>Lights</Text>
            </View>
          </View>
          <View style={styles.switchRow}>
            <View style={styles.switchContainer1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="security" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />
                  <Switch
                    value={securitySensors}
                    onValueChange={() => setSecuritySensors(!securitySensors)}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={securitySensors ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 30 }}
                  />


                </View>
              </View>
              <Text style={styles.switchText}>Security Sensors</Text>
            </View>



            <View style={styles.switchContainer1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
                <Icon name="lightbulb" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />

                <Switch
                  value={lights}
                  onValueChange={() => setLights(!lights)}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={lights ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginLeft: 30 }}
                />
              </View>
              <Text style={styles.switchText}>Lights</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#101720',
  },
  overlay: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    // paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
    // backgroundColor:'#101720',
    paddingVertical: 15,
  },
  notificationIcon: {
    marginRight: 10,
  },
  weatherContainer: {
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherText: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  titleText: {
    color: '#fffafa',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    width: '90%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 80,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fffafa',
    padding: 19,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  switchContainer1: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fffafa',
    width: '48%', // Adjusted width for a slight gap between switches
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  switchText: {
    color: '#101720',
    fontSize: 18,
    // marginRight: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  switchText1: {
    color: '#101720',
    fontSize: 18,
    marginLeft: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },

});

export default HomeScreen;
