import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';

function ForgetPassword({ navigation, route }: RootStackScreenProps<'ForgotPassword'>) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Implement your logic to send a reset password code
    navigation.navigate('VerifyOtp', { prevRoute: route.name });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/icon.png')} style={styles.appLogo} />
      <Text style={styles.logoText}>Medicin Locator</Text>
      <Text style={styles.descriptionText}>
        Please enter your phone number{'\n'} to reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  appLogo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.primary[600],
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: theme.colors.text,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: theme.colors.primary[500],
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  continueButton: {
    width: '80%',
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
