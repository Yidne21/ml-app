import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface UserBasicInfoProps {
  coverPhotoUri: string;
  avatarUri: string;
  name: string;
}

const UserBasicInfo: React.FC<UserBasicInfoProps> = ({ coverPhotoUri, avatarUri, name }) => {
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
      </View>
      <View style={styles.avatarBox}>
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
