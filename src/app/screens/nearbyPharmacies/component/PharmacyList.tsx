import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';
import { Flex } from '../../../components/Basic';

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
    <Flex flex={1}>
      <FlatList
        data={pharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} setRegion={setRegion} />}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </Flex>
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 10,
  },
});

export default PharmacyList;
