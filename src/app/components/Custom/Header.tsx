import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../utils/theme/theme';

interface HeaderProps {
  showRightIcon: boolean;
}

const Header: React.FC<HeaderProps> = ({ showRightIcon }) => {
  const rootNavigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => rootNavigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary[900]} />
      </TouchableOpacity>
      {showRightIcon && (
        <View style={styles.leftIcon}>
          <TouchableOpacity onPress={() => rootNavigation.navigate('Notification')}>
            <MaterialIcons name="notifications-none" size={24} color={theme.colors.primary[900]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => rootNavigation.navigate('Cart')}>
            <MaterialIcons name="add-shopping-cart" size={24} color={theme.colors.primary[900]} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  leftIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
});
