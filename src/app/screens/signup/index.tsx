import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useSignUpScreenSlice } from './slice';
import * as select from './slice/selector';
import Toast from 'react-native-root-toast';
import { Flex, Button, Text, TextInput } from '../../components/Basic';

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
    <Flex flex={1} padding={16}>
      <Header showRightIcon={false} />
      <Flex alignItems="center" justifyContent="center" backgroundColor={theme.colors.background}>
        <Image
          source={require('../../../assets/images/icon.png')}
          style={{ width: 120, height: 120, marginBottom: 20, borderRadius: 60 }}
        />
        <Text fontSize={24} fontWeight="bold" marginBottom={40} color={theme.colors.primary[600]}>
          Medicin Locator
        </Text>

        <Flex width="80%" marginBottom={20}>
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]}
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
            color={theme.colors.text}
            placeholder="Name Ex. Bisrat Jenbere"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]}
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
            color={theme.colors.text}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]}
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
            color={theme.colors.text}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            height={50}
            borderColor={theme.colors.primary[500]}
            borderWidth={1}
            borderRadius={25}
            px={20}
            marginBottom={20}
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
          <Text style={{ color: theme.colors.primary[900], fontSize: 16 }}>
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
          padding={15}
          borderRadius={25}
          alignItems="center"
          onPress={handleContinue}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Continue</Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignUp;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   loader: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.colors.background,
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
//     marginBottom: 40,
//     color: theme.colors.primary[600],
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: theme.colors.primary[500],
//     borderWidth: 1,
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     color: theme.colors.text,
//   },
//   loginRedirect: {
//     alignSelf: 'flex-start',
//     alignItems: 'flex-end',
//     width: '80%',
//     marginBottom: 30,
//   },
//   loginRedirectText: {
//     color: theme.colors.primary[900],
//     fontSize: 16,
//   },
//   continueButton: {
//     width: '80%',
//     backgroundColor: theme.colors.primary[500],
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SignUp;
