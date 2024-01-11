import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useVerifyOtpScreenSlice } from './slice';
import Toast from 'react-native-root-toast';

function VerifyOtp({ navigation, route }: RootStackScreenProps<'VerifyOtp'>) {
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(60);

  const dispatch = useDispatch();
  const { actions } = useVerifyOtpScreenSlice();

  const { phoneNumber, prevRoute } = route.params;

  const isVerifying = useSelector(select.selectIsSendingOtp);
  const isVerified = useSelector(select.selectValidOtp);
  const errorMsg = useSelector(select.selectErrorMessage);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  useEffect(() => {
    if (isVerified === true) {
      if (prevRoute === 'SignUp') {
        navigation.navigate('SuccessScreen', {
          title: 'Account Created Successfully!',
          message: 'Your account has been created successfully!',
        });
      } else if (prevRoute === 'ForgotPassword') {
        navigation.navigate('ResetPassword', { phoneNumber });
      }
    }
  }, [isVerified, isVerifying, navigation, phoneNumber, prevRoute]);

  if (errorMsg !== '') {
    Toast.show('invalid code', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }

  const handleResendCode = () => {
    console.log('Resend Code pressed');
    setCountdown(60); // Reset countdown on resend
  };

  const handleSubmitCode = () => {
    dispatch(actions.verifyOtp({ code: verificationCode, phoneNumber }));
  };

  return (
    <KeyboardAvoidingView style={styles.rootContainer} behavior="padding">
      <Header showRightIcon={false} />
      <View style={styles.container}>
        <Text style={styles.title}>Enter The Verify Code</Text>
        <Text style={styles.description}>
          We just sent you a 6-digit verification code via the{'\n'} {phoneNumber}
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
                setVerificationCode((prevCode) => {
                  const updatedCode = prevCode.split('');
                  updatedCode[index - 1] = text;
                  return updatedCode.join('');
                });
              }}
            />
          ))}
        </View>

        {isVerifying && (
          <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
        )}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitCode}
          disabled={isVerifying || !verificationCode}
        >
          <Text style={styles.buttonText}>Submit Code</Text>
        </TouchableOpacity>

        <Text style={styles.countdownText}>
          The verification code will expire in {countdown} sec
        </Text>

        <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
          <Text style={styles.resendButtonText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default VerifyOtp;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
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
  loader: {
    marginTop: 20,
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
