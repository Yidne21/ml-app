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
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const { actions } = useForgotPasswordScreenSlice();
  const isForgeting = useSelector(select.selectIsForgotingPassword);
  const isOtpSent = useSelector(select.selectIsOtpSent);

  const handleContinue = () => {
    dispatch(actions.forgotPassword({ email }));
  };

  useEffect(() => {
    if (isOtpSent === true) {
      navigation.navigate('VerifyOtp', { prevRoute: route.name, email });
    }
  }, [isOtpSent, navigation, email, route.name]);

  return (
    <Flex flex={1} pt={10} px={10} backgroundColor={theme.colors.white}>
      <Header showRightIcon={false} />
      <Flex flex={1} justifyContent={'center'} alignItems={'center'}>
        <Image
          source={require('../../../assets/images/icon.png')}
          width={120}
          height={120}
          mb={20}
          borderRadius={60}
        />
        <Text fontSize={24} fontWeight={'bold'} mb={'10px'} color={theme.colors.primary[600]}>
          Medicin Locator
        </Text>
        <Text fontSize={16} textAlign={'center'} mb={'30px'} color={theme.colors.text}>
          Please enter your phone number{'\n'} to reset your password.
        </Text>

        <Flex width={'80%'} mb={'20px'}>
          <TextInput
            placeholder="Email Ex. zola@example.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
