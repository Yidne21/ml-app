import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';
import { IUser } from '../slice/types';

interface UserDetailInfoProps {
  user: IUser;
}

const UserDetailInfo: React.FC<UserDetailInfoProps> = ({ user }) => {
  return (
    <>
      <View style={styles.userDetail}>
        <Text style={styles.name}>
          <Text style={styles.welcome}>Welcome Back </Text>
          {user.name}
        </Text>
        <View>
          {user.email && (
            <View style={styles.flexBox}>
              <MaterialIcons
                name="email"
                size={24}
                color={theme.colors.primary[300]}
                style={styles.icon}
              />
              <Text style={styles.email}>{user.email}</Text>
            </View>
          )}
          <View style={styles.flexBox}>
            <MaterialIcons
              name="phone"
              size={24}
              color={theme.colors.primary[300]}
              style={styles.icon}
            />
            <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userDetail: {
    padding: 20,
    margin: 20,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: theme.shadows.sm,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    margin: 5,
    padding: 4,
    borderRadius: 5,
    backgroundColor: theme.colors.transparent,
  },
  welcome: {
    color: theme.colors.primary[700],
    fontSize: 20,
  },
});

export default UserDetailInfo;
