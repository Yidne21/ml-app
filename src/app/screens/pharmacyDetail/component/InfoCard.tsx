import React from 'react';
import { Dimensions, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import renderStars from '../../../components/Custom/DinamicStar';
import { Ipharmacy } from '../slice/types';
import { Flex, Text, Button } from '../../../components/Basic';

interface IPharmacyInfoProps {
  pharmacyInfo: Ipharmacy;
}
function InfoCard({ pharmacyInfo }: IPharmacyInfoProps) {
  const renderIconRow = (iconName: string, iconSize: number, text: string) => (
    <Flex flexDirection="row" alignItems="center" my={'5px'} padding={'3px'} gap={10}>
      <FontAwesome name={iconName} size={iconSize} color="green" width={24} />
      <Text>{text}</Text>
    </Flex>
  );

  return (
    <Flex
      position="absolute"
      backgroundColor="white"
      height={220}
      width={Dimensions.get('window').width - 40}
      top={Dimensions.get('window').height / 4 - 80}
      padding={'25px'}
      borderRadius={20}
      mx={'20px'}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)"
      borderColor={'#ccc'}
      borderWidth={1}
    >
      <Flex position="absolute" top={10} left={20}>
        <Text fontSize={18} fontWeight="bold" marginTop={'10px'}>
          {pharmacyInfo.name}
        </Text>
        {renderIconRow('phone-square', 20, pharmacyInfo.phoneNumber)}
        {renderIconRow('envelope-square', 20, pharmacyInfo.email)}
        {renderIconRow('map-marker', 25, pharmacyInfo.address)}
      </Flex>

      <Flex
        flexDirection="row"
        alignItems="center"
        gap={10}
        position="absolute"
        left={20}
        bottom={15}
      >
        <Text fontSize={18} fontWeight="bold">
          {pharmacyInfo.avgRating}
        </Text>
        {renderStars(pharmacyInfo.avgRating, 'infoCard')}
      </Flex>

      <Flex
        flexDirection="row"
        justifyContent="space-between"
        position="absolute"
        bottom={10}
        right={20}
      >
        {pharmacyInfo.socialMedia &&
          Object.entries(pharmacyInfo.socialMedia).map(([platform, url]) => (
            <Button
              key={platform}
              style={{
                padding: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                width: 35,
                height: 35,
                alignItems: 'center',
                backgroundColor: getSocialMediaColor(platform),
              }}
              onPress={() => Linking.openURL(url)}
            >
              <FontAwesome name={getSocialMediaIcon(platform)} size={14} color="white" />
            </Button>
          ))}
      </Flex>
    </Flex>
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

export default InfoCard;
