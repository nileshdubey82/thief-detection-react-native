/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Reports = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thief Detection System Reports</Text>

            {/* Dummy Report Section */}
            <View style={styles.reportContainer}>
                <Text style={styles.reportTitle}>Incident Report - January 1, 2024</Text>
                <Text style={styles.reportText}>
                    On the specified date and time, the thief detection system detected suspicious activity near
                    the entrance. The cameras captured images of an individual attempting unauthorized access.
                    The system triggered alarms, and security protocols were initiated.
                </Text>
                <Text style={styles.reportText}>
                    Security personnel responded promptly, and the intruder was apprehended without further incident.
                    No damage or theft occurred, thanks to the efficiency of the thief detection system.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#101720',
        marginBottom: 20,
    },
    reportContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
    },
    reportTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101720',
        marginBottom: 10,
    },
    reportText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#101720',
    },
});

export default Reports;
