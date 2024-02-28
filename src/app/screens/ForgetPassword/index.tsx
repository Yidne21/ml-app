import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../../utils/theme/theme';
import { RootStackScreenProps } from '../../../navigation/types';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useForgotPasswordScreenSlice } from './slice';
import { Flex, Text, Button, Image, TextInput } from '../../components/Basic';

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
    <Flex flex={1} p={16}>
      <Header showRightIcon={false} />
      <Flex
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={theme.colors.background}
      >
        <Image
          source={require('../../../assets/images/icon.png')}
          width={120}
          height={120}
          mb={20}
          blurRadius={60}
        />
        <Text fontSize={24} fontWeight={'bold'} mb={10} color={theme.colors.primary[600]}>
          Medicin Locator
        </Text>
        <Text fontSize={16} textAlign={'center'} mb={30} color={theme.colors.text}>
          Please enter your phone number{'\n'} to reset your password.
        </Text>

        <Flex width={'80%'} mb={20}>
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            height={50}
            borderColor={theme.colors.primary[500]}
            borderWidth={1}
            borderRadius={25}
            px={20}
            fontSize={16}
          />
        </Flex>

        {isForgeting && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary[500]}
            style={{ marginTop: 20 }}
          />
        )}

        <Button
          onPress={handleContinue}
          width={'80%'}
          backgroundColor={theme.colors.primary[500]}
          p={15}
          borderRadius={25}
          alignItems={'center'}
          mt={20}
        >
          <Text color={'white'} fontSize={18} fontWeight={'bold'}>
            Continue
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default ForgetPassword;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   loader: {
//     marginTop: 20,
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
//     marginBottom: 10,
//     color: theme.colors.primary[600],
//   },
//   descriptionText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//     color: theme.colors.text,
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
//     fontSize: 16,
//   },
//   continueButton: {
//     width: '80%',
//     backgroundColor: theme.colors.primary[500],
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
