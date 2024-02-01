/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const SecurityIssues = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Security Issues: Be Aware and Stay Safe</Text>
            <Text style={styles.paragraph}>
                Your safety is our top priority, and we want to ensure that you are aware of potential security issues
                related to the thief detection system. By being informed and taking necessary precautions, you can
                maximize the effectiveness of the system and enhance overall security.
            </Text>
            <Text style={styles.subTitle}>1. Camera Placement</Text>
            <Text style={styles.paragraph}>
                Ensure that security cameras are strategically placed to cover vulnerable areas. Avoid blind spots
                that may provide opportunities for intruders to go undetected. Regularly check and adjust camera angles
                to maintain optimal coverage.
            </Text>
            <Text style={styles.subTitle}>2. System Maintenance</Text>
            <Text style={styles.paragraph}>
                Keep the thief detection system well-maintained by updating software regularly. Ensure that all
                components, including cameras and sensors, are in working order. Regularly check for firmware updates
                and apply them to enhance system security.
            </Text>
            <Text style={styles.subTitle}>3. Network Security</Text>
            <Text style={styles.paragraph}>
                Secure your network to prevent unauthorized access to the thief detection system. Use strong
                passwords for both the system and your Wi-Fi network. Enable encryption and change default login
                credentials to minimize the risk of security breaches.
            </Text>
            <Text style={styles.subTitle}>4. Privacy Considerations</Text>
            <Text style={styles.paragraph}>
                Be mindful of privacy concerns related to the thief detection system. Avoid placing cameras in
                private spaces, and inform individuals within the monitored area about the presence of surveillance
                devices to respect their privacy.
            </Text>
        </ScrollView>
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
        color:'#101720',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        color:'#101720',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 14,
        color:'#101720',
        marginBottom: 15,
    },
});

export default SecurityIssues;
