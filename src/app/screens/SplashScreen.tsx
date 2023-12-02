import React from 'react';
import { Text, View, Button } from 'react-native';

function SplashScreen({ navigation }) {
  return (
    <View>
      <Text>Splash screen</Text>
      <Button title="Next" onPress={() => navigation.navigate('WalkThrough')}></Button>
    </View>
  );
}

export default SplashScreen;
