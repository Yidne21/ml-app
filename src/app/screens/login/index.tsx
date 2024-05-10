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
import { Flex, Text, TextInput, Button } from '../../components/Basic';
import { wp, fp } from '../../../utils/constants';
import Logo from '../../components/Custom/Logo';

function Login({ navigation }: RootStackScreenProps<'Login'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoging = useSelector(select.selectIsLoging);
  const isLogedIn = useSelector(select.selectIsLogedIn);
  const errorMessage = useSelector(select.errorMessage);
  const { actions } = useLoginScreenSlice();

  const handleLogin = () => {
    dispatch(actions.login({ password, email }));
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
    if (errorMessage) {
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
    <Flex
      flex={1}
      pt={10}
      px={10}
      backgroundColor={theme.colors.white} // Add a background color
    >
      <Header showRightIcon={false} />
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Logo />

        <Flex width="80%" mb={20}>
          <TextInput
            px={20}
            marginBottom={10}
            fontSize={16}
            placeholder="email Ex. abebea@example.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            px={20}
            marginBottom={10}
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
          <Text color={theme.colors.primary[900]} fontSize={fp(2)}>
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
          padding={wp(5)}
          borderRadius={25}
          alignItems="center"
          onPress={handleLogin}
        >
          <Text color="white" fontSize={fp(2)} fontWeight="bold">
            Login
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Login;
