import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';

function VerifyOtp({ navigation, route }: RootStackScreenProps<'VerifyOtp'>) {
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);
  const handleResendCode = () => {
    // Implement logic to resend verification code
    console.log('Resend Code pressed');
    setCountdown(60); // Reset countdown on resend
  };

  const handleSubmitCode = () => {
    // Implement your logic to verify the entered code
    if (route.params?.prevRoute === 'SignUp') {
      navigation.navigate('SuccessScreen', {
        title: 'Account Created Successfully!',
        message: 'Your account has been created successfully!',
      });
    } else if (route.params?.prevRoute === 'ForgotPassword') {
      navigation.navigate('SuccessScreen', {
        title: 'Password Reseted Successfully!',
        message: 'Your password has been reset successfully!',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter The Verify Code</Text>
      <Text style={styles.description}>
        {/* We just sent you a 6-digit verification code via the {route.params.phoneNumber} */}
        We just sent you a 6-digit verification code via the{'\n'} phone number
      </Text>

      <View style={styles.codeInputContainer}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={verificationCode[index - 1]}
            onChangeText={(text) => {
              const updatedCode = verificationCode.split('');
              updatedCode[index - 1] = text;
              setVerificationCode(updatedCode.join(''));
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitCode}>
        <Text style={styles.buttonText}>Submit Code</Text>
      </TouchableOpacity>

      <Text style={styles.countdownText}>The verification code will expire in {countdown} sec</Text>

      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.primary[600],
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.text,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    height: 50,
    width: 40,
    borderColor: theme.colors.primary[500],
    borderBottomWidth: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 24,
  },
  submitButton: {
    width: '80%',
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countdownText: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 10,
  },
  resendButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  resendButtonText: {
    color: theme.colors.primary[500],
    fontSize: 16,
  },
});
