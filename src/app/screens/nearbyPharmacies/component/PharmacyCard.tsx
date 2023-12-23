import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ipharmacies } from '../slice/types';

function PharmacyCard({ pharmacy }: { pharmacy: Ipharmacies }) {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const handlePharmacyPress = () => {
    // Navigate to PharmacyDetail screen with the pharmacy details
    navigation.navigate('PharmacyDetail', {
      pharmacyId: pharmacy._id /* Other parameters if needed */,
    });
  };

  return (
    <TouchableOpacity onPress={handlePharmacyPress}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: pharmacy.logo }} style={styles.logo} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pharmacy.name}</Text>
          <Text style={styles.distance}>{`${pharmacy.distance} km away`}</Text>
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
    </TouchableOpacity>
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
