import React from 'react';
import { Text, Container, Button } from '../components/Basic';
import { theme } from '../../utils/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

function SplashScreen({ navigation }) {
  return (
    <Container>
      <Text bg={theme.colors.primary[100]} fontFamily={theme.fonts['RobotoBlack']}>
        Splash Screen
      </Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Button onPress={() => navigation.navigate('WalkThrough')}>
        <Text>Go to Home</Text>
      </Button>
    </Container>
  );
}

export default SplashScreen;
