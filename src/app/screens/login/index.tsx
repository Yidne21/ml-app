// screens/LoginScreen.js
// screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { RootStackScreenProps } from '../../../navigation/types';
import { theme } from '../../../utils/theme/theme';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginScreenSlice } from './slice';
import * as select from './slice/selector';
import Toast from 'react-native-root-toast';
import { Flex, Text, TextInput, Button, Image } from '../../components/Basic';

function Login({ navigation }: RootStackScreenProps<'Login'>) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoging = useSelector(select.selectIsLoging);
  const isLogedIn = useSelector(select.selectIsLogedIn);
  const errorMessage = useSelector(select.errorMessage);
  const { actions } = useLoginScreenSlice();

  const handleLogin = () => {
    dispatch(actions.login({ password, phoneNumber }));
  };

  useEffect(() => {
    if (isLogedIn == true) {
      Toast.show('Login Success', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      dispatch(actions.resetLoginState());
      navigation.navigate('RootTab');
    }
  }, [actions, dispatch, isLogedIn, navigation]);

  useEffect(() => {
    if (!isLogedIn && !isLoging && errorMessage) {
      Toast.show(errorMessage, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      dispatch(actions.resetLoginState());
    }
  }, [actions, dispatch, errorMessage, isLogedIn, isLoging]);

  const handleForgotPassword = () => {
    // Navigate to the reset password screen
    navigation.navigate('ForgotPassword');
  };

  return (
    <Flex flex={1} padding={16}>
      <Header showRightIcon={false} />
      <Flex
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor={theme.colors.background} // Add a background color
      >
        <Image
          source={require('../../../assets/images/icon.png')}
          width={120}
          height={120}
          mb={20}
          borderRadius={60}
        />
        <Text fontSize={24} fontWeight="bold" mb={30} color={theme.colors.primary[600]}>
          Medicin Locator
        </Text>

        <Flex width="80%" mb={20}>
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]} // Use your primary color
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
            fontSize={16}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]} // Use your primary color
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
            fontSize={16}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Flex>

        <Button
          alignSelf="flex-start"
          alignItems="flex-end"
          width="80%"
          mb={30}
          onPress={handleForgotPassword}
        >
          <Text color={theme.colors.primary[900]} fontSize={16}>
            Forgot Password?
          </Text>
        </Button>

        {isLoging && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary[500]}
            style={{ marginTop: 20 }}
          />
        )}

        <Button
          width="80%"
          backgroundColor={theme.colors.primary[500]}
          padding={15}
          borderRadius={25}
          alignItems="center"
          onPress={handleLogin}
        >
          <Text color="white" fontSize={18} fontWeight="bold">
            Login
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Login;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.colors.background, // Add a background color
//   },
//   loader: {
//     marginTop: 20,
//   },
//   appLogo: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//     borderRadius: 60,
//   },
//   logoText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: theme.colors.primary[600], // Use your primary color
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: theme.colors.primary[500], // Use your primary color
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-start',
//     alignItems: 'flex-end',
//     width: '80%',
//     marginBottom: 30,
//   },
//   forgotPasswordText: {
//     color: theme.colors.primary[900],
//     fontSize: 16,
//   },
//   loginButton: {
//     width: '80%',
//     backgroundColor: theme.colors.primary[500],
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
