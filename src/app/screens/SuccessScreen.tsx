// screens/SuccessScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../utils/theme/theme';
import { RootStackScreenProps } from '../../navigation/types';

function SuccessScreen({ navigation, route }: RootStackScreenProps<'SuccessScreen'>) {
  const { title, message } = route.params;

  const handleContinue = () => {
    // Implement your logic for what happens when Continue is pressed
    console.log('Continue pressed');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/success.png')} style={styles.successImage} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.primary[500],
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.text,
  },
  continueButton: {
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
