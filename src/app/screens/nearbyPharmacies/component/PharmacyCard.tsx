import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { Flex, Text, Box, Image, Button } from '../../../components/Basic';
import { Ipharmacies } from '../slice/types';
import { theme } from '../../../../utils/theme/theme';
import { wp, hp, fp } from '../../../../utils/constants';
import { Linking, Platform } from 'react-native';
import { FlatList } from 'react-native';

interface IPharmacyCardProps {
  pharmacy: Ipharmacies;
  setRegion: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
  flatListRef: React.RefObject<FlatList<Ipharmacies>>;
}

function PharmacyCard({ pharmacy, setRegion, flatListRef }: IPharmacyCardProps) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleMorePress = () => {
    // Navigate to PharmacyDetail screen with the pharmacy details
    navigation.navigate('PharmacyDetail', {
      pharmacyId: pharmacy._id /* Other parameters if needed */,
    });
  };

  const handleDirectionPress = () => {
    const [longitude, latitude] = pharmacy.location.coordinates;
    const url = Platform.select({
      ios: `http://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`,
      android: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    });
    if (url) {
      Linking.openURL(url);
    }
  };
  const handleZoomPress = () => {
    const headerHeight = hp(40);
    flatListRef.current?.scrollToOffset({
      offset: 0 - headerHeight,
      animated: true,
    });
    setRegion({
      latitude: pharmacy.location.coordinates[1],
      longitude: pharmacy.location.coordinates[0],
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return (
    <Flex
      flexDirection="row"
      padding={'16px'}
      borderBottomWidth={1}
      borderBottomColor="#ccc"
      backgroundColor={'#fff'}
      alignItems={'center'}
      gap={3}
      width={wp(100)}
    >
      <Image
        source={{ uri: pharmacy.logo }}
        width={wp(20)}
        maxWidth={200}
        maxHeight={200}
        height={wp(20)}
        marginRight={'16px'}
        borderRadius={8}
      />
      <Flex flex={1}>
        <Text fontSize={fp(1.5)} fontWeight="bold" mb={hp(0.2)} color="black">
          {pharmacy.name}
        </Text>
        <Text color="#666" marginBottom={hp(0.2)}>{`${pharmacy.distance} km away`}</Text>

        <Box flexDirection="row" alignItems={'center'} mb={'5px'} gap={10} mt={'8px'}>
          <Button
            px={'10px'}
            py={'5px'}
            borderWidth={1}
            borderColor={theme.colors.primary[300]}
            borderRadius={5}
            onPress={handleZoomPress}
          >
            <Text color="black" fontSize={fp(1.5)}>
              Zoom In
            </Text>
          </Button>
          <Button
            px={'15px'}
            py={'5px'}
            borderWidth={1}
            borderColor={theme.colors.primary[300]}
            borderRadius={5}
            onPress={handleDirectionPress}
          >
            <Text color="black" fontSize={fp(1.5)}>
              Direction
            </Text>
          </Button>
          <Button
            px={'15px'}
            py={'5px'}
            borderWidth={1}
            borderColor={theme.colors.primary[300]}
            borderRadius={5}
            onPress={handleMorePress}
          >
            <Text color="black" fontSize={fp(1.5)}>
              More
            </Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default PharmacyCard;
