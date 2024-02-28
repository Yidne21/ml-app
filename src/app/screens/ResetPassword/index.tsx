import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useResetPasswordSlice } from './slice';
import Toast from 'react-native-root-toast';
import { Flex, Text, TextInput, Button, Image } from '../../components/Basic';

function ResetPassword({ navigation, route }: RootStackScreenProps<'ResetPassword'>) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const dispatch = useDispatch();
  const { actions } = useResetPasswordSlice();
  const isResetting = useSelector(select.selectIsResettingPassword);
  const isResetted = useSelector(select.selectIsReseted);
  const resetError = useSelector(select.selectErrorMessage);
  const phoneNumber = route.params.phoneNumber;

  const handleResetPassword = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordMismatch(true);
      return;
    }

    dispatch(actions.resetPassword({ newPassword, phoneNumber }));
  };

  useEffect(() => {
    if (isResetted === true) {
      navigation.navigate('SuccessScreen', {
        title: 'Password Reseted Successfully!',
        message: 'Your password has been reset successfully!',
      });
    }
  }, [isResetted, navigation]);

  if (resetError) {
    Toast.show(resetError, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }

  return (
    <Flex flex={1} padding={16}>
      <Header showRightIcon={false} />
      <Flex alignItems="center" justifyContent="center" backgroundColor={theme.colors.background}>
        <Image
          source={require('../../../assets/images/icon.png')}
          width={120}
          height={120}
          marginBottom={20}
          borderRadius={60}
        />
        <Text fontSize={24} fontWeight="bold" marginBottom={30} color={theme.colors.primary[500]}>
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
            fontSize={16}
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
            fontSize={16}
            placeholder="Confirm New Password"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
          />
          {passwordMismatch && (
            <Text color="red" marginTop={5}>
              Passwords do not match. Please try again.
            </Text>
          )}
        </Flex>

        {isResetting && <ActivityIndicator size="large" color={theme.colors.primary[500]} />}

        <Button
          width="80%"
          backgroundColor={theme.colors.primary[500]}
          padding={15}
          borderRadius={25}
          alignItems="center"
          onPress={handleResetPassword}
        >
          <Text color="white" fontSize={18} fontWeight="bold">
            Reset Password
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default ResetPassword;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     padding: 16,
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
//     marginBottom: 30,
//     color: theme.colors.primary[500],
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
//     fontSize: 16,
//   },
//   resetButton: {
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
//   errorText: {
//     color: 'red',
//     marginTop: 5,
//   },
// });
