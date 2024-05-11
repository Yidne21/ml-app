import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpScreenSlice } from './slice';
import * as select from './slice/selector';
import Toast from 'react-native-root-toast';
import { Flex, Button, Text, TextInput } from '../../components/Basic';
import { wp, fp } from '../../../utils/constants';
import Logo from '../../components/Custom/Logo';
import Header from '../../components/Custom/Header';

function SignUp({ navigation, route }: RootStackScreenProps<'SignUp'>) {
  const [email, setEmail] = useState('');
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
    dispatch(actions.signUp({ email, password: newPassword, name }));
  };

  useEffect(() => {
    if (isSigned === true) {
      navigation.navigate('VerifyOtp', { email, prevRoute: 'SignUp' });
    }
  }, [isSigned, navigation, email, prevRoute]);

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
    <Flex flex={1} px={10} pt={30} backgroundColor={theme.colors.white}>
      <Header showRightIcon={false} />
      <Flex alignItems="center" justifyContent="center">
        <Logo />
        <Flex width="80%" marginBottom={10}>
          <TextInput
            px={20}
            marginBottom={10}
            color={theme.colors.text}
            placeholder="Name Ex. Bisrat Jenbere"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            px={20}
            marginBottom={10}
            color={theme.colors.text}
            placeholder="Email Ex. ababeba@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            borderRadius={25}
            px={20}
            marginBottom={10}
            color={theme.colors.text}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            px={20}
            marginBottom={10}
            color={theme.colors.text}
            placeholder="Confirm New Password"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
          />
        </Flex>

        <Button
          alignSelf={'flex-start'}
          alignItems={'flex-end'}
          width={'80%'}
          marginBottom={30}
          onPress={handleLoginRedirect}
        >
          <Text style={{ color: theme.colors.primary[900], fontSize: fp(2) }}>
            Already have an account? Login
          </Text>
        </Button>

        {isSigning && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary[500]}
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        )}

        <Button
          width="80%"
          backgroundColor={theme.colors.primary[500]}
          padding={wp(5)}
          borderRadius={25}
          alignItems="center"
          onPress={handleContinue}
          disabled={isSigning}
        >
          <Text style={{ color: 'white', fontSize: fp(2), fontWeight: 'bold' }}>Continue</Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignUp;
