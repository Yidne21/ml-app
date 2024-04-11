import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { ProfileStackScreenProps } from '../../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useUserProfileUpdateScreenSlice } from './slice';
import { imagePicker } from '../../../utils/helpers';
import UpdateForm from './component/UpdateForm';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../utils/theme/theme';
import { uploadImage } from '../../../utils/helpers';
import Header from '../../components/Custom/Header';
import useStoredUserData from '../../../utils/hooks/useStoreUserData';
import { Flex, Box, Text, Image, Button } from '../../components/Basic';
import { hp, wp, fp } from '../../../utils/constants';

function UpdateProfile({ navigation }: ProfileStackScreenProps<'EditProfile'>) {
  const { actions } = useUserProfileUpdateScreenSlice();
  const dispatch = useDispatch();
  const user = useStoredUserData();
  const userId = user._id;

  const isUpdating = useSelector(select.selectIsUpdating);
  const isUpdated = useSelector(select.selectIsUpdated);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatarUri, setAvatarUri] = useState(user.avatar);
  const [coverPhotoUri, setCoverPhotoUri] = useState(user.coverPhoto);

  useEffect(() => {
    setAvatarUri(user.avatar);
    setCoverPhotoUri(user.coverPhoto);
    setEditedEmail(user.email);
  }, [user]);

  useEffect(() => {
    if (isUpdated) {
      dispatch(actions.resetUpdateUserProfile());
      navigation.goBack();
    }
  }, [actions, dispatch, isUpdated, navigation]);

  const handlePickAvatarPhoto = async () => {
    const result = await imagePicker();
    if (!result.canceled) {
      const uri = result?.assets[0].uri;
      setAvatarUri(uri);
    }
  };

  const handlePickCoverPhoto = async () => {
    const result = await imagePicker();
    if (!result.canceled) {
      const uri = result?.assets[0].uri;
      setCoverPhotoUri(uri);
    }
  };

  const handleSaveChanges = async () => {
    let newAvatarUri = user.avatar;
    let newCoverPhotoUri = user.coverPhoto;
    if (avatarUri !== user.avatar) {
      const imageName = avatarUri.substring(avatarUri.lastIndexOf('/') + 1);
      const path = `images/${Date.now()}/${imageName}`;
      const secureUrl = await uploadImage(avatarUri, path);
      newAvatarUri = secureUrl;
      setAvatarUri(secureUrl);
    }

    if (coverPhotoUri !== user.coverPhoto) {
      const imageName = coverPhotoUri.substring(coverPhotoUri.lastIndexOf('/') + 1);
      const path = `images/${Date.now()}/${imageName}`;
      const secureUrl = await uploadImage(coverPhotoUri, path);
      newCoverPhotoUri = secureUrl;
      setCoverPhotoUri(secureUrl);
    }

    const userData = {
      email: editedEmail,
      avatar: newAvatarUri,
      coverPhoto: newCoverPhotoUri,
      oldPassword,
      newPassword,
    };

    try {
      dispatch(actions.updateUserProfile({ userId, userData }));
    } catch (error) {
      Alert.alert('Error', 'An error occurred during saving changes.');
    }
  };

  return (
    <Flex flex={1} backgroundColor={'#fff'}>
      <Flex position="absolute" width="100%" padding={16} zIndex={1} justifyContent="space-between">
        <Header showRightIcon={true} />
      </Flex>
      <Box alignItems={'center'}>
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
          <Button
            onPress={handlePickCoverPhoto}
            width={wp(17)}
            ml="auto"
            mt={-35}
            borderRadius={100}
            padding={10}
            backgroundColor={theme.shadows.sm}
          >
            <MaterialIcons name="camera-alt" size={wp(11.5)} color={theme.colors.primary[700]} />
          </Button>
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
          <Button
            onPress={handlePickAvatarPhoto}
            width={wp(14)}
            borderRadius={100}
            ml="auto"
            mt={-35}
            padding={10}
            zIndex={1}
            backgroundColor={theme.shadows.sm}
          >
            <MaterialIcons name="camera-alt" size={34} color={theme.colors.primary[700]} />
          </Button>
        </Box>

        <Text fontSize={fp(3)} fontWeight={'bold'} m={10}>
          {user.name}
        </Text>

        <UpdateForm
          editedEmail={editedEmail}
          oldPassword={oldPassword}
          newPassword={newPassword}
          setEditedEmail={setEditedEmail}
          setOldPassword={setOldPassword}
          setNewPassword={setNewPassword}
        />

        {isUpdating && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary[500]}
            style={{
              marginTop: 20,
            }}
          />
        )}

        <Button
          width="80%"
          backgroundColor={theme.colors.primary[500]}
          padding={15}
          borderRadius={25}
          alignItems="center"
          onPress={handleSaveChanges}
          mt={10}
        >
          <Text color={'#fff'} fontSize={fp(2)}>
            Save Changes
          </Text>
        </Button>
      </Box>
    </Flex>
  );
}

export default UpdateProfile;
