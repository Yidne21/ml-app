import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';
import { Flex, Image, Button, Text } from '../../../components/Basic';

interface UserBasicInfoProps {
  isEditMode: boolean;
  coverPhotoUri: string;
  avatarUri: string;
  name: string;
  pickImage: (isAvatar: boolean) => void;
}

const UserBasicInfo: React.FC<UserBasicInfoProps> = ({
  isEditMode,
  coverPhotoUri,
  avatarUri,
  name,
  pickImage,
}) => {
  return (
    <>
      <Flex width={'100%'} height={'200px'}>
        <Image
          source={{
            uri:
              coverPhotoUri ||
              'https://fakeimg.pl/400x200/bdbdbd/ffffff?text=Cover+Photo&font=noto',
          }}
          width={'100%'}
          height={'200px'}
          resizeMode="contain"
        />
        {isEditMode && (
          <Button
            onPress={() => {
              pickImage(false);
            }}
          >
            <MaterialIcons
              name="camera-alt"
              size={44}
              color={theme.colors.primary[500]}
              style={{
                position: 'absolute',
                bottom: -26,
                right: 10,
                zIndex: 1,
                padding: 5,
                borderRadius: 10,
                backgroundColor: theme.shadows.sm,
              }}
            />
          </Button>
        )}
      </Flex>
      <Flex>
        {isEditMode && (
          <Button
            zIndex={1}
            backgroundColor={theme.colors.transparent}
            onPress={() => pickImage(true)}
          >
            <MaterialIcons
              name="camera-alt"
              size={34}
              color={theme.colors.primary[500]}
              style={{
                position: 'absolute',
                bottom: -80,
                right: 10,
                zIndex: 1,
                backgroundColor: theme.shadows.sm,
                padding: 5,
                borderRadius: 10,
              }}
            />
          </Button>
        )}
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
      </Flex>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          margin: 10,
        }}
      >
        {name}
      </Text>
    </>
  );
};

export default UserBasicInfo;
