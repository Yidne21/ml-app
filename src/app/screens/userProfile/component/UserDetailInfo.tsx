import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';
import { IUser } from '../slice/types';
import { Box, Flex, Text } from '../../../components/Basic';

interface UserDetailInfoProps {
  user: IUser;
}

const UserDetailInfo: React.FC<UserDetailInfoProps> = ({ user }) => {
  return (
    <>
      <Box
        padding={'20px'}
        margin={'20px'}
        width="90%"
        alignItems="center"
        borderRadius={10}
        backgroundColor={theme.shadows.sm}
      >
        <Text fontSize={24} fontWeight={'bold'} m={'10px'}>
          <Text color={theme.colors.primary[900]}>Welcome Back </Text>
          {user.name}
        </Text>
        <Box>
          {user.email && (
            <Flex flexDirection={'row'} alignItems={'center'} gap={10}>
              <MaterialIcons
                name="email"
                size={24}
                color={theme.colors.primary[300]}
                style={{
                  margin: 5,
                  padding: 4,
                  borderRadius: 5,
                  backgroundColor: theme.colors.transparent,
                }}
              />
              <Text fontSize={16} mt={'5px'}>
                {user.email}
              </Text>
            </Flex>
          )}
          <Flex flexDirection={'row'} alignItems={'center'} gap={10}>
            <MaterialIcons
              name="phone"
              size={24}
              color={theme.colors.primary[300]}
              style={{
                margin: 5,
                padding: 4,
                borderRadius: 5,
                backgroundColor: theme.colors.transparent,
              }}
            />
            <Text mt={'5px'} fontSize={16}>
              {user.phoneNumber}
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default UserDetailInfo;
