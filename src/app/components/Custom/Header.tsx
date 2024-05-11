import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../utils/theme/theme';
import { Button, Flex } from '../Basic';

interface HeaderProps {
  showRightIcon: boolean;
}

const Header: React.FC<HeaderProps> = ({ showRightIcon }) => {
  const rootNavigation = useNavigation();

  return (
    <Flex flexDirection={'row'} justifyContent={'space-between'} marginBottom={30}>
      <Button onPress={() => rootNavigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary[500]} />
      </Button>
      {showRightIcon && (
        <Flex flexDirection={'row'} justifyContent={'space-around'} width={80}>
          <Button onPress={() => rootNavigation.navigate('Notification')}>
            <MaterialIcons name="notifications-none" size={24} color={theme.colors.primary[500]} />
          </Button>
          <Button onPress={() => rootNavigation.navigate('Cart')}>
            <MaterialIcons name="add-shopping-cart" size={24} color={theme.colors.primary[500]} />
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
