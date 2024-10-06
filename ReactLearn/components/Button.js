import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const ButtonApp = () => {
  const [pressedCount, setPressedCount] = useState(0);

  const handlePress = () => {
    setPressedCount(pressedCount + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times`
          : 'The button is not pressed yet'
        }
      </Text>
      <Button
        title="Press me"
        onPress={handlePress}
      />
    </View>
  );
}

export default ButtonApp;
