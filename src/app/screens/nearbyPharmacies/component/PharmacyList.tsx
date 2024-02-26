import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';

interface IPharmacyListProps {
  pharmacies: Ipharmacies[];
  setRegion: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}

function PharmacyList({ pharmacies, setRegion }: IPharmacyListProps) {
  return (
    <FlatList
      data={pharmacies}
      renderItem={({ item }) => <PharmacyCard pharmacy={item} setRegion={setRegion} />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 10,
  },
});

export default PharmacyList;
