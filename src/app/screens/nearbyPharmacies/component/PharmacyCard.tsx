import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
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
    <View style={styles.cardContainer}>
      <Image source={{ uri: pharmacy.logo }} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pharmacy.name}</Text>
        <Text style={styles.distance}>{`${pharmacy.distance} km away`}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleZoomPress}>
            <Text style={styles.stock}>Zoom In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDirectionPress}>
            <Text style={styles.stock}>Zoom Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePharmacyPress}>
            <Text style={styles.stock}>More</Text>
          </TouchableOpacity>
        </View>

        {pharmacy.drug && (
          <View>
            <Text style={styles.stock}>{`Drug: ${pharmacy.drug.name}`}</Text>
            <Text style={styles.stock}>
              {pharmacy.drug.stockLevel ? `Stock Level: ${pharmacy.drug.stockLevel}` : ''}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  distance: {
    color: '#666',
    marginBottom: 8,
  },
  stock: {
    color: 'green',
  },
});

export default PharmacyCard;
