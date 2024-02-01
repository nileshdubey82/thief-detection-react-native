/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import StackScreen from './components/Navigation/StackNavigation';
function App(): React.JSX.Element {
  return <StackScreen />;
}

export default App;
