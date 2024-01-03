import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';

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
      <View style={styles.coverBox}>
        <Image
          source={{
            uri:
              coverPhotoUri ||
              'https://fakeimg.pl/400x200/bdbdbd/ffffff?text=Cover+Photo&font=noto',
          }}
          style={styles.coverPhoto}
        />
        {isEditMode && (
          <TouchableOpacity
            onPress={() => {
              pickImage(false);
            }}
          >
            <MaterialIcons
              name="camera-alt"
              size={44}
              color={theme.colors.primary[500]}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.avatarBox}>
        {isEditMode && (
          <TouchableOpacity style={styles.cameraBtn} onPress={() => pickImage(true)}>
            <MaterialIcons
              name="camera-alt"
              size={34}
              color={theme.colors.primary[500]}
              style={styles.cameraIconAvatar}
            />
          </TouchableOpacity>
        )}
        <Image
          source={{
            uri: avatarUri || 'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=avatar&font=noto',
          }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  coverBox: {
    width: '100%',
    height: 200,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  avatarBox: {},
  cameraBtn: {
    zIndex: 1,
    backgroundColor: theme.colors.transparent,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -26,
    right: 10,
    zIndex: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: theme.shadows.sm,
  },
  cameraIconAvatar: {
    position: 'absolute',
    bottom: -80,
    right: 10,
    zIndex: 1,
    backgroundColor: theme.shadows.sm,
    padding: 5,
    borderRadius: 10,
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
});
export default UserBasicInfo;
