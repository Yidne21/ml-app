import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';

function PharmacyList({ pharmacies }: { pharmacies: Ipharmacies[] }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={pharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 16,
  },
});

export default PharmacyList;
