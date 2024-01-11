import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../../utils/theme/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { DrugSearchStackParamList } from '../../../../navigation/types';
import { Idrug } from '../slice/types';

function DrugItemCard({ drug }: { drug: Idrug }) {
  const navigation = useNavigation<NavigationProp<DrugSearchStackParamList>>();
  const handleDrugCardPress = () => {
    // Navigate to DrugDetail screen with the drug details
    navigation.navigate('DrugDetail', {
      drugId: drug._id /* Other parameters if needed */,
    });
  };
  return (
    <TouchableOpacity onPress={handleDrugCardPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: drug.drugPhoto[2] }} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.drugName}>{drug.name}</Text>
          <View style={styles.detailContainer}>
            <View style={styles.detail}>
              <MaterialIcons name="local-pharmacy" size={24} color={theme.colors.transparent} />
              <Text style={styles.text}>{drug.pharmacy.name}</Text>
            </View>
            <View style={styles.detail}>
              <MaterialIcons name="location-pin" size={24} color={theme.colors.transparent} />
              <Text style={styles.text}>{drug.pharmacy.distance} km away</Text>
            </View>
            <View style={styles.detail}>
              <MaterialIcons name="money" size={24} color={theme.colors.transparent} />
              <Text>{drug.price} Birr</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default DrugItemCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 40,
    alignItems: 'center',
    height: Dimensions.get('window').width / 1.6,
    borderWidth: 1,
    elevation: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.shadows.sm,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 50,
    height: Dimensions.get('window').width / 3.8,
    borderBottomEndRadius: 10,
    padding: 5,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  drugName: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailContainer: {
    margin: 5,
  },
  text: {
    fontSize: 10,
  },
  imageContainer: {
    borderTopEndRadius: 10,
    backgroundColor: theme.shadows.sm,
    width: Dimensions.get('window').width / 2 - 40,
    height: Dimensions.get('window').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
