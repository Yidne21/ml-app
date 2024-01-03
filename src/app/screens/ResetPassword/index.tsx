import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';

function ResetPassword({ navigation }: RootStackScreenProps<'ResetPassword'>) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleResetPassword = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordMismatch(true);
      return;
    }

    // Implement your logic to reset the password
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/icon.png')} style={styles.appLogo} />
      <Text style={styles.logoText}>Medicin Locator</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />
        {passwordMismatch && (
          <Text style={styles.errorText}>Passwords do not match. Please try again.</Text>
        )}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ResetPassword;

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
    marginBottom: 30,
    color: theme.colors.primary[500],
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
    marginBottom: 20,
    fontSize: 16,
  },
  resetButton: {
    width: '80%',
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
