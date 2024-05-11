// screens/SuccessScreen.js
import React from 'react';
import { theme } from '../../utils/theme/theme';
import { RootStackScreenProps } from '../../navigation/types';
import { Text, Image, Button, Flex } from '../components/Basic';

function SuccessScreen({ navigation, route }: RootStackScreenProps<'SuccessScreen'>) {
  const { title, message } = route.params;
  console.log('title', title);
  console.log('message', message);

  const handleContinue = () => {
    navigation.navigate('Login');
  };

  return (
    <Flex
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={theme.colors.white}
    >
      <Image source={require('../../assets/images/success.png')} width={150} height={150} mb={20} />

      <Text fontSize={24} fontWeight={'bold'} mb={'10px'} color={theme.colors.primary[900]}>
        {title}
      </Text>

      <Text fontSize={16} textAlign={'center'} mb={20} color={theme.colors.primary[900]}>
        {message}
      </Text>

      <Button
        backgroundColor={theme.colors.primary[500]}
        p={15}
        borderRadius={25}
        alignItems={'center'}
        onPress={handleContinue}
      >
        <Text color={'#fff'} fontSize={16} fontWeight={'bold'}>
          Continue
        </Text>
      </Button>
    </Flex>
  );
}

export default SuccessScreen;
