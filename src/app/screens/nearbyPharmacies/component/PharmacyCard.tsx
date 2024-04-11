import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { Flex, Text, Box, Image, Button } from '../../../components/Basic';
import { Ipharmacies } from '../slice/types';
import { theme } from '../../../../utils/theme/theme';
import { wp, hp, fp } from '../../../../utils/constants';

interface IPharmacyCardProps {
  pharmacy: Ipharmacies;
  setRegion: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}

function PharmacyCard({ pharmacy, setRegion }: IPharmacyCardProps) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const handlePharmacyPress = () => {
    // Navigate to PharmacyDetail screen with the pharmacy details
    navigation.navigate('PharmacyDetail', {
      pharmacyId: pharmacy._id /* Other parameters if needed */,
    });
  };

  const handleDirectionPress = () => {
    setRegion({
      latitude: pharmacy.location.coordinates[1],
      longitude: pharmacy.location.coordinates[0],
      latitudeDelta: 5,
      longitudeDelta: 5,
    });
  };
  const handleZoomPress = () => {
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
        <Text fontSize={fp(2.5)} fontWeight="bold" mb={hp(0.2)} color="#333">
          {pharmacy.name}
        </Text>
        <Text color="#666" marginBottom={hp(0.2)}>{`${pharmacy.distance} km away`}</Text>

        <Box flexDirection="row" alignItems={'center'} mb={'5px'} gap={4} mt={'8px'}>
          <Button
            px={'10px'}
            py={'5px'}
            borderWidth={1}
            borderColor={theme.colors.primary[900]}
            borderRadius={8}
            onPress={handleZoomPress}
          >
            <Text color="green" fontSize={fp(1.5)}>
              Zoom In
            </Text>
          </Button>
          <Button
            px={'15px'}
            py={'5px'}
            borderWidth={1}
            borderColor="green"
            borderRadius={8}
            onPress={handleDirectionPress}
          >
            <Text color="green" fontSize={fp(1.5)}>
              Zoom Out
            </Text>
          </Button>
          <Button
            px={'15px'}
            py={'5px'}
            borderWidth={1}
            borderColor="green"
            borderRadius={8}
            onPress={handlePharmacyPress}
          >
            <Text color="green" fontSize={fp(1.5)}>
              More
            </Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default PharmacyCard;
