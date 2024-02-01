/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { } from 'react-native';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreeen from '../Screens/HomeScreen';
import ProfilScreen from '../Screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fffafa"
            inactiveColor="#fffafa"
            barStyle={{ backgroundColor: '#101720' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreeen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color="#fffafa" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfilScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" color="#fffafa" size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
