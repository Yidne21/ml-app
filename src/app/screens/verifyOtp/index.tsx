import React, { useState, useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useVerifyOtpScreenSlice } from './slice';
import Toast from 'react-native-root-toast';
import { useForgotPasswordScreenSlice } from '../ForgetPassword/slice';
import * as forgotPasswordSelect from '../ForgetPassword/slice/selector';
import { Flex, Text, TextInput, Button } from '../../components/Basic';

function VerifyOtp({ navigation, route }: RootStackScreenProps<'VerifyOtp'>) {
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(60);

  const dispatch = useDispatch();
  const { actions } = useVerifyOtpScreenSlice();

  const { phoneNumber, prevRoute } = route.params;

  const isVerifying = useSelector(select.selectIsSendingOtp);
  const isVerified = useSelector(select.selectValidOtp);
  const errorMsg = useSelector(select.selectErrorMessage);

  const { actions: forgotPasswordActions } = useForgotPasswordScreenSlice();
  const isResendingOtp = useSelector(forgotPasswordSelect.selectIsForgotingPassword);
  const isOtpSent = useSelector(forgotPasswordSelect.selectIsOtpSent);

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
    setCountdown(60);
    dispatch(forgotPasswordActions.forgotPassword({ phoneNumber }));
  };

  useEffect(() => {
    if (isOtpSent === true) {
      Toast.show('Resent successfully', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      dispatch(forgotPasswordActions.resetForgotPasswordState());
    }
  }, [isOtpSent, dispatch, forgotPasswordActions]);

  const handleSubmitCode = () => {
    dispatch(actions.verifyOtp({ code: verificationCode, phoneNumber }));
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        padding: 16,
      }}
      behavior="padding"
    >
      <Header showRightIcon={false} />
      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor={theme.colors.background}
      >
        <Text fontSize={24} fontWeight="bold" marginBottom={10} color={theme.colors.primary[600]}>
          Enter The Verify Code
        </Text>
        <Text fontSize={16} textAlign="center" marginBottom={20} color={theme.colors.text}>
          We just sent you a 6-digit verification code via the{'\n'} {phoneNumber}
        </Text>

        <Flex flexDirection="row" justifyContent="center" marginBottom={20}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <TextInput
              key={index}
              height={50}
              width={40}
              borderColor={theme.colors.primary[500]} // Assuming `theme.colors.primary[500]` is a color variable
              borderBottomWidth={1}
              my={5}
              textAlign="center"
              fontSize={24}
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
        </Flex>

        {isVerifying && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary[500]}
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        )}

        <Button
          width="80%"
          backgroundColor={theme.colors.primary[500]}
          padding={15}
          borderRadius={25}
          alignItems="center"
          marginTop={20}
          marginBottom={20}
          onPress={handleSubmitCode}
          disabled={isVerifying || !verificationCode}
        >
          <Text color={'#fff'} fontSize={18} fontWeight={'bold'}>
            Submit Code
          </Text>
        </Button>

        <Text fontSize={14} color={theme.colors.text} mb={10}>
          The verification code will expire in {countdown} sec
        </Text>

        {isResendingOtp && (
          <ActivityIndicator
            size="small"
            color={theme.colors.primary[500]}
            style={{
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        )}

        <Button alignSelf={'center'} mb={'20px'} onPress={handleResendCode}>
          <Text color={theme.colors.primary[500]} fontSize={16}>
            Resend Code
          </Text>
        </Button>
      </Flex>
    </KeyboardAvoidingView>
  );
}

export default VerifyOtp;
