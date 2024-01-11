import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useForgotPasswordScreenSlice } from './slice';

function ForgetPassword({ navigation, route }: RootStackScreenProps<'ForgotPassword'>) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();
  const { actions } = useForgotPasswordScreenSlice();
  const isForgeting = useSelector(select.selectIsForgotingPassword);
  const isOtpSent = useSelector(select.selectIsOtpSent);

  const handleContinue = () => {
    dispatch(actions.forgotPassword(phoneNumber));
  };

  useEffect(() => {
    if (isOtpSent === true) {
      navigation.navigate('VerifyOtp', { prevRoute: route.name, phoneNumber });
    }
  }, [isOtpSent, navigation, phoneNumber, route.name]);

  return (
    <View style={styles.rootContainer}>
      <Header showRightIcon={false} />
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

        {isForgeting && (
          <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
        )}

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgetPassword;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  loader: {
    marginTop: 20,
  },
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
