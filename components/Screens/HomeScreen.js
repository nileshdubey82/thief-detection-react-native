/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ScrollView, Animated, Easing, StyleSheet, Text, View, Switch, TouchableOpacity, StatusBar, Modal, Button, Pressable, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const image = require('./Images/dash-back.jpg');

const PulsatingCircle = () => {
  const [scaleValue] = useState(new Animated.Value(1));

  useEffect(() => {
    function startAnimation() {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ])
      ).start();
    }

    startAnimation();
  }, [scaleValue]);

  return (
    <View style={{
      width: 200,
      height: 200,
      backgroundColor: '#fffafa',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      overflow: 'hidden',
      position: 'absolute',
      top: -80,
    }} >
      <Animated.View
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'rgba(0,0,1,0.1)',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          overflow: 'hidden',
          transform: [{ scale: scaleValue }],
        }}
      >
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#f5e3e6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            overflow: 'hidden',
            transform: [{ scale: scaleValue }],
          }}
        >
          <Animated.View
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#e84f55',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              overflow: 'hidden',
              transform: [{ scale: scaleValue }],
            }}
          >
            <Icon name="security" size={50} color="#fffafa" style={{ position: 'relative' }} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const HomeScreen = (props) => {
  const [fireDetection, setFireDetection] = useState(false);
  const [securitySensors, setSecuritySensors] = useState(false);
  const [lights, setLights] = useState(false);
  const [weather, setWeather] = useState(null);
  // this is for model view
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=durg&appid=1e2cbfe9ebedae691cea33f59c789413'
      );
      const data = await response.json();
      const temperatureCelsius = Math.round(data.main.temp - 273.15);
      setWeather(`Weather: ${data.weather[0].description}, ${temperatureCelsius}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  };

  const handleNotificationPress = () => {
    // console.log('Notification button pressed');
    setModalVisible(false);
    props.navigation.navigate('NotificationScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#101720" barStyle="light-content" />

      <View style={{ flex: 2, backgroundColor: '#101720', alignItems: 'center', height: 260 }}>
        <View style={styles.header}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>SAFE WATCH</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleNotificationPress}>
              <Icon name="notifications" size={30} color="#fffafa" style={styles.notificationIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}>
              <Icon name="menu" size={30} color="#fffafa" style={styles.notificationIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {weather && (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>{weather}</Text>
          </View>
        )}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* App Logo Section */}
            <View style={styles.logoSection}>
              <View>
                <Image
                  source={require('./Images/thiefLogo.png')} // Replace with the actual path to your image
                  style={styles.thiefLogo}
                />
                <Text style={styles.appName}>Safe Watch</Text>
              </View>
              {/* Your app logo here */}
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={30} color="#fffafa" style={{ backgroundColor: '#101720', padding: 5, borderRadius: 10 }} />
              </TouchableOpacity>
            </View>

            {/* Navigation Section */}
            <View style={styles.navigationSection}>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('Profiles');
              }}>
                <Icon name="person" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('SecurityIssue');
              }}>
                <Icon name="security" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Check Security Issues</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('ContactUs');
              }}>
                <Icon name="contact-phone" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('GuidlinesScreens');
              }}>
                <Icon name="lightbulb" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Show Guidelines</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('ReportsScreen');
              }}>
                <Icon name="leaderboard" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigationItem} onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('Camera');
              }}>
                <Icon name="videocam" size={30} color="#101720" style={{ padding: 5, borderRadius: 10 }} /><Text style={styles.navigationItemsText}>Camera</Text>
              </TouchableOpacity>
              {/* Add more navigation items as needed */}
            </View>

            {/* Close Button */}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LoginScreen');
              }} style={{ justifyContent: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#101720', width: 100, borderRadius: 10, padding: 0 }}>
              <Text style={{ color: '#fffafa', marginLeft: 10, fontSize: 16 }}>Log Out</Text>
              <Icon name="logout" size={30} color="#fffafa" style={{ padding: 5, borderRadius: 10 }} />
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
      <View style={{ flex: 2, backgroundColor: '#fffafa', justifyContent: 'center', alignItems: 'center' }}>
        <PulsatingCircle />

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
              <View style={{ flexDirection: 'row', alignItems: 'center' }} />
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
    paddingVertical: 15,
    position: 'relative',
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
    color: '#101720',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    width: '90%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 80,
    marginTop: 90,
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
    width: '48%',
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
  modalView: {
    backgroundColor: 'white',
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%',
    height: '100%',
  },
  logoSection: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#101720',
  },
  navigationSection: {
    marginBottom: 20,
  },
  navigationItem: {
    marginBottom: 15,
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationItemsText: {
    color: '#101720',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginLeft: 15,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    // marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  thiefLogo: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
