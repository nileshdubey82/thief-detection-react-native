/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import Sound from 'react-native-sound';
import NotificationSounds, {
  playSampleSound,
  stopSampleSound,
} from 'react-native-notification-sounds';

const Alarm = () => {
  const [alarmSound, setAlarmSound] = useState(null);

  useEffect(() => {
    // Fetch notification sounds
    NotificationSounds.getNotifications().then(sounds => {
      console.log('Notification Sounds:', sounds);
    });

    // Optional: Play a sample sound to test
    playSampleSound();

    // Optional: Stop the sample sound after a delay (adjust as needed)
    setTimeout(() => {
      stopSampleSound();
    }, 3000);

    // Release the sound when the component unmounts
    return () => {
      if (alarmSound) {
        alarmSound.release();
        console.log('Sound released');
      }
    };
  }, []);

  const playAlarm = async () => {
    // Fetch a notification sound by name
    const soundName = 'notification.mp3'; // Change to the desired sound name
    const sound = new Sound(soundName, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound', error);
      } else {
        console.log('Sound loaded successfully');
        setAlarmSound(sound);

        // Play the loaded sound
        sound.play(success => {
          if (!success) {
            console.log('Sound playback failed');
          }
        });
      }
    });
  };

  return (
    <View>
      <Button title="Play Alarm" onPress={playAlarm} />
    </View>
  );
};

export default Alarm;
