import React from 'react';
import { theme } from '../../../../utils/theme/theme';
import { Button, Flex, Text } from '../../../components/Basic';
import { fp } from '../../../../utils/constants';
interface ButtonsProps {
  onEditProfile: () => void;
  onLogout: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onEditProfile, onLogout }) => {
  return (
    <>
      <Flex flexDirection={'row'} mt={'20px'} mb={'20px'} gap={10}>
        <Button
          backgroundColor={theme.colors.primary[500]}
          px={'30px'}
          borderRadius={10}
          py={'15px'}
          mt={'10px'}
          onPress={onEditProfile}
        >
          <Text color={'#fff'} fontSize={fp(2)}>
            Edit Profile
          </Text>
        </Button>
        <Button
          backgroundColor={theme.colors.primary[500]}
          px={'30px'}
          borderRadius={10}
          py={'15px'}
          mt={'10px'}
          onPress={onLogout}
        >
          <Text color={'#fff'} fontSize={fp(2)}>
            Logout
          </Text>
        </Button>
      </Flex>
    </>
  );
};

export default Buttons;
