import React from 'react';
import { Dimensions } from 'react-native';
import { Box, Text, Image } from '../../../components/Basic';

interface UserBasicInfoProps {
  coverPhotoUri: string;
  avatarUri: string;
  name: string;
}

const UserBasicInfo: React.FC<UserBasicInfoProps> = ({ coverPhotoUri, avatarUri, name }) => {
  return (
    <>
      <Box width={'100%'} height={200}>
        <Image
          source={{
            uri:
              coverPhotoUri ||
              'https://fakeimg.pl/400x200/bdbdbd/ffffff?text=Cover+Photo&font=noto',
          }}
          width={Dimensions.get('window').width}
          height={200}
        />
      </Box>
      <Box>
        <Image
          source={{
            uri: avatarUri || 'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=avatar&font=noto',
          }}
          width={150}
          height={150}
          borderRadius={100}
          mt={-75}
          borderWidth={3}
          borderColor="#fff"
          pt={10}
        />
      </Box>
      <Text fontSize={24} fontWeight={'bold'} m={10}>
        {name}
      </Text>
    </>
  );
};

export default UserBasicInfo;
