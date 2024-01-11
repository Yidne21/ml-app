import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';

function PharmacyList({ pharmacies }: { pharmacies: Ipharmacies[] }) {
  return (
    <FlatList
      data={pharmacies}
      renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
      style={styles.flatList}
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
