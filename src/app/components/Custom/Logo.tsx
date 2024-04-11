import React from 'react';
import { Image } from 'react-native';
import { wp, fp } from '../../../utils/constants';
import { Text } from '../Basic';
import { theme } from '../../../utils/theme/theme';

function Logo() {
  return (
    <>
      <Image
        source={require('../../../assets/images/icon.png')}
        style={{
          width: wp(30),
          height: wp(30),
          marginBottom: 20,
          borderRadius: 60,
          maxHeight: 120,
          maxWidth: 120,
        }}
      />
      <Text fontSize={fp(4)} fontWeight="bold" marginBottom={20} color={theme.colors.primary[600]}>
        Medicin Locator
      </Text>
    </>
  );
}

export default Logo;
