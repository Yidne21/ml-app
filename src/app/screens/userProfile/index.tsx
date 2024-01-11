import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as select from './slice/selector';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import UserBasicInfo from './component/UserBasicInfo';
import UserDetailInfo from './component/UserDetailInfo';
import Buttons from './component/Buttons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../utils/theme/theme';
import { ProfileStackScreenProps } from '../../../navigation/types';
import * as UpdateSelect from '../UpdateProfile/slice/selector';
import Header from '../../components/Custom/Header';
import { removeSingleData } from '../../../utils/configs/asyncStorage';
import useStoredUserData from '../../../utils/hooks/useStoreUserData';
import { getData } from '../../../utils/configs/asyncStorage';

function UserProfile({ navigation }: ProfileStackScreenProps<'Profile'>) {
  const rootNavigation = useNavigation();
  const userData = useStoredUserData();
  const [user, setUser] = useState(userData);
  const userId = user._id;
  // state
  const [avatarUri, setAvatarUri] = useState(user.avatar);
  const [coverPhotoUri, setCoverPhotoUri] = useState(user.coverPhoto);

  const isLoading = useSelector(select.selectIsLoading);
  const isUpdated = useSelector(UpdateSelect.selectIsUpdated);

  useEffect(() => {
    setAvatarUri(user.avatar);
    setCoverPhotoUri(user.coverPhoto);
  }, [user]);

  const fetchUser = async () => {
    const userData = await getData('userData');
    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
  }, [isUpdated]);

  const handleLogout = async () => {
    await removeSingleData('userData');
    rootNavigation.navigate('WalkThrough');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { userId });
  };

  return (
    <View style={styles.rootContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} />
      ) : (
        <>
          <View style={styles.IconContainer}>
            <Header showRightIcon={true} />
          </View>
          <View style={styles.container}>
            <UserBasicInfo coverPhotoUri={coverPhotoUri} avatarUri={avatarUri} name={user.name} />
            <UserDetailInfo user={user} />
            <Buttons onEditProfile={handleEditProfile} onLogout={handleLogout} />
          </View>
        </>
      )}
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  IconContainer: {
    position: 'absolute',
    width: '100%',
    padding: 16,
    zIndex: 1,
    justifyContent: 'space-between',
  },
});
