/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import NotificationScreen from '../Screens/NotificationScreen';
import LoginScreen from '../Screens/LoginScreen';
import SecurityIssues from '../Screens/SecurityIssues';
import Reports from '../Screens/Reports';
import ContactUs from '../Screens/ContactUs';
import Guidlines from '../Screens/Guidlines';
import ProfileScreen from '../Screens/ProfileScreen';
import Camera from '../Screens/Camera';
import Alarm from '../Screens/Alarm';
import FlashLight from '../Screens/FlashLight';
const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Alarm"
          component={Alarm}
          options={{ title: 'Login Screen', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login Screen', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerShown: false }}
        />

        <Stack.Screen
          name="FlashLight"
          component={FlashLight}
          options={{ title: 'Login Screen', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerShown: false }}
        />

        <Stack.Screen
          name="BottomTab"
          component={BottomNavigation}
          options={({ navigation }) => ({
            title: 'Safe Watch',
            headerStyle: { backgroundColor: '#101720' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: null,
            headerShown: false,
          })}
        />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ title: 'Notification', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="ReportsScreen"
          component={Reports}
          options={{ title: 'Report', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="GuidlinesScreens"
          component={Guidlines}
          options={{ title: 'GuidLines', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ title: 'Contact Us', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="SecurityIssue"
          component={SecurityIssues}
          options={{ title: 'Security Issues', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="Profiles"
          component={ProfileScreen}
          options={{ title: 'Profile', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ title: 'Camera', headerStyle: { backgroundColor: '#101720' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }, headerLeft: null }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
