import React from 'react';
import { Text, View, Button } from 'react-native';

function WalkThroughScreen({ navigation }) {
  return (
    <View>
      <Text>WalkThrough screen</Text>
      <Button title="skip" onPress={() => navigation.navigate('RootTap')}></Button>
    </View>
  );
}

export default WalkThroughScreen;
