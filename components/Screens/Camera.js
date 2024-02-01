/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import VLCPlayer from 'react-native-vlc-media-player';

const Camera = () => {
  return (
    <View style={styles.container}>
      <VLCPlayer
        style={styles.player}
        source={{ uri: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov' }}
        autoplay={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300, // Set the height to the desired value
  },
  player: {
    flex: 1,
  },
});

export default Camera;
