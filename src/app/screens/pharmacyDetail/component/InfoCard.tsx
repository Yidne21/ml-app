import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import renderStars from '../../../components/Custom/DinamicStar';

const pharmacyInfo = {
  _id: '657711b99f521e451a499338',
  location: {
    coordinates: [37.7801, 13.4574],
  },
  name: 'Collier, Grady and Schowalter',
  address: 'Suite 342',
  phoneNumber: '875-339-9034 x7295',
  email: 'Shea_Hahn@gmail.com',
  logo: 'https://picsum.photos/seed/SD3Gylb/100/100',
  socialMedia: {
    facebook: 'https://tan-maternity.biz',
    twitter: 'https://vain-limit.com/',
    telegram: 'https://vain-limit.com/',
  },
  reviews: [
    {
      _id: '657711ba9f521e451a49944a',
      feedback:
        'Adhaero assumenda vitae talis abbas terra usitas deleniti. Deripio adiuvo sed teneo desparatus ait cras est creator nihil. Aurum ceno acervus vulnero appello a commodi audacia nostrum.',
      user: {
        _id: '657711b89f521e451a4992c4',
        name: 'Peggy Frami-Hauck IV',
      },
      rating: 0.89,
    },
    {
      _id: '657711ba9f521e451a49944e',
      feedback:
        'Adopto tersus architecto somnus centum comis clamo. Ducimus suasoria vado decumbo coadunatio. Spiritus cuppedia tolero.',
      user: {
        _id: '657711b89f521e451a4992cb',
        name: 'Christine Konopelski',
      },
      rating: 2.25,
    },
    {
      _id: '657711ba9f521e451a499472',
      feedback:
        'Callide abduco depulso demo thalassinus. Iusto terebro tribuo approbo. Venustas deputo testimonium videlicet fugiat defaeco assentator viridis tui subito.',
      user: {
        _id: '657711b89f521e451a4992c4',
        name: 'Peggy Frami-Hauck IV',
      },
      rating: 0.43,
    },
  ],
  avgRating: 1.19,
};

function InfoCard() {
  const renderIconRow = (iconName: string, iconSize: number, text: string) => (
    <View style={styles.iconContainer}>
      <FontAwesome name={iconName} size={iconSize} color="green" style={styles.icon} />
      <Text>{text}</Text>
    </View>
  );

  return (
    <View style={styles.infoContainer}>
      <View style={styles.nameSection}>
        <Text style={styles.name}>{pharmacyInfo.name}</Text>
        {renderIconRow('phone-square', 20, pharmacyInfo.phoneNumber)}
        {renderIconRow('envelope-square', 20, pharmacyInfo.email)}
        {renderIconRow('map-marker', 25, pharmacyInfo.address)}
      </View>

      <View style={styles.ratingSection}>
        <Text style={styles.averageRating}>{pharmacyInfo.avgRating}</Text>
        {renderStars(pharmacyInfo.avgRating, 'infoCard')}
      </View>

      <View style={styles.socialMediaButtons}>
        {Object.entries(pharmacyInfo.socialMedia).map(([platform, url]) => (
          <TouchableOpacity
            key={platform}
            style={[styles.socialMediaButton, { backgroundColor: getSocialMediaColor(platform) }]}
            onPress={() => Linking.openURL(url)}
          >
            <FontAwesome name={getSocialMediaIcon(platform)} size={14} color="white" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const getSocialMediaColor = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return '#3b5998';
    case 'twitter':
      return '#1DA1F2';
    case 'telegram':
      return '#0088CC';
    default:
      return '#000'; // Default color
  }
};

const getSocialMediaIcon = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return 'facebook';
    case 'twitter':
      return 'twitter';
    case 'telegram':
      return 'telegram';
    default:
      return 'question'; // Default icon
  }
};

const styles = StyleSheet.create({
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  averageRating: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  socialMediaButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 35,
    height: 35,
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 220,
    width: Dimensions.get('window').width - 40,
    top: Dimensions.get('window').height / 4 - 80,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
  },

  nameSection: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    left: 20,
    bottom: 15,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 3,
    gap: 10, // Adjust spacing between icon rows
  },
  icon: {
    width: 24,
  },
});

export default InfoCard;
