import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as select from './slice/selector';
import { useUserProfileScreenSlice } from './slice';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import UserBasicInfo from './component/UserBasicInfo';
import UserDetailInfo from './component/UserDetailInfo';
import Buttons from './component/Buttons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../utils/theme/theme';
import { ProfileStackScreenProps } from '../../../navigation/types';
import * as UpdateSelect from '../UpdateProfile/slice/selector';
// import Toast from 'react-native-root-toast';

function UserProfile({ navigation, route }: ProfileStackScreenProps<'Profile'>) {
  const rootNavigation = useNavigation();
  const userId = '65912f4bf08aa8195e56e7e1';

  const { actions } = useUserProfileScreenSlice();
  const dispatch = useDispatch();
  const isUpdateting = useSelector(UpdateSelect.selectIsUpdating);

  // selector
  const user = useSelector(select.selectUser);
  const isLoading = useSelector(select.selectIsLoading);

  // state
  const [avatarUri, setAvatarUri] = useState(user.avatar);
  const [coverPhotoUri, setCoverPhotoUri] = useState(user.coverPhoto);

  useEffect(() => {
    dispatch(actions.getUserProfile(userId));
  }, [isUpdateting]);

  useEffect(() => {
    setAvatarUri(user.avatar);
    setCoverPhotoUri(user.coverPhoto);
  }, [user]);

  const handleLogout = () => {
    // You need to implement the logout logic here
    rootNavigation.navigate('Login');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { userId });
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} />
      ) : (
        <View style={styles.container}>
          <UserBasicInfo coverPhotoUri={coverPhotoUri} avatarUri={avatarUri} name={user.name} />
          <UserDetailInfo user={user} />
          <Buttons onEditProfile={handleEditProfile} onLogout={handleLogout} />
        </View>
      )}
    </>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
});
