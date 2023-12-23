import React from 'react';
import { Text, View, Button } from 'react-native';
import { RootStackScreenProps } from '../../navigation/types';

function WalkThroughScreen({ navigation }: RootStackScreenProps<'WalkThrough'>) {
  return (
    <View>
      <Text>WalkThrough screen</Text>
      <Button title="skip" onPress={() => navigation.navigate('RootTab')}></Button>
    </View>
  );
}

export default WalkThroughScreen;
