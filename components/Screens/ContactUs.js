/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const ContactUs = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./Images/thiefLogo.png')} style={styles.image} />
            <Text style={styles.title}>Contact Us</Text> 
            <Text style={styles.description}>
                Have questions, concerns, or feedback? We'd love to hear from you!
            </Text>
            <View style={styles.contactDetails}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>contact@example.com</Text>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>9632587410</Text>
            </View>
            <TouchableOpacity style={styles.contactButton} onPress={() => alert('Contact button pressed')}>
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#101720',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#101720',
    },
    contactDetails: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#101720',
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
        color: '#101720',
    },
    contactButton: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#101720',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ContactUs;
