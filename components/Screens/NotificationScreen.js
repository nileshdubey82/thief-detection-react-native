/* eslint-disable prettier/prettier */
// NotificationScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notificationsData = [
  {
    id: '1',
    title: 'Security Alert',
    message: 'An unauthorized access attempt detected near your premises. Please review the security footage.',
  },
  {
    id: '2',
    title: 'Motion Detected',
    message: 'Motion has been detected in the restricted area. Verify the situation immediately.',
  },
  {
    id: '3',
    title: 'Suspicious Activity',
    message: 'Unusual behavior detected. Take necessary precautions and contact security personnel.',
  },
  // Add more notifications as needed
];


const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  notificationContainer: {
    backgroundColor: '#fffafa',
    borderRadius: 10, 
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101720',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 5,
  },
});

export default NotificationScreen;
