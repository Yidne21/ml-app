import React from 'react';
import { Box, Text, Image } from '../../../components/Basic';
import { wp, hp, fp } from '../../../../utils/constants';

interface UserBasicInfoProps {
  coverPhotoUri: string;
  avatarUri: string;
  name: string;
}

const UserBasicInfo: React.FC<UserBasicInfoProps> = ({ coverPhotoUri, avatarUri, name }) => {
  return (
    <>
      <Box width={'100%'} height={hp(30)} maxHeight={200}>
        <Image
          source={{
            uri:
              coverPhotoUri ||
              'https://fakeimg.pl/400x200/bdbdbd/ffffff?text=Cover+Photo&font=noto',
          }}
          width={wp(100)}
          height={hp(30)}
          maxHeight={200}
        />
      </Box>
      <Box>
        <Image
          source={{
            uri: avatarUri || 'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=avatar&font=noto',
          }}
          width={hp(20)}
          height={hp(20)}
          borderRadius={100}
          mt={-75}
          borderWidth={3}
          borderColor="#fff"
          pt={10}
        />
      </Box>
      <Text fontSize={fp(3)} fontWeight={'bold'} m={10} maxFontSizeMultiplier={2}>
        {name}
      </Text>
    </>
  );
};

export default UserBasicInfo;
