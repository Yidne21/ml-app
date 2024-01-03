import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import { ProfileStackScreenProps } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import * as userSelect from '../userProfile/slice/selector';
import { useUserProfileUpdateScreenSlice } from './slice';
import { imagePicker } from '../../../utils/helpers';
import UpdateForm from './component/UpdateForm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../utils/theme/theme';
import { uploadImage } from '../../../utils/helpers';

function UpdateProfile({ navigation, route }: ProfileStackScreenProps<'EditProfile'>) {
  const rootNavigation = useNavigation();
  const userId = '65912f4bf08aa8195e56e7e1';
  const { actions } = useUserProfileUpdateScreenSlice();
  const dispatch = useDispatch();
  const user = useSelector(userSelect.selectUser);

  const isUpdating = useSelector(select.selectIsUpdating);
  console.log('isUpdating', isUpdating);

  const [editedEmail, setEditedEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [avatarUri, setAvatarUri] = useState(user.avatar);
  const [coverPhotoUri, setCoverPhotoUri] = useState(user.coverPhoto);

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
      console.error('An error occurred during saving changes:', error);
      Alert.alert('Error', 'An error occurred during saving changes.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverBox}>
        <Image
          source={{
            uri:
              coverPhotoUri ||
              'https://fakeimg.pl/400x200/bdbdbd/ffffff?text=Cover+Photo&font=noto',
          }}
          style={styles.coverPhoto}
        />
        <TouchableOpacity onPress={handlePickCoverPhoto} style={styles.coverCameraBtn}>
          <MaterialIcons name="camera-alt" size={44} color={theme.colors.primary[500]} />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarBox}>
        <Image
          source={{
            uri: avatarUri || 'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=avatar&font=noto',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity onPress={handlePickAvatarPhoto} style={styles.avatarCameraBtn}>
          <MaterialIcons name="camera-alt" size={34} color={theme.colors.primary[500]} />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{user.name}</Text>

      <UpdateForm
        editedEmail={editedEmail}
        oldPassword={oldPassword}
        newPassword={newPassword}
        setEditedEmail={setEditedEmail}
        setOldPassword={setOldPassword}
        setNewPassword={setNewPassword}
      />

      {isUpdating && (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  loader: {
    marginTop: 20,
  },
  coverBox: {
    width: '100%',
    height: 200,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  avatarBox: {},
  avatarCameraBtn: {
    width: 54,
    borderRadius: 100,
    marginLeft: 'auto',
    marginTop: -35,
    padding: 10,
    zIndex: 1,
    backgroundColor: theme.shadows.sm,
  },
  coverCameraBtn: {
    width: 64,
    marginLeft: 'auto',
    marginTop: -35,
    borderRadius: 100,
    padding: 10,
    backgroundColor: theme.shadows.sm,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: -75, // to overlap with the cover photo
    borderWidth: 3,
    borderColor: '#fff', // add a border to the avatar
    paddingTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    padding: 10,
    height: 50,
    borderRadius: 15,
    backgroundColor: theme.colors.primary[500],
  },
  buttonText: {
    color: '#fff',
  },
});
