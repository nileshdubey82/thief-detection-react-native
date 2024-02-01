/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import Torch from 'react-native-torch';

const FlashLight = () => {
  const [torchOn, setTorchOn] = useState(false);

  const toggleFlashlight = () => {
    if (torchOn) {
      Torch.switchState(false); // Turn off flashlight
    } else {
      Torch.switchState(true); // Turn on flashlight
    }
    setTorchOn(!torchOn); // Toggle torchOn state
  };

  return (
    <View>
      <Button
        title={torchOn ? 'Turn Off Flashlight' : 'Turn On Flashlight'}
        onPress={toggleFlashlight}
      />
    </View>
  );
};

// eslint-disable-next-line prettier/prettier
export default FlashLight;
