/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Guidelines = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guidelines for Proper Use</Text>
            <Text style={styles.paragraph}>
                To ensure the effective and safe use of our system, please adhere to the following guidelines:
            </Text>
            <Text style={styles.subTitle}>1. System Activation</Text>
            <Text style={styles.paragraph}>
                Activate the thief detection system during periods of absence or when your property is unattended.
                This ensures continuous monitoring and immediate response to any suspicious activities.
            </Text>
            <Text style={styles.subTitle}>2. Notification Settings</Text>
            <Text style={styles.paragraph}>
                Customize your notification settings to receive alerts promptly. Ensure that your contact information
                is up-to-date to guarantee timely communication in case of security incidents.
            </Text>
            <Text style={styles.subTitle}>3. Regular Testing</Text>
            <Text style={styles.paragraph}>
                Periodically test the system to ensure all components, including cameras and sensors, are functioning
                correctly. This proactive approach helps identify and address any issues before they become critical.
            </Text>
            <Text style={styles.subTitle}>4. Privacy Awareness</Text>
            <Text style={styles.paragraph}>
                Respect privacy considerations by avoiding the placement of cameras in sensitive or private areas.
                Inform individuals within the monitored space about the presence of surveillance devices to maintain
                ethical use.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#101720',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        color: '#101720',
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 15,
        color: '#101720',
    },
});

export default Guidelines;
