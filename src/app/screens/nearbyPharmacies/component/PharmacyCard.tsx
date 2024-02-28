import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { Flex, Text, Image, Button } from '../../../components/Basic';
import { Ipharmacies } from '../slice/types';

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
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  };
  const handleZoomPress = () => {
    setRegion({
      latitude: pharmacy.location.coordinates[1],
      longitude: pharmacy.location.coordinates[0],
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    });
  };

  return (
    <Flex
      flexDirection="row"
      padding={16}
      borderBottomWidth={1}
      borderBottomColor="#ccc"
      backgroundColor="#fff"
    >
      <Image
        source={{ uri: pharmacy.logo }}
        width={100}
        height={100}
        marginRight={16}
        borderRadius={8}
      />
      <Flex flex={1} justifyContent="space-between">
        <Text fontSize={18} fontWeight="bold" marginBottom={8} color="#333">
          {pharmacy.name}
        </Text>
        <Text color="#666" marginBottom={8}>{`${pharmacy.distance} km away`}</Text>

        <Flex
          flexDirection="row"
          alignItems="center"
          marginBottom={8}
          gap={4}
          justifyContent="space-around"
        >
          <Button
            px={5}
            py={10}
            borderWidth={1}
            borderColor="green"
            borderRadius={8}
            onPress={handleZoomPress}
          >
            <Text color="green">Zoom In</Text>
          </Button>
          <Button
            px={5}
            py={10}
            borderWidth={1}
            borderColor="green"
            borderRadius={8}
            onPress={handleDirectionPress}
          >
            <Text color="green">Zoom Out</Text>
          </Button>
          <Button
            px={5}
            py={10}
            borderWidth={1}
            borderColor="green"
            borderRadius={8}
            onPress={handlePharmacyPress}
          >
            <Text color="green">More</Text>
          </Button>
        </Flex>

        {pharmacy.drug && (
          <Flex>
            <Text color="green">{`Drug: ${pharmacy.drug.name}`}</Text>
            <Text color="green">
              {pharmacy.drug.stockLevel ? `Stock Level: ${pharmacy.drug.stockLevel}` : ''}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default PharmacyCard;

// const styles = StyleSheet.create({
//   cardContainer: {
//     flexDirection: 'row',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginRight: 16,
//     borderRadius: 8,
//   },
//   buttons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     gap: 4,
//     justifyContent: 'space-around',
//   },
//   button: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'green',
//     borderRadius: 8,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
//   distance: {
//     color: '#666',
//     marginBottom: 8,
//   },
//   stock: {
//     color: 'green',
//   },
// });
