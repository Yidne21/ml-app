// screens/SignUpScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpScreenSlice } from './slice';
import * as select from './slice/selector';
import Toast from 'react-native-root-toast';

function SignUp({ navigation, route }: RootStackScreenProps<'SignUp'>) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const dispatch = useDispatch();
  const { actions } = useSignUpScreenSlice();
  const isSigning = useSelector(select.selectIsSigning);
  const isSigned = useSelector(select.selectSigned);
  const errorMsg = useSelector(select.selectErrorMsg);
  const prevRoute = route.name;

  const handleContinue = () => {
    dispatch(actions.signUp({ phoneNumber, password: newPassword, name }));
  };

  useEffect(() => {
    if (isSigned === true) {
      navigation.navigate('Login');
    }
  }, [isSigned, navigation, phoneNumber, prevRoute]);

  if (errorMsg) {
    Toast.show(errorMsg, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.rootContainer}>
      <Header showRightIcon={false} />
      <View style={styles.container}>
        <Image source={require('../../../assets/images/icon.png')} style={styles.appLogo} />
        <Text style={styles.logoText}>Medicin Locator</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name Ex. Bisrat Jenbere"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
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
        </View>

        <TouchableOpacity style={styles.loginRedirect} onPress={handleLoginRedirect}>
          <Text style={styles.loginRedirectText}>Already have an account? Login</Text>
        </TouchableOpacity>

        {isSigning && (
          <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
        )}

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  loader: {
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 40,
    color: theme.colors.primary[600],
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
    color: theme.colors.text,
  },
  loginRedirect: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    width: '80%',
    marginBottom: 30,
  },
  loginRedirectText: {
    color: theme.colors.primary[900],
    fontSize: 16,
  },
  continueButton: {
    width: '80%',
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

export default SignUp;
