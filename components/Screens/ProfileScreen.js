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
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleNotificationPress}>
              <Icon name="notifications" size={30} color="#fffafa" style={styles.notificationIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.appName}>MY PROFILE</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#fffafa', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          width: '85%',
          height: 200,
          backgroundColor: '#fffafa',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          top: -80,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 5,
        }} >

          <Image
            style={styles.ProfileImage}
            source={require('./Images/profilePick.jpg')}
          />
          <Text style={{ color: '#101720', fontSize: 20 }}>SafeWatch{'\n'}</Text>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => {
              alert('Edit option is pending');
            }} style={{ flexDirection: 'row', backgroundColor: '#101720', alignItems: 'center', padding: 8, borderRadius: 10 }}>
              <Icon name="edit" size={30} color="#f2f2f2" style={styles.notificationIcon} /><Text style={{ fontSize: 16, color: '#f2f2f2' }}>Edit.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate('LoginScreen');
            }} style={{ flexDirection: 'row', backgroundColor: '#101720', alignItems: 'center', padding: 8, borderRadius: 10 }}>
              <Icon name="logout" size={30} color="#f2f2f2" style={styles.notificationIcon} /><Text style={{ fontSize: 16, color: '#f2f2f2' }}>LogOut.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.BoxContainer}>
          <View style={styles.BoxContainerTitle}>
            <Icon name="map" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />
            <Text style={styles.switchText1}>Address</Text>
          </View>
          <Text style={styles.switchText1}>RISHAB PRIME CITY Lblock L202 {'\n'}
            DURG C.G </Text>
        </View>
        <View style={styles.BoxContainer2}>
          <View style={styles.BoxContainerTitle}>
            <Icon name="phone" size={30} color="#101720" style={{ backgroundColor: '#f2f2f2', padding: 5, borderRadius: 10 }} />
            <Text style={styles.switchText1}>Contact Details</Text>
          </View>
          <Text style={styles.switchText1}>Phone: 9632587410 {'\n'}</Text>
          <Text style={styles.switchText1}>Email: useremailid@gmail.com{'\n'}</Text>
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
  BoxContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fffafa',
    marginBottom: 19,
    borderRadius: 10,
    justifyContent: 'flex-start',

  },
  BoxContainer: {
    alignItems: 'left',
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
    marginTop: -60,
  },
  BoxContainer2: {
    alignItems: 'left',
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
    marginTop: 10,
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
  },
  switchText1: {
    color: '#101720',
    fontSize: 18,
    marginLeft: 10,
    textTransform: 'capitalize',
    overflowWrap: 'break-word', // Use overflowWrap to break words
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
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
  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default HomeScreen;
